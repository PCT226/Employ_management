package com.management.employee.repository;

import com.management.employee.entity.Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ContractRepository extends JpaRepository<Contract,Integer>, JpaSpecificationExecutor<Contract> {
    @Query(value = "select pay_roll from `contract` where account_id= :id",nativeQuery = true)
    public Float getPayrollByAccount(@Param("id") Integer id);
}
