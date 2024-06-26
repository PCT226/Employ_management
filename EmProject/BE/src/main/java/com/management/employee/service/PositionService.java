package com.management.employee.service;

import com.management.employee.entity.Position;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PositionService {
    public List<Position> getAllPosition();

    public Position createPosition(Position position);

    public Position updatePosition(Position position);

    public void deletePosition(int id);
}
