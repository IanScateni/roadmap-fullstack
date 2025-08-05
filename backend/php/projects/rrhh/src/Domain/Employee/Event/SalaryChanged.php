<?php

namespace PruebaRRHH\Domain\Employee\Event;

use PruebaRRHH\Domain\Employee\EmployeeId;

final class SalaryChanged
{
    public function __construct(
        public readonly EmployeeId $employeeId,
        public readonly float $newSalary
    ) {}
}