<?php

namespace PruebaRRHH\Application\Common\Middleware;

use PruebaRRHH\Domain\Shared\AggregateRoot;
use Symfony\Component\Messenger\Envelope;
use Symfony\Component\Messenger\Middleware\MiddlewareInterface;
use Symfony\Component\Messenger\Middleware\StackInterface;
use Symfony\Component\Messenger\Stamp\DispatchAfterCurrentBusStamp;
use Symfony\Component\Messenger\MessageBusInterface;

final class DomainEventsMiddleware implements MiddlewareInterface
{
    public function __construct(private MessageBusInterface $eventBus) {}

    public function handle(Envelope $envelope, StackInterface $stack): Envelope
    {
        $message = $envelope->getMessage();

        $envelope = $stack->next()->handle($envelope, $stack);

        if (!$message instanceof AggregateRoot) {
            return $envelope;
        }

        foreach ($message->pullDomainEvents() as $event) {
            $this->eventBus->dispatch($event, [new DispatchAfterCurrentBusStamp()]);
        }

        return $envelope;
    }
}