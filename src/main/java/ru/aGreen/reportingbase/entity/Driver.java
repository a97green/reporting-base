package ru.aGreen.reportingbase.entity;

import javax.persistence.*;

@Entity
public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String numberPhone = "";
    @OneToOne
    private Enterprise transporter = new Enterprise();
    @OneToOne
    private Passport passport = new Passport();

    public Driver() {
    }

    public Driver(String numberPhone, Enterprise transporter, Passport passport) {
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

    public Enterprise getTransporter() {
        return transporter;
    }

    public void setTransporter(Enterprise transporter) {
        this.transporter = transporter;
    }

    public Passport getPassport() {
        return passport;
    }

    public void setPassport(Passport passport) {
        this.passport = passport;
    }
}
