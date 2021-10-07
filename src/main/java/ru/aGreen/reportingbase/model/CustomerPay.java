package ru.aGreen.reportingbase.model;

import javax.persistence.*;

@Entity
public class CustomerPay {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String amount;
    private String amountWords;
    private String payTerms;
    @OneToOne
    private FormPay formPay;
    @OneToOne
    private OurCompany ourCompany;

    public CustomerPay() {
    }

    public CustomerPay(String amount, String amountWords, String payTerms, FormPay formPay, OurCompany ourCompany) {
        this.amount = amount;
        this.amountWords = amountWords;
        this.payTerms = payTerms;
        this.formPay = formPay;
        this.ourCompany = ourCompany;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
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

    public FormPay getFormPay() {
        return formPay;
    }

    public void setFormPay(FormPay formPay) {
        this.formPay = formPay;
    }

    public OurCompany getOurCompany() {
        return ourCompany;
    }

    public void setOurCompany(OurCompany ourCompany) {
        this.ourCompany = ourCompany;
    }
}
