package com.management.employee.service;

import com.management.employee.entity.Salary;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SalaryService {
    public List<Salary> getAllSalary();

    public Salary createSalary(Salary salary);

    public Salary updateSalary(Salary salary);

    public void deleteSalary(int id);
}
