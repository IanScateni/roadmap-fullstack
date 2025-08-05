<?php

declare(strict_types=1);

namespace Tests\Domain\Employee;

use PHPUnit\Framework\TestCase;
use PruebaRRHH\Application\Employee\Command\HireEmployee\HireEmployeeCommand;
use PruebaRRHH\Application\Employee\Command\HireEmployee\HireEmployeeCommandHandler;
use PruebaRRHH\Domain\Employee\Employee;
use PruebaRRHH\Domain\Employee\EmployeeRepository;

final class HireEmployeeCommandHandlerTest extends TestCase
{
    public function test_it_hires_a_new_employee(): void
    {
        $name = 'Ian Scateni';
        $email = 'ian@example.com';
        $department = 'Development';
        $role = 'Software Engineer';
        $salary = 800000.0;

        $command = new HireEmployeeCommand($name, $email, $department, $role, $salary);

        $repository = $this->createMock(EmployeeRepository::class);

        $repository->expects($this->once())
        ->method('save')
        ->with($this->callback(function (Employee $employee) use (
            $name, $email, $department, $role, $salary
        ) {
            $ref = new \ReflectionClass($employee);

            $getProp = fn(string $prop) => $ref->getProperty($prop)->getValue($employee);

            $ref->getProperty('name')->setAccessible(true);
            $ref->getProperty('email')->setAccessible(true);
            $ref->getProperty('department')->setAccessible(true);
            $ref->getProperty('role')->setAccessible(true);
            $ref->getProperty('salary')->setAccessible(true);
            $ref->getProperty('status')->setAccessible(true);

            return $getProp('name') === $name &&
                $getProp('email') === $email &&
                $getProp('department') === $department &&
                $getProp('role') === $role &&
                $getProp('salary') === $salary &&
                $getProp('status') === 'ACTIVE';
        }));
        
        $handler = new HireEmployeeCommandHandler($repository);
        $handler($command);
    }
}