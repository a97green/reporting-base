package ru.aGreen.reportingbase.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.aGreen.reportingbase.entity.Place;

public interface PlaceRepository extends CrudRepository<Place, Long> {
}
