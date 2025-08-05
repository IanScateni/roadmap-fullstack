<?php

namespace PruebaRRHH\Application\Employee\Command\HireEmployee;

final class HireEmployeeCommand
{
    public function __construct(
        public readonly string $name,
        public readonly string $email,
        public readonly string $department,
        public readonly string $role,
        public readonly float $salary
    ) {}
}