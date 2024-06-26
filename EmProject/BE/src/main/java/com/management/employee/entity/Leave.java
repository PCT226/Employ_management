package com.management.employee.entity;

import javax.persistence.*;

import com.management.employee.entity.general.AbstractAuditingEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="`leave`")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Leave extends AbstractAuditingEntity<Integer> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "leave_id")
    private Integer leaveId;
    @Column(name = "account_id")
    private int accountId;
    @Column(name = "decrease")
    private float decrease;
    @Column(name = "reason")
    private String reason;
}
