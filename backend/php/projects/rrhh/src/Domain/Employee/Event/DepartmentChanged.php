<?php

namespace PruebaRRHH\Domain\Employee\Event;

use PruebaRRHH\Domain\Employee\EmployeeId;
use PruebaRRHH\Domain\Employee\EmployeeDepartment;

final class DepartmentChanged
{
    public function __construct(
        public readonly EmployeeId $employeeId,
        public readonly EmployeeDepartment $newDepartment
    ) {}
}