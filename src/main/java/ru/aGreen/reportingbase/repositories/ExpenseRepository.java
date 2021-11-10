package ru.aGreen.reportingbase.repositories;

import org.springframework.data.repository.CrudRepository;
import ru.aGreen.reportingbase.entity.Expense;

public interface ExpenseRepository extends CrudRepository<Expense, Long> {
}
