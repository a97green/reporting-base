package ru.aGreen.reportingbase.entity;

import ru.aGreen.reportingbase.entity.enums.TypePaying;

import javax.persistence.*;

@Entity
public class Paying {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double amount;
    private String amountWords;
    private String payTerms;
    private TypePaying type;
    @OneToOne
    private PaymentForm paymentForm;

    public Paying() {
        this.amount = 0.0;
        this.amountWords = "";
        this.payTerms = "";
        this.paymentForm = new PaymentForm() ;
        this.type = TypePaying.CUSTOMER;
    }

    public Paying(Double amount, String amountWords, String payTerms, PaymentForm paymentForm, TypePaying type) {
        this.amount = amount;
        this.amountWords = amountWords;
        this.payTerms = payTerms;
        this.paymentForm = paymentForm;
        this.type = type;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public String getAmountWords() {
        return amountWords;
    }

    public void setAmountWords(String amountWords) {
        this.amountWords = amountWords;
    }

    public String getPayTerms() {
        return payTerms;
    }

    public void setPayTerms(String payTerms) {
        this.payTerms = payTerms;
    }

    public PaymentForm getPaymentForm() {
        return paymentForm;
    }

    public void setPaymentForm(PaymentForm paymentForm) {
        this.paymentForm = paymentForm;
    }

    public TypePaying getType() {
        return type;
    }

    public void setType(TypePaying type) {
        this.type = type;
    }
}
