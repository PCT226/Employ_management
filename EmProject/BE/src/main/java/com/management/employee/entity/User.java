package com.management.employee.entity;

import com.management.employee.entity.general.AbstractAuditingEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name ="`user`")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User extends AbstractAuditingEntity<Integer> {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "account_id")
    private Integer accountId;
    @Column(name = "user_name")
    private String username;
    @Column(name = " `password` ")
    private String password;
    @Column(name = "email")
    private String email;
    @Column(name = "`role`")
    private String role;


    //Reactive -Gateway
}

