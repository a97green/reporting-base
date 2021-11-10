package ru.aGreen.reportingbase.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import ru.aGreen.reportingbase.entity.enums.SubtypeEnterprise;
import ru.aGreen.reportingbase.entity.Enterprise;

import java.util.List;

public interface EnterpriseRepository extends CrudRepository<Enterprise, Long> {
    @Query("SELECT e FROM Enterprise e WHERE e.subType = :subtype")
    List<Enterprise> findBySubtype(@Param("subtype") SubtypeEnterprise subtype);
}
