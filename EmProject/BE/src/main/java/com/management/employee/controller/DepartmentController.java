package com.management.employee.controller;

import com.management.employee.entity.Department;
import com.management.employee.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class DepartmentController {
    @Autowired
    private DepartmentService departmentService;

    @GetMapping(value = "/department/getAll")
    public List<Department> getAllDepartment() {
        return departmentService.getAllDepartment();
    }

    @PostMapping(value = "/department/createDepartment")
    public Department createDepartment(@RequestBody Department department) {
        return departmentService.createDepartment(department);
    }

    @PutMapping(value ="/department/updateDepartment")
    public Department updateDepartment(@RequestBody Department department) {
        return departmentService.updateDepartment(department);
    }

    @DeleteMapping(value = "/department/deleteDepartment/{id}")
    public void deleteDepartment(@PathVariable int id) {
        departmentService.deleteDepartment(id);
    }
}
