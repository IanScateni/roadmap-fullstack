<?php

namespace PruebaRRHH\Domain\Employee;

use PruebaRRHH\Domain\Employee\Event\EmployeeHired;
use PruebaRRHH\Domain\Employee\Event\EmployeeTerminated;
use PruebaRRHH\Domain\Employee\Event\SalaryChanged;
use PruebaRRHH\Domain\Employee\Event\DepartmentChanged;
use PruebaRRHH\Domain\Employee\Event\EmployeeStatusChanged;
use PruebaRRHH\Domain\Employee\EmployeeId;
use PruebaRRHH\Domain\Employee\EmployeeRole;
use PruebaRRHH\Domain\Employee\EmployeeStatus;
use PruebaRRHH\Domain\Shared\AggregateRoot;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\Table(name: 'employees')]
class Employee extends AggregateRoot
{
    #[ORM\Id]
    #[ORM\Column(type: 'string', length: 36)]
    private string $id;

    #[ORM\Column(type: 'string')]
    private string $name;

    #[ORM\Column(type: 'string')]
    private string $email;

    #[ORM\Column(type: 'string')]
    private string $department;

    #[ORM\Column(type: 'string')]
    private string $role;

    #[ORM\Column(type: 'float')]
    private float $salary;

    #[ORM\Column(type: 'string')]
    private string $status;

    /** @var array<object> */
    private array $domainEvents = [];

    // Constructor privado para forzar uso de método de fábrica
    private function __construct(
        string $id,
        string $name,
        string $email,
        string $department,
        string $role,
        float $salary,
        string $status = 'ACTIVE'
    ) {
        $this->id = $id;
        $this->name = $name;
        $this->email = $email;
        $this->department = $department;
        $this->role = $role;
        $this->salary = $salary;
        $this->status = $status;
    }

    public static function hire(
        EmployeeId $id,
        EmployeeName $name,
        EmployeeEmail $email,
        EmployeeDepartment $department,
        EmployeeRole $role,
        float $salary
    ): self {
        $employee = new self(
            $id->value(),
            $name->value(),
            $email->value(),
            $department->value(),
            $role->value(),
            $salary,
            'ACTIVE'
        );

        $employee->recordEvent(new EmployeeHired($id));

        return $employee;
    }

    public function terminate(): void
    {
        if ($this->status === 'TERMINATED') {
            return;
        }

        $this->status = 'TERMINATED';
        $this->recordEvent(new EmployeeTerminated(new EmployeeId($this->id)));
    }

    public function changeStatus(EmployeeStatus $status): void
    {
        if ($this->status === $status->value) {
            return;
        }

        $this->status = $status->value;

        $this->recordEvent(
            new EmployeeStatusChanged(
                new EmployeeId($this->id),
                $status->value
            )
        );
    }

    public function changeSalary(float $newSalary): void
    {
        if ($this->salary === $newSalary) {
            return;
        }

        $this->salary = $newSalary;
        $this->recordEvent(new SalaryChanged(new EmployeeId($this->id), $newSalary));
    }

    public function changeDepartment(EmployeeDepartment $newDepartment): void
    {
        if ($this->department === $newDepartment->value()) {
            return;
        }

        $this->department = $newDepartment->value();
        $this->recordEvent(new DepartmentChanged(new EmployeeId($this->id), $newDepartment));
    }

    // Getters
    public function id(): EmployeeId
    {
        return new EmployeeId($this->id);
    }

    public function name(): EmployeeName
    {
        return new EmployeeName($this->name);
    }

    public function email(): EmployeeEmail
    {
        return new EmployeeEmail($this->email);
    }

    public function department(): EmployeeDepartment
    {
        return new EmployeeDepartment($this->department);
    }

    public function role(): EmployeeRole
    {
        return new EmployeeRole($this->role);
    }

    public function salary(): float
    {
        return $this->salary;
    }

    public function status(): string
    {
        return $this->status;
    }
}