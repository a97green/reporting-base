package ru.aGreen.reportingbase.entity;

import ru.aGreen.reportingbase.entity.reference.Enterprise;

import javax.persistence.*;

@Entity
public class BookUpd {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long enumerate;
    @OneToOne
    private Enterprise ourCompany;
    @OneToOne
    private Enterprise customer;
    private String workType = "";
    private Double amount;
    private Double expenditure;
    private String agreedDate = "";
    private String exposedDate = "";
    private String signedDate = "";
    private String paidDate = "";
    private String comment = "";

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getEnumerate() {
        return enumerate;
    }

    public void setEnumerate(Long enumerate) {
        this.enumerate = enumerate;
    }

    public String getWorkType() {
        return workType;
    }

    public void setWorkType(String workType) {
        this.workType = workType;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public Double getExpenditure() {
        return expenditure;
    }

    public void setExpenditure(Double expenditure) {
        this.expenditure = expenditure;
    }

    public String getAgreedDate() {
        return agreedDate;
    }

    public void setAgreedDate(String agreedDate) {
        this.agreedDate = agreedDate;
    }

    public String getExposedDate() {
        return exposedDate;
    }

    public void setExposedDate(String exposedDate) {
        this.exposedDate = exposedDate;
    }

    public String getSignedDate() {
        return signedDate;
    }

    public void setSignedDate(String signedDate) {
        this.signedDate = signedDate;
    }

    public String getPaidDate() {
        return paidDate;
    }

    public void setPaidDate(String paidDate) {
        this.paidDate = paidDate;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Enterprise getOurCompany() {
        return ourCompany;
    }

    public void setOurCompany(Enterprise ourCompany) {
        this.ourCompany = ourCompany;
    }

    public Enterprise getCustomer() {
        return customer;
    }

    public void setCustomer(Enterprise customer) {
        this.customer = customer;
    }
}
