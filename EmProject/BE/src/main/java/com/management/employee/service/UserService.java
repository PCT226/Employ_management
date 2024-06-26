package com.management.employee.service;

import com.management.employee.entity.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
public interface UserService extends UserDetailsService {
    User findUserName(String username);
    Boolean existsByUsername(String username);

    User createUser(User user);
}

