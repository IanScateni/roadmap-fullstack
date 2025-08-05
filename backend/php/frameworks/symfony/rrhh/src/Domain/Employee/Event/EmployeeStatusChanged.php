<?php

namespace PruebaRRHH\Domain\Employee\Event;

use PruebaRRHH\Domain\Employee\EmployeeId;
use PruebaRRHH\Domain\Shared\DomainEvent\DomainEvent;

final class EmployeeStatusChanged implements DomainEvent
{
    public function __construct(
        private EmployeeId $id,
        private string $newStatus
    ) {}

    public function id(): EmployeeId
    {
        return $this->id;
    }

    public function newStatus(): string
    {
        return $this->newStatus;
    }
}