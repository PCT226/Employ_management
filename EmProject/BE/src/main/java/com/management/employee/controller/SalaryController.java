package com.management.employee.controller;

import com.management.employee.entity.Salary;
import com.management.employee.service.SalaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class SalaryController {
    @Autowired
    private SalaryService salaryService;

    @GetMapping(value = "/salary/getAll")
    public List<Salary> getAllSalary() {
        return salaryService.getAllSalary();
    }

    @PostMapping(value = "/salary/createSalary")
    public Salary createSalary(@RequestBody Salary salary) {
        return salaryService.createSalary(salary);
    }

    @PutMapping(value ="/salary/updateSalary")
    public Salary updateSalary(@RequestBody Salary salary) {
        return salaryService.updateSalary(salary);
    }

    @DeleteMapping(value = "/salary/deleteSalary/{id}")
    public void deleteSalary(@PathVariable int id) {
        salaryService.deleteSalary(id);
    }
}
