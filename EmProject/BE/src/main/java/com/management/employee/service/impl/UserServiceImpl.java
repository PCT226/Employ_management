package com.management.employee.service.impl;

import com.management.employee.entity.CustomerUserDetail;
import com.management.employee.entity.User;
import com.management.employee.repository.UserRespository;
import com.management.employee.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRespository userRespository;

    @Override
    public User findUserName(String username) {
        return userRespository.findByUsername(username);
    }

    @Override
    public Boolean existsByUsername(String username) {
        return userRespository.existsByUsername(username);
    }

    @Override
    public User createUser(User user) {
        return userRespository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRespository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }
        return new CustomerUserDetail(user);
    }
}
