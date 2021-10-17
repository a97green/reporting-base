package ru.aGreen.reportingbase.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.aGreen.reportingbase.entity.PaymentForm;

public interface PaymentFormRepository extends CrudRepository<PaymentForm, Long> {
}
