package ru.aGreen.reportingbase.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.aGreen.reportingbase.model.Passport;

public interface PassportRepository extends CrudRepository<Passport, Long> {
}
