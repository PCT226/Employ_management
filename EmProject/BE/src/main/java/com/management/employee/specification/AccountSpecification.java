package com.management.employee.specification;

import com.management.employee.entity.Account;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

@RequiredArgsConstructor
@AllArgsConstructor
public class AccountSpecification implements Specification<Account> {
    private String field; // column
    private Object operator;
    private String value;

    @Override
    public Predicate toPredicate(Root<Account> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
        if (operator.equals("LIKE")) {
            if (field.equals("Account")) {

                return criteriaBuilder.like(root.get(field).get("name"), "%" + value.toString() + "%");

            } else {

                return criteriaBuilder.like(root.get(field), "%" + value.toString() + "%");
            }
        }
            return null;



    }
}
