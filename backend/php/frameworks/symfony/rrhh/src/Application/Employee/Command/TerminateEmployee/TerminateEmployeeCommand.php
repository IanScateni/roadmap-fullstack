<?php

namespace PruebaRRHH\Application\Employee\Command\TerminateEmployee;

class TerminateEmployeeCommand
{
    public function __construct(
        public readonly string $employeeId
    ) {}
}