<?php

namespace PruebaRRHH\Api\Controller;

use PruebaRRHH\Application\Employee\Command\HireEmployee\HireEmployeeCommand;
use PruebaRRHH\Application\Employee\Command\TerminateEmployee\TerminateEmployeeCommand;
use PruebaRRHH\Application\Employee\Command\ChangeEmployeeStatus\ChangeEmployeeStatusCommand;
use PruebaRRHH\Application\Employee\Query\GetEmployees\GetEmployeesQuery;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Messenger\Stamp\HandledStamp;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class EmployeeController extends AbstractController
{
    public function __construct(
        private MessageBusInterface $bus
    ) {}

    #[Route('/employees', name: 'create_employee', methods: ['POST'])]
    public function hire(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        $command = new HireEmployeeCommand(
            $data['name'] ?? '',
            $data['email'] ?? '',
            $data['department'] ?? '',
            $data['role'] ?? '',
            (float) ($data['salary'] ?? 0)
        );

        $this->bus->dispatch($command);

        return new JsonResponse(['message' => 'Employee created'], 201);
    }

    #[Route('/employees/{id}/terminate', name: 'terminate_employee', methods: ['PATCH'])]
    public function terminate(string $id): JsonResponse
    {
        $command = new TerminateEmployeeCommand($id);

        $this->bus->dispatch($command);

        return new JsonResponse(['message' => 'Employee terminated'], 200);
    }

    #[Route('/employees/{id}/status', name: 'change_employee_status', methods: ['PATCH'])]
    public function changeStatus(string $id, Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (!isset($data['newStatus'])) {
            return new JsonResponse(['error' => 'Missing newStatus'], 400);
        }

        try {
            $command = new ChangeEmployeeStatusCommand(
                $id,
                $data['newStatus']
            );

            $this->bus->dispatch($command);

            return new JsonResponse(['message' => 'Employee status updated'], 200);
        } catch (\Symfony\Component\Messenger\Exception\HandlerFailedException $e) {
            $previous = $e->getPrevious();

            if ($previous instanceof \Symfony\Component\HttpKernel\Exception\BadRequestHttpException) {
                return new JsonResponse(['error' => $previous->getMessage()], 400);
            }

            return new JsonResponse(['error' => 'Unexpected error'], 500);
        }
    }

    #[Route('/employees', name: 'list_employees', methods: ['GET'])]
    public function list(): JsonResponse
    {
        $query = new GetEmployeesQuery();

        $envelope = $this->bus->dispatch($query);

        $employees = $envelope->last(HandledStamp::class)?->getResult() ?? [];

        return new JsonResponse($employees);
    }
}