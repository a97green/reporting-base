package ru.aGreen.reportingbase.entity;

import javax.persistence.*;

@Entity
public class Trailer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String model = "";
    private String stateNumber = "";
    @OneToOne
    private Enterprise transporter;

    public Trailer() {
    }

    public Trailer(String model, String stateNumber, Enterprise transporter) {
        this.model = model;
        this.stateNumber = stateNumber;
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

    public Enterprise getTransporter() {
        return transporter;
    }

    public void setTransporter(Enterprise transporter) {
        this.transporter = transporter;
    }
}
