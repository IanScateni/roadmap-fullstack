<?php

namespace PruebaRRHH\Application\Employee\Query\GetEmployees;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Messenger\HandleTrait;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class GetEmployeesController extends AbstractController
{
    use HandleTrait;

    public function __construct(MessageBusInterface $messageBus)
    {
        $this->messageBus = $messageBus;
    }

    #[Route('/employees', name: 'list_employees', methods: ['GET'])]
    public function __invoke(): JsonResponse
    {
        $employees = $this->handle(new GetEmployeesQuery());

        return $this->json($employees);
    }
}