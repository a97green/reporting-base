package ru.aGreen.reportingbase.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Expense {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double expenditure;
    private String comment;

    public Expense() {
    }

    public Expense(Double expenditure, String comment) {
        this.expenditure = expenditure;
        this.comment = comment;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getExpenditure() {
        return expenditure;
    }

    public void setExpenditure(Double amount) {
        this.expenditure = amount;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
}
