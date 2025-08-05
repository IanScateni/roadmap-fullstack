<?php

namespace PruebaRRHH\Domain\Employee\Event;

use PruebaRRHH\Domain\Employee\EmployeeId;

final class EmployeeHired
{
    public function __construct(
        public readonly EmployeeId $employeeId
    ) {}
}