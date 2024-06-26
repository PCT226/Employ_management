package com.management.employee.service;

import com.management.employee.dto.AccountInfoDTO;
import com.management.employee.dto.AccountInfoDTOimpl;
import com.management.employee.dto.AccountInfoExtraDTO;
import com.management.employee.entity.Account;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AccountService {
    public List<Account> getAllAccount(String search);
    public List<Account> getAccountByDepId(int id);
    public Account getAccountById(Integer id);

    public Account createAccount(Account account);

    public Account updateAccount(Account account);

    public void deleteAccount(int id);
    public List<AccountInfoDTO> getAccountInfo();
    public List<AccountInfoExtraDTO> getAccountsInfoExtra();
    public List<Account> searchAccount(int age,String skill,String level,int departmentId);
    public List<Account> createMultiAccount(List<Account> accounts);
    public Page<Account> getAllAccounts(Pageable pageable, String search);

}
