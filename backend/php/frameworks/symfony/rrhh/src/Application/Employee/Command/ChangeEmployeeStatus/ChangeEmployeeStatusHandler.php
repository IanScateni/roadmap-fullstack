<?php

namespace PruebaRRHH\Application\Employee\Command\ChangeEmployeeStatus;

use PruebaRRHH\Domain\Employee\EmployeeRepository;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;
use PruebaRRHH\Domain\Employee\EmployeeId;
use PruebaRRHH\Domain\Employee\EmployeeStatus;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;

#[AsMessageHandler]
class ChangeEmployeeStatusHandler
{
    public function __construct(
        private EmployeeRepository $repository,
        private EventDispatcherInterface $eventDispatcher // 👈 nuevo
    ) {}

    public function __invoke(ChangeEmployeeStatusCommand $command): void
    {
        $employee = $this->repository->findById(new EmployeeId($command->id));

        if (!$employee) {
            throw new \RuntimeException('Employee not found');
        }

        try {
            $newStatus = EmployeeStatus::from($command->newStatus);
        } catch (\ValueError) {
            throw new BadRequestHttpException("Invalid status: {$command->newStatus}");
        }

        $employee->changeStatus($newStatus);
        $this->repository->save($employee);

        foreach ($employee->pullDomainEvents() as $event) {
            $this->eventDispatcher->dispatch($event);
        }
    }
}