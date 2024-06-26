package com.management.employee.controller;

import com.management.employee.entity.Position;
import com.management.employee.service.PositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class PositionController {
    @Autowired
    private PositionService positionService;

    @GetMapping(value = "/position/getAll")
    public List<Position> getAllPosition() {
        return positionService.getAllPosition();
    }

    @PostMapping(value = "/position/createPosition")
    public Position createPosition(@RequestBody Position position) {
        return positionService.createPosition(position);
    }

    @PutMapping(value ="/position/updatePosition")
    public Position updatePosition(@RequestBody Position position) {
        return positionService.updatePosition(position);
    }

    @DeleteMapping(value = "/position/deletePosition/{id}")
    public void deletePosition(@PathVariable int id) {
        positionService.deletePosition(id);
    }
}
