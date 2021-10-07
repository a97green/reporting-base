package ru.aGreen.reportingbase.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.aGreen.reportingbase.model.Manager;

public interface ManagerRepository extends CrudRepository<Manager, Long> {
}
