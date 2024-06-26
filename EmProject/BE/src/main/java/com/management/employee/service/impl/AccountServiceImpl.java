package com.management.employee.service.impl;

import com.management.employee.dto.AccountInfoDTO;
import com.management.employee.dto.AccountInfoDTOimpl;
import com.management.employee.dto.AccountInfoExtraDTO;
import com.management.employee.entity.Account;
import com.management.employee.repository.AccountRepository;
import com.management.employee.service.AccountService;
import com.management.employee.specification.AccountSpecification;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.function.Function;

@Service
public class AccountServiceImpl implements AccountService {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired(required=true)
    private AccountRepository accountRepository;

    @Override
    public List<Account> getAllAccount(String search) {
        Specification<Account> whereAcc = null;
        if (!StringUtils.isEmpty(search)) {
            AccountSpecification AccSpe =new AccountSpecification("name","LIKE",search);
            whereAcc=Specification.where(AccSpe);
        }



        return accountRepository.findAll(whereAcc);
    }

    @Override
    public List<Account> getAccountByDepId(int id) {
        return accountRepository.findByDepartmentId(id);
    }

    @Override
    public Account getAccountById(Integer id) {
        return accountRepository.findByAccountId(id);
    }

    @Override
    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public Account updateAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public void deleteAccount(int id) {
        accountRepository.deleteById(id);
    }

    @Override
    public List<AccountInfoDTO> getAccountInfo() {
        return accountRepository.getAccountInfo();
    }


    @Override
    public List<AccountInfoExtraDTO> getAccountsInfoExtra() {
        return accountRepository.getAccountsInfoExtra();
    }

    @Override
    public List<Account> searchAccount(int age, String skill, String level, int departmentId) {
        return accountRepository.findByAgeOrSkillOrLevelOrDepartmentId(age, skill, level, departmentId);
    }
    @Override
    public List<Account> createMultiAccount(List<Account> accounts) {
        return accountRepository.saveAllAndFlush(accounts);
    }

    @Override
    public Page<Account> getAllAccounts(Pageable pageable, String search) {
        Specification<Account> whereAcc = null;
        if (!StringUtils.isEmpty(search)) {
            AccountSpecification AccSpe =new AccountSpecification("name","LIKE",search);
            whereAcc=Specification.where(AccSpe);
        }



        return accountRepository.findAll(whereAcc,pageable);
    }




}
