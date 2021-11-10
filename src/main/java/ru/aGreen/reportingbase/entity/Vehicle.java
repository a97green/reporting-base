package ru.aGreen.reportingbase.entity;

import javax.persistence.*;

@Entity
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String model = "";
    private String stateNumber = "";
    @OneToOne
    private Trailer trailer = new Trailer();
    @OneToOne
    private Enterprise transporter = new Enterprise();

    public Vehicle() {
    }

    public Vehicle(String model, String stateNumber, Trailer trailer, Enterprise transporter) {
        this.model = model;
        this.stateNumber = stateNumber;
        this.trailer = trailer;
        this.transporter = transporter;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getStateNumber() {
        return stateNumber;
    }

    public void setStateNumber(String stateNumber) {
        this.stateNumber = stateNumber;
    }

    public Trailer getTrailer() {
        return trailer;
    }

    public void setTrailer(Trailer trailer) {
        this.trailer = trailer;
    }

    public Enterprise getTransporter() {
        return transporter;
    }

    public void setTransporter(Enterprise transporter) {
        this.transporter = transporter;
    }
}
