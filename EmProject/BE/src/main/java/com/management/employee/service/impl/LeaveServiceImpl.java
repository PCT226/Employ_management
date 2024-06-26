package com.management.employee.service.impl;

import com.management.employee.entity.Leave;
import com.management.employee.repository.LeaveRepository;
import com.management.employee.service.LeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class LeaveServiceImpl implements LeaveService {
    @Autowired(required=true)
    private LeaveRepository leaveRepository;

    @Override
    public List<Leave> getAllLeave() {
        return leaveRepository.findAll();
    }

    @Override
    public Leave createLeave(Leave leave) {
        leave.setCreatedDate(new Date());
        return leaveRepository.save(leave);
    }

    @Override
    public Leave updateLeave(Leave leave) {
        leave.setLastModifiedDate(new Date());
        return leaveRepository.save(leave);
    }

    @Override
    public void deleteLeave(int id) {
        leaveRepository.deleteById(id);
    }
}
