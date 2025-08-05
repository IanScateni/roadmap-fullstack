<?php

declare(strict_types=1);

use PHPUnit\Framework\TestCase;
use PruebaRRHH\Domain\Employee\EmployeeId;
use PruebaRRHH\Domain\Employee\Event\EmployeeStatusChanged;

final class EmployeeStatusChangedTest extends TestCase
{
    public function testEmployeeStatusChangedStoresDataCorrectly(): void
    {
        $id = new EmployeeId('abc-123');
        $newStatus = 'ACTIVE';

        $event = new EmployeeStatusChanged($id, $newStatus);

        $this->assertSame($id, $event->id());
        $this->assertSame($newStatus, $event->newStatus());
    }
}