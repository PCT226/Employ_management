package com.management.employee.service;

import com.management.employee.entity.Leave;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LeaveService {
    public List<Leave> getAllLeave();

    public Leave createLeave(Leave leave);

    public Leave updateLeave(Leave leave);

    public void deleteLeave(int id);
}
