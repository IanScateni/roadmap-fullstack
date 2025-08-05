<?php

namespace PruebaRRHH\Application\Employee\Command\ChangeSalary;

use App\Domain\Employee\EmployeeId;
use App\Domain\Employee\EmployeeRepository;

class ChangeSalaryHandler
{
    public function __construct(
        private EmployeeRepository $repository
    ) {}

    public function __invoke(ChangeSalaryCommand $command): void
    {
        $employee = $this->repository->find(new EmployeeId($command->employeeId));

        if (!$employee) {
            throw new \RuntimeException('Employee not found');
        }

        $employee->changeSalary($command->newSalary);

        $this->repository->save($employee);
    }
}