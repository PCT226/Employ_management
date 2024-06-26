package com.management.employee.controller;

import com.management.employee.entity.User;
import com.management.employee.entity.enums.Role;
import com.management.employee.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {
    @Autowired
    UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @PostMapping("/login")
    public User login(Principal principal){
        String username = principal.getName();// get username
        User user = userService.findUserName(username);
        return user;
    }
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody User signUp){

        // add check for username exists in a DB
        if(userService.existsByUsername(signUp.getUsername())){
            return new ResponseEntity<>("Username is already taken!", HttpStatus.BAD_REQUEST);
        }

        // create user object
        User user = new User();
        user.setUsername(signUp.getUsername());
        user.setPassword(passwordEncoder.encode(signUp.getPassword()));
        user.setEmail(signUp.getEmail());
        user.setRole(Role.ROLE_USER.name());
        userService.createUser(user);
        return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
    }

}
