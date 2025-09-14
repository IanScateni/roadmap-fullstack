<?php

namespace PruebaRRHH\Infrastructure\Persistence\Doctrine;

use PruebaRRHH\Domain\Employee\Employee;
use PruebaRRHH\Domain\Employee\EmployeeId;
use PruebaRRHH\Domain\Employee\EmployeeRepository;
use Doctrine\ORM\EntityManagerInterface;

class DoctrineEmployeeRepository implements EmployeeRepository
{
    private EntityManagerInterface $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function save(Employee $employee): void
    {
        $this->em->persist($employee);
        $this->em->flush();
    }

    public function findById(EmployeeId $id): ?Employee
    {
        return $this->em->getRepository(Employee::class)->find($id->value());
    }

    public function findAll(): array
    {
        return $this->em->getRepository(Employee::class)->findAll();
    }
}