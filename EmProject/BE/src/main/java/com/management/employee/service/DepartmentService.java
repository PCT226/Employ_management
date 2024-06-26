package com.management.employee.service;

import com.management.employee.entity.Department;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DepartmentService {
    public List<Department> getAllDepartment();

    public Department createDepartment(Department department);

    public Department updateDepartment(Department department);

    public void deleteDepartment(int id);
}
