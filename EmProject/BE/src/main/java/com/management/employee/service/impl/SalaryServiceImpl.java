package com.management.employee.service.impl;

import com.management.employee.entity.Salary;
import com.management.employee.repository.BonusRepository;
import com.management.employee.repository.ContractRepository;
import com.management.employee.repository.LeaveRepository;
import com.management.employee.repository.SalaryRepository;
import com.management.employee.service.SalaryService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class SalaryServiceImpl implements SalaryService {

    private SalaryRepository salaryRepository;
    private ContractRepository contractRepository;
    private BonusRepository bonusRepository;
    private LeaveRepository leaveRepository;

    @Override
    public List<Salary> getAllSalary() {
        return salaryRepository.findAll();
    }

    @Override
    public Salary createSalary(Salary salary) {
        float vat1 = 0.05f;
        float vat2 = 0.1f;
        float vat3 = 0.15f;
        float vat4 = 0.2f;
        float vat5 = 0.25f;
        float contractPayroll = (contractRepository.getPayrollByAccount(salary.getAccountId()) == null)
                ? 0 : contractRepository.getPayrollByAccount(salary.getAccountId());
        float totalBonus = (bonusRepository.getTotalBonusByAccount(salary.getAccountId()) == null)
                ? 0 : bonusRepository.getTotalBonusByAccount(salary.getAccountId());
        float totalLeave = (leaveRepository.getTotalLeaveByAccount(salary.getAccountId()) == null)
                ? 0 : leaveRepository.getTotalLeaveByAccount(salary.getAccountId());
        float actualSalary = contractPayroll + totalBonus - totalLeave;
        if (actualSalary <= 500) {
            actualSalary = actualSalary - actualSalary * vat1;
            log.info("{} VAT: ", vat1);
        } else if (actualSalary > 500 && actualSalary <= 800) {
            actualSalary = actualSalary - actualSalary * vat2;
            log.info("{} VAT: ", vat2);
        } else if (actualSalary > 800 && actualSalary <= 1400) {
            actualSalary = actualSalary - actualSalary * vat3;
            log.info("{} VAT: ", vat3);
        } else if (actualSalary > 1400 && actualSalary <= 2100) {
            actualSalary = actualSalary - actualSalary * vat4;
            log.info("{} VAT: ", vat4);
        }else if (actualSalary > 2100 && actualSalary <= 3200) {
            actualSalary = actualSalary - actualSalary * vat5;
            log.info("{} VAT: ", vat5);
        }

            log.info("{} Contract Payroll ", contractRepository.getPayrollByAccount(salary.getAccountId()));
            log.info("{} Bonus total ", bonusRepository.getTotalBonusByAccount(salary.getAccountId()));
            log.info("{} Leave total ", leaveRepository.getTotalLeaveByAccount(salary.getAccountId()));
            log.info("{} Actual Salary ", actualSalary);

            salary.setActualSalary(actualSalary);

            return salaryRepository.save(salary);
        }


    @Override
    public Salary updateSalary(Salary salary) {
        return salaryRepository.save(salary);
    }

    @Override
    public void deleteSalary(int id) {
        salaryRepository.deleteById(id);
    }
}
