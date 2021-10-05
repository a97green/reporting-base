package ru.aGreen.reportingbase.model;

import javax.persistence.*;

@Entity
public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String numberPhone;
    @OneToOne
    private Transporter transporter;
    @OneToOne
    private Passport passport;

    public Driver() {
    }

    public Driver(String numberPhone, Transporter transporter, Passport passport) {
        this.numberPhone = numberPhone;
        this.transporter = transporter;
        this.passport = passport;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumberPhone() {
        return numberPhone;
    }

    public void setNumberPhone(String numberPhone) {
        this.numberPhone = numberPhone;
    }

    public Transporter getTransporter() {
        return transporter;
    }

    public void setTransporter(Transporter transporter) {
        this.transporter = transporter;
    }

    public Passport getPassport() {
        return passport;
    }

    public void setPassport(Passport passport) {
        this.passport = passport;
    }
}
