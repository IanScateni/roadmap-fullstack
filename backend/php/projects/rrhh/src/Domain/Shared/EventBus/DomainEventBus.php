<?php

namespace PruebaRRHH\Domain\Shared\EventBus;

interface DomainEventBus
{
    public function dispatch(object $event): void;
}