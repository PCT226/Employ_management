package com.management.employee.entity;

import javax.persistence.*;

import com.management.employee.entity.general.AbstractAuditingEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="position")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Position extends AbstractAuditingEntity<Integer> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "position_id")
    private Integer positionId;
    @Column(name = "position_name")
    private String positionName;
    @Column(name = "description")
    private String description;
}
