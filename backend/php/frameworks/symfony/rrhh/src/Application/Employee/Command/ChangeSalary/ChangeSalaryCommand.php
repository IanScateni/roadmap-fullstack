<?php

namespace PruebaRRHH\Application\Employee\Command\ChangeSalary;

class ChangeSalaryCommand
{
    public function __construct(
        public readonly string $employeeId,
        public readonly float $newSalary
    ) {}
}