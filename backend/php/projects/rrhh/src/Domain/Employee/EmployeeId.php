<?php

namespace PruebaRRHH\Domain\Employee;

use Symfony\Component\Uid\UuidV4;

final class EmployeeId
{
    private string $value;

    public function __construct(?string $value = null)
    {
        $this->value = $value ?? (new UuidV4())->toRfc4122();
    }

    public function value(): string
    {
        return $this->value;
    }

    public function __toString(): string
    {
        return $this->value;
    }

    public static function fromString(string $value): self
    {
        return new self($value);
    }
}