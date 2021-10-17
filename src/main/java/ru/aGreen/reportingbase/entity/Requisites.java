package ru.aGreen.reportingbase.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Requisites {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String inn;
    private String kpp;
    private String payAccount;
    private String corAccount;
    private String bik;
    private String nameBank;

    public Requisites() {
    }

    public Requisites(String inn, String kpp, String payAccount, String corAccount, String bik, String nameBank) {
        this.inn = inn;
        this.kpp = kpp;
        this.payAccount = payAccount;
        this.corAccount = corAccount;
        this.bik = bik;
        this.nameBank = nameBank;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getInn() {
        return inn;
    }

    public void setInn(String inn) {
        this.inn = inn;
    }

    public String getKpp() {
        return kpp;
    }

    public void setKpp(String kpp) {
        this.kpp = kpp;
    }

    public String getPayAccount() {
        return payAccount;
    }

    public void setPayAccount(String payAccount) {
        this.payAccount = payAccount;
    }

    public String getCorAccount() {
        return corAccount;
    }

    public void setCorAccount(String corAccount) {
        this.corAccount = corAccount;
    }

    public String getBik() {
        return bik;
    }

    public void setBik(String bik) {
        this.bik = bik;
    }

    public String getNameBank() {
        return nameBank;
    }

    public void setNameBank(String nameBank) {
        this.nameBank = nameBank;
    }
}
