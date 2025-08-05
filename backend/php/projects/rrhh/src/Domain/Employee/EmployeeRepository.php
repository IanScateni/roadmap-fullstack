<?php

namespace PruebaRRHH\Domain\Employee;

interface EmployeeRepository
{
    public function save(Employee $employee): void;
    public function findById(EmployeeId $id): ?Employee;
    public function findAll(): array;
}