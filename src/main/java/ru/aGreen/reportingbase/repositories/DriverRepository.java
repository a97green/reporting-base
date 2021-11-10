package ru.aGreen.reportingbase.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.aGreen.reportingbase.entity.Driver;

public interface DriverRepository extends CrudRepository<Driver, Long> {
}
