<?php

namespace PruebaRRHH\Application\Employee\Command\HireEmployee;

use Symfony\Component\Messenger\Attribute\AsMessageHandler;
use PruebaRRHH\Domain\Employee\Employee;
use PruebaRRHH\Domain\Employee\EmployeeEmail;
use PruebaRRHH\Domain\Employee\EmployeeId;
use PruebaRRHH\Domain\Employee\EmployeeName;
use PruebaRRHH\Domain\Employee\EmployeeDepartment;
use PruebaRRHH\Domain\Employee\EmployeeRole;
use PruebaRRHH\Domain\Employee\EmployeeRepository;

#[AsMessageHandler]
class HireEmployeeCommandHandler
{
    public function __construct(
        private EmployeeRepository $repository
    ) {}

    public function __invoke(HireEmployeeCommand $command): void
    {
        $employee = Employee::hire(
            new EmployeeId(),
            new EmployeeName($command->name),
            new EmployeeEmail($command->email),
            new EmployeeDepartment($command->department),
            new EmployeeRole($command->role),
            $command->salary
        );

        $this->repository->save($employee);
    }
}