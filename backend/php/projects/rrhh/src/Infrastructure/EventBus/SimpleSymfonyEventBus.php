<?php

namespace PruebaRRHH\Infrastructure\EventBus;

use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use PruebaRRHH\Domain\Shared\EventBus\DomainEventBus;

class SimpleSymfonyEventBus implements DomainEventBus
{
    public function __construct(private EventDispatcherInterface $dispatcher) {}

    public function dispatch(object $event): void
    {
        $this->dispatcher->dispatch($event);
    }
}