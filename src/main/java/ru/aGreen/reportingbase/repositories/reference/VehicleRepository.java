package ru.aGreen.reportingbase.repositories.reference;

import org.springframework.data.repository.CrudRepository;
import ru.aGreen.reportingbase.entity.reference.Vehicle;

public interface VehicleRepository extends CrudRepository<Vehicle, Long> {
}
