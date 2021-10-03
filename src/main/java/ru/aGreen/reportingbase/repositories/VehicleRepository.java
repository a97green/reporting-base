package ru.aGreen.reportingbase.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.aGreen.reportingbase.model.Vehicle;

public interface VehicleRepository extends CrudRepository<Vehicle, Long> {
}
