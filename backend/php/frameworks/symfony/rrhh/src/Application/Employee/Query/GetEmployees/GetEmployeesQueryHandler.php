<?php

namespace PruebaRRHH\Application\Employee\Query\GetEmployees;

use PruebaRRHH\Domain\Employee\Employee;
use PruebaRRHH\Infrastructure\Persistence\Doctrine\DoctrineEmployeeRepository;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AsMessageHandler]
class GetEmployeesQueryHandler
{
    public function __construct(
        private DoctrineEmployeeRepository $repository
    ) {}

    public function __invoke(GetEmployeesQuery $query): array
    {
        $employees = $this->repository->findAll();

        return array_map(function (Employee $employee) {
            return [
                'id' => $employee->id()->value(),
                'name' => $employee->name()->value(),
                'email' => $employee->email()->value(),
                'department' => $employee->department()->value(),
                'role' => $employee->role()->value(),
                'salary' => $employee->salary(),
                'status' => $employee->status(),
            ];
        }, $employees);
    }
}