package ru.aGreen.reportingbase.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.aGreen.reportingbase.entity.Doc;

public interface DocRepository extends CrudRepository<Doc, Long> {
}
