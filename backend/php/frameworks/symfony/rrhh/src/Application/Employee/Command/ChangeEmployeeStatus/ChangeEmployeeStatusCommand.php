<?php

namespace PruebaRRHH\Application\Employee\Command\ChangeEmployeeStatus;

final class ChangeEmployeeStatusCommand
{
    public function __construct(
        public readonly string $id,
        public readonly string $newStatus
    ) {}
}