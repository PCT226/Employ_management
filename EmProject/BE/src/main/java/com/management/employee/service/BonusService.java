package com.management.employee.service;

import com.management.employee.entity.Bonus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BonusService {
    public List<Bonus> getAllBonus();

    public Bonus createBonus(Bonus bonus);

    public Bonus updateBonus(Bonus bonus);

    public void deleteBonus(int id);
}
