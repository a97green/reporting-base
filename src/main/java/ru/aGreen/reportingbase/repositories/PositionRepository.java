package ru.aGreen.reportingbase.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.aGreen.reportingbase.model.Position;

public interface PositionRepository extends CrudRepository<Position, Long> {
}