package com.management.employee.repository;

import com.management.employee.entity.Account;
import com.management.employee.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRespository extends JpaRepository<User,Integer> {
    User findByUsername(String username);

    Boolean existsByUsername(String username);

}