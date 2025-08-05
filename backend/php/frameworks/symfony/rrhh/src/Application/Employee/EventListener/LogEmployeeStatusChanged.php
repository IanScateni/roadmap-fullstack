<?php

namespace PruebaRRHH\Application\Employee\EventListener;

use PruebaRRHH\Domain\Employee\Event\EmployeeStatusChanged;
use Psr\Log\LoggerInterface;

final class LogEmployeeStatusChanged
{
    public function __construct(private LoggerInterface $logger) {}

    public function onEmployeeStatusChanged(EmployeeStatusChanged $event): void
    {
        $this->logger->info(sprintf(
            'Evento de dominio registrado: Empleado %s cambió a estado %s',
            $event->id()->value(),
            $event->newStatus()
        ));
    }
}