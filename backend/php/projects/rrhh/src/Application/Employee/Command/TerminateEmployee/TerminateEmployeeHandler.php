<?php

namespace PruebaRRHH\Application\Employee\Command\TerminateEmployee;

use PruebaRRHH\Domain\Employee\EmployeeId;
use PruebaRRHH\Domain\Employee\EmployeeRepository;

class TerminateEmployeeHandler
{
    public function __construct(
        private EmployeeRepository $repository
    ) {}

    public function __invoke(TerminateEmployeeCommand $command): void
    {
        $employee = $this->repository->find(new EmployeeId($command->employeeId));

        if (!$employee) {
            throw new \RuntimeException('Employee not found');
        }

        $employee->terminate();

        $this->repository->save($employee);
    }
}