package com.management.employee.repository;

import com.management.employee.entity.Bonus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BonusRepository extends JpaRepository<Bonus,Integer>, JpaSpecificationExecutor<Bonus> {
    @Query(value = "select SUM(increase) from bonus where account_id= :id " +
            "AND YEAR(created_dated) = YEAR(now()) AND MONTH(created_dated) = MONTH(now())",nativeQuery = true)
    public Float getTotalBonusByAccount(@Param("id") Integer id);
}
