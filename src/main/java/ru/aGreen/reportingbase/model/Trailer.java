package ru.aGreen.reportingbase.model;

import javax.persistence.*;

@Entity
public class Trailer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String model;
    private String stateNumber;
    @OneToOne
    private Transporter transporter;

    public Trailer() {
    }

    public Trailer(String model, String stateNumber, Transporter transporter) {
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

    public Transporter getTransporter() {
        return transporter;
    }

    public void setTransporter(Transporter transporter) {
        this.transporter = transporter;
    }
}
