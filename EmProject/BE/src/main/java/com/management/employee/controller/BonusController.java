package com.management.employee.controller;

import com.management.employee.entity.Bonus;
import com.management.employee.service.BonusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class BonusController {
    @Autowired
    private BonusService bonusService;

    @GetMapping(value = "/bonus/getAll")
    public List<Bonus> getAllBonus() {
        return bonusService.getAllBonus();
    }

    @PostMapping(value = "/bonus/createBonus")
    public Bonus createBonus(@RequestBody Bonus bonus) {
        return bonusService.createBonus(bonus);
    }

    @PutMapping(value ="/bonus/updateBonus")
    public Bonus updateBonus(@RequestBody Bonus bonus) {
        return bonusService.updateBonus(bonus);
    }

    @DeleteMapping(value = "/bonus/deleteBonus/{id}")
    public void deleteBonus(@PathVariable int id) {
        bonusService.deleteBonus(id);
    }
}
