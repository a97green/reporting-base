package ru.aGreen.reportingbase.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.aGreen.reportingbase.entity.Position;

public interface PositionRepository extends CrudRepository<Position, Long> {
}
