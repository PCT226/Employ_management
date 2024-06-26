package com.management.employee.service.impl;

import com.management.employee.entity.Contract;
import com.management.employee.repository.ContractRepository;
import com.management.employee.service.ContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContractServiceImpl implements ContractService {
    @Autowired(required=true)
    private ContractRepository contractRepository;

    @Override
    public List<Contract> getAllContract() {
        return contractRepository.findAll();
    }

    @Override
    public Contract createContract(Contract contract) {
        return contractRepository.save(contract);
    }

    @Override
    public Contract updateContract(Contract contract) {
        return contractRepository.save(contract);
    }

    @Override
    public void deleteContract(int id) {
        contractRepository.deleteById(id);
    }
}
