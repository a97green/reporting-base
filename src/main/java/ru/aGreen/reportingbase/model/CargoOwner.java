package ru.aGreen.reportingbase.model;

import javax.persistence.*;

@Entity
public class CargoOwner {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String legalAddress; //юр.
    private String postalAddress; // почт
    private String actualAddress; // факт
    private String numberPhone;
    private String typeOrganization;
    private String inn;
    private String kpp;
    private String ogrn;
    private String ogrnIp;
    @OneToOne
    private Passport passport;
    @OneToOne
    private Requisites requisites;

    public CargoOwner() {
    }

    //Конструктор ООО
    public CargoOwner(String name, String legalAddress, String postalAddress, String actualAddress, String numberPhone, String inn, String kpp, String typeOrganization, String ogrn, Requisites requisites) {
        this.name = name;
        this.legalAddress = legalAddress;
        this.postalAddress = postalAddress;
        this.actualAddress = actualAddress;
        this.numberPhone = numberPhone;
        this.inn = inn;
        this.kpp = kpp;
        this.typeOrganization = typeOrganization;
        this.ogrn = ogrn;
        this.requisites = requisites;
    }

    //Конструктор ИП
    public CargoOwner(String name, String legalAddress, String postalAddress, String actualAddress, String numberPhone, String inn, String typeOrganization, String ogrnIp, Passport passport, Requisites requisites) {
        this.name = name;
        this.legalAddress = legalAddress;
        this.postalAddress = postalAddress;
        this.actualAddress = actualAddress;
        this.numberPhone = numberPhone;
        this.inn = inn;
        this.typeOrganization = typeOrganization;
        this.ogrnIp = ogrnIp;
        this.passport = passport;
        this.requisites = requisites;
    }

    //Конструктор ЧЛ
    public CargoOwner(String name, String numberPhone, String typeOrganization, Passport passport, Requisites requisites) {
        this.name = name;
        this.numberPhone = numberPhone;
        this.typeOrganization = typeOrganization;
        this.passport = passport;
        this.requisites = requisites;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLegalAddress() {
        return legalAddress;
    }

    public void setLegalAddress(String legalAddress) {
        this.legalAddress = legalAddress;
    }

    public String getPostalAddress() {
        return postalAddress;
    }

    public void setPostalAddress(String postalAddress) {
        this.postalAddress = postalAddress;
    }

    public String getActualAddress() {
        return actualAddress;
    }

    public void setActualAddress(String actualAddress) {
        this.actualAddress = actualAddress;
    }

    public String getNumberPhone() {
        return numberPhone;
    }

    public void setNumberPhone(String numberPhone) {
        this.numberPhone = numberPhone;
    }

    public String getOgrn() {
        return ogrn;
    }

    public void setOgrn(String ogrn) {
        this.ogrn = ogrn;
    }

    public Requisites getRequisites() {
        return requisites;
    }

    public void setRequisites(Requisites requisites) {
        this.requisites = requisites;
    }

    public String getTypeOrganization() {
        return typeOrganization;
    }

    public void setTypeOrganization(String typeOrganization) {
        this.typeOrganization = typeOrganization;
    }

    public String getOgrnIp() {
        return ogrnIp;
    }

    public void setOgrnIp(String ogrnIp) {
        this.ogrnIp = ogrnIp;
    }

    public Passport getPassport() {
        return passport;
    }

    public void setPassport(Passport passport) {
        this.passport = passport;
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
}
