package ru.aGreen.reportingbase.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.aGreen.reportingbase.entity.Passport;

public interface PassportRepository extends CrudRepository<Passport, Long> {
}
