<?php

namespace PruebaRRHH\Domain\Employee\Event;

use PruebaRRHH\Domain\Employee\EmployeeId;

final class EmployeeTerminated
{
    public function __construct(
        public readonly EmployeeId $employeeId
    ) {}
}