package ru.aGreen.reportingbase.entity.reference;

import ru.aGreen.reportingbase.entity.Passport;
import ru.aGreen.reportingbase.entity.Requisites;
import ru.aGreen.reportingbase.enums.SubtypeEnterprise;
import ru.aGreen.reportingbase.enums.TypeEnterprise;

import javax.persistence.*;

@Entity
public class Enterprise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name = "";
    private String legalAddress = ""; //юр.
    private String postalAddress = ""; // почт
    private String actualAddress = ""; // факт
    private String numberPhone = "";
    private String inn = "";
    private String kpp = "";
    private String ogrn = "";
    private String ogrnIp = "";
    private String atiCode = "";
    private TypeEnterprise type;
    private SubtypeEnterprise subType;
    @OneToOne
    private Passport passport;
    @OneToOne
    private Requisites requisites;

    public Enterprise() {
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

    public String getOgrn() {
        return ogrn;
    }

    public void setOgrn(String ogrn) {
        this.ogrn = ogrn;
    }

    public String getOgrnIp() {
        return ogrnIp;
    }

    public void setOgrnIp(String ogrnIp) {
        this.ogrnIp = ogrnIp;
    }

    public String getAtiCode() {
        return atiCode;
    }

    public void setAtiCode(String atiCode) {
        this.atiCode = atiCode;
    }

    public TypeEnterprise getType() {
        return type;
    }

    public void setType(TypeEnterprise type) {
        this.type = type;
    }

    public SubtypeEnterprise getSubType() {
        return subType;
    }

    public void setSubType(SubtypeEnterprise subType) {
        this.subType = subType;
    }

    public Passport getPassport() {
        return passport;
    }

    public void setPassport(Passport passport) {
        this.passport = passport;
    }

    public Requisites getRequisites() {
        return requisites;
    }

    public void setRequisites(Requisites requisites) {
        this.requisites = requisites;
    }
}
