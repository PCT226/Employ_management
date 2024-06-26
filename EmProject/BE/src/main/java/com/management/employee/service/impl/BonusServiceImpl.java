package com.management.employee.service.impl;

import com.management.employee.entity.Bonus;
import com.management.employee.repository.BonusRepository;
import com.management.employee.service.BonusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class BonusServiceImpl implements BonusService {
    @Autowired(required=true)
    private BonusRepository bonusRepository;

    @Override
    public List<Bonus> getAllBonus() {
        return bonusRepository.findAll();
    }

    @Override
    public Bonus createBonus(Bonus bonus) {
        bonus.setCreatedDate(new Date());
        return bonusRepository.save(bonus);
    }

    @Override
    public Bonus updateBonus(Bonus bonus) {
        bonus.setLastModifiedDate(new Date());
        return bonusRepository.save(bonus);
    }

    @Override
    public void deleteBonus(int id) {
        bonusRepository.deleteById(id);
    }
}
