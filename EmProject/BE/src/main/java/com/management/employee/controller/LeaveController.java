package com.management.employee.controller;

import com.management.employee.entity.Leave;
import com.management.employee.service.LeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LeaveController {
    @Autowired
    private LeaveService leaveService;

    @GetMapping(value = "/leave/getAll")
    public List<Leave> getAllLeave() {
        return leaveService.getAllLeave();
    }

    @PostMapping(value = "/leave/createLeave")
    public Leave createLeave(@RequestBody Leave leave) {
        return leaveService.createLeave(leave);
    }

    @PutMapping(value ="/leave/updateLeave")
    public Leave updateLeave(@RequestBody Leave leave) {
        return leaveService.updateLeave(leave);
    }

    @DeleteMapping(value = "/leave/deleteLeave/{id}")
    public void deleteLeave(@PathVariable int id) {
        leaveService.deleteLeave(id);
    }
}
