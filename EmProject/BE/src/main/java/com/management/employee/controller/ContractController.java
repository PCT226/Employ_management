package com.management.employee.controller;

import com.management.employee.entity.Contract;
import com.management.employee.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class ContractController {
    @Autowired
    private ContractService contractService;

    @GetMapping(value = "/contract/getAll")
    public List<Contract> getAllContract() {
        return contractService.getAllContract();
    }

    @PostMapping(value = "/contract/createContract")
    public Contract createContract(@RequestBody Contract contract) {
        return contractService.createContract(contract);
    }

    @PutMapping(value ="/contract/updateContract")
    public Contract updateContract(@RequestBody Contract contract) {
        return contractService.updateContract(contract);
    }

    @DeleteMapping(value = "/contract/deleteContract/{id}")
    public void deleteContract(@PathVariable int id) {
        contractService.deleteContract(id);
    }
}
