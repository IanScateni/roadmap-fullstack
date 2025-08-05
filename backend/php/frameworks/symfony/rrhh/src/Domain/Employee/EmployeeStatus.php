<?php

namespace PruebaRRHH\Domain\Employee;

enum EmployeeStatus: string
{
    case ACTIVE = 'ACTIVE';
    case INACTIVE = 'INACTIVE';
    case VACATION = 'VACATION';
}