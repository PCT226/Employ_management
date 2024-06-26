package com.management.employee.service.impl;

import com.management.employee.entity.Position;
import com.management.employee.repository.PositionRepository;
import com.management.employee.service.PositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositionServiceImpl implements PositionService {
    @Autowired(required=true)
    private PositionRepository positionRepository;

    @Override
    public List<Position> getAllPosition() {
        return positionRepository.findAll();
    }

    @Override
    public Position createPosition(Position position) {
        return positionRepository.save(position);
    }

    @Override
    public Position updatePosition(Position position) {
        return positionRepository.save(position);
    }

    @Override
    public void deletePosition(int id) {
        positionRepository.deleteById(id);
    }
}
