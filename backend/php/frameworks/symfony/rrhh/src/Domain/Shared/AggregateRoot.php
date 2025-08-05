<?php

namespace PruebaRRHH\Domain\Shared;

abstract class AggregateRoot
{
    /** @var array<object> */
    private array $domainEvents = [];

    protected function recordEvent(object $event): void
    {
        $this->domainEvents[] = $event;
    }

    /**
     * Devuelve y limpia los eventos de dominio registrados.
     *
     * @return array<object>
     */
    public function pullDomainEvents(): array
    {
        $events = $this->domainEvents;
        $this->domainEvents = [];
        return $events;
    }
}