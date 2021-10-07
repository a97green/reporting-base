package ru.aGreen.reportingbase.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.aGreen.reportingbase.model.CustomerPay;

public interface CustomerPayRepository extends CrudRepository<CustomerPay, Long> {
}
