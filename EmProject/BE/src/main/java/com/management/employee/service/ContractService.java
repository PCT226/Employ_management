package com.management.employee.service;

import com.management.employee.entity.Contract;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ContractService  {
    public List<Contract> getAllContract();

    public Contract createContract(Contract contract);

    public Contract updateContract(Contract contract);

    public void deleteContract(int id);
}
