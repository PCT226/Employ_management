package com.management.employee.repository;

import com.management.employee.dto.AccountInfoDTO;
import com.management.employee.dto.AccountInfoExtraDTO;
import com.management.employee.entity.Account;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends JpaRepository<Account,Integer>, JpaSpecificationExecutor<Account> {
//    @Query("SELECT * FROM account acc WHERE acc.username = :username")
//    public Account getAccountByUsername(@Param("username") String username);
    @Query(value = "select ad.account_id as AccountId,ad.`name` as name,ad.skill,ad.`level`,dep.department_name as DepartmentName,pos.position_name as PositionName,sa.actual_salary as actualSalary\n" +
            "            from account_detail ad \n" +
            "            inner join department dep on ad.department_id = dep.department_id \n" +
            "            inner join `position` pos on ad.position_id = pos.position_id\n" +
            "            inner join salary sa on ad.account_id =sa.account_id",nativeQuery = true)
    public List<AccountInfoDTO> getAccountInfo();
    @Query(value ="SELECT ad.account_id AS accountId, acc.username AS username, acc.email AS email,  ad.full_name AS fullName, ad.gender AS gender, ad.skill AS skill, ad.`level` AS `level`, \n" +
            "dep.department_name AS departmentName, pos.position_name AS positionName,\n" +
            "con.pay_roll AS payRoll, con.annual AS annual, con.duration AS duration\n" +
            "FROM account_detail ad\n" +
            "INNER JOIN `account` acc ON ad.account_id = acc.account_id\n" +
            "INNER JOIN department dep ON ad.department_id = dep.department_id\n" +
            "INNER JOIN position pos ON ad.position_id = pos.position_id\n" +
            "INNER JOIN contract con ON ad.account_id = con.account_id\n" +
            "WHERE con.is_actived = 1", nativeQuery = true)
    public List<AccountInfoExtraDTO> getAccountsInfoExtra();
    public List<Account> findByDepartmentId(int id);
    public Account findByAccountId(Integer id);

    public List<Account> findByAgeOrSkillOrLevelOrDepartmentId(int age,String skill,String level,int departmentId);

}
