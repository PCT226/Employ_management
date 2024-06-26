package com.management.employee.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountInfoExtraDTOImpl {
    private Integer accountId;
    private String fullName;
    private Boolean gender;
    private String skill;
    private String level;
    private String departmentName;
    private String positionName;
    private String username;
    private String email;
    private float payRoll;
    private float annual;
    private String duration;
}
