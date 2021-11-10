package ru.aGreen.reportingbase.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Forming {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    private Manager manager = new Manager();
    @OneToOne
    private Enterprise ourCompany = new Enterprise();
    @OneToOne
    private Enterprise customer = new Enterprise();
    @OneToOne
    private Enterprise transporter = new Enterprise();
    @OneToOne
    private Driver driver = new Driver();
    @OneToOne
    private Vehicle vehicle = new Vehicle();
    @OneToMany
    private List<Cargo> cargo = new ArrayList<>();
    @OneToOne
    private Place loading = new Place();
    @OneToOne
    private Place unloading = new Place();
    @OneToOne
    private Paying customerPay = new Paying();
    @OneToOne
    private Paying carrierPay = new Paying();
    private String comment = "";
    private String date = "";
    private String commentDoc = "";
    private String numPay = "";
    private String numAct = "";

    public Forming() {
    }

    public Forming(Enterprise ourCompany, Manager manager, Enterprise customer, Enterprise transporter, Driver driver, Vehicle vehicle, List<Cargo> cargo, Place loading, Place unloading, Paying customerPay, Paying carrierPay, String date, String comment, String numPay, String numAct) {
        this.ourCompany = ourCompany;
        this.manager = manager;
        this.customer = customer;
        this.transporter = transporter;
        this.driver = driver;
        this.vehicle = vehicle;
        this.cargo = cargo;
        this.loading = loading;
        this.unloading = unloading;
        this.customerPay = customerPay;
        this.carrierPay = carrierPay;
        this.date = date;
        this.comment = comment;
        this.numPay = numPay;
        this.numAct = numAct;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Enterprise getOurCompany() {
        return ourCompany;
    }

    public void setOurCompany(Enterprise ourCompany) {
        this.ourCompany = ourCompany;
    }

    public Manager getManager() {
        return manager;
    }

    public void setManager(Manager manager) {
        this.manager = manager;
    }

    public Enterprise getCustomer() {
        return customer;
    }

    public void setCustomer(Enterprise customer) {
        this.customer = customer;
    }

    public Enterprise getTransporter() {
        return transporter;
    }

    public void setTransporter(Enterprise transporter) {
        this.transporter = transporter;
    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public List<Cargo> getCargo() {
        return cargo;
    }

    public void setCargo(List<Cargo> cargo) {
        this.cargo = cargo;
    }

    public Place getLoading() {
        return loading;
    }

    public void setLoading(Place loading) {
        this.loading = loading;
    }

    public Place getUnloading() {
        return unloading;
    }

    public void setUnloading(Place unloading) {
        this.unloading = unloading;
    }

    public Paying getCustomerPay() {
        return customerPay;
    }

    public void setCustomerPay(Paying customerPay) {
        this.customerPay = customerPay;
    }

    public Paying getCarrierPay() {
        return carrierPay;
    }

    public void setCarrierPay(Paying carrierPay) {
        this.carrierPay = carrierPay;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getCommentDoc() {
        return commentDoc;
    }

    public void setCommentDoc(String commentDoc) {
        this.commentDoc = commentDoc;
    }

    public String getNumPay() {
        return numPay;
    }

    public void setNumPay(String numPay) {
        this.numPay = numPay;
    }

    public String getNumAct() {
        return numAct;
    }

    public void setNumAct(String numAct) {
        this.numAct = numAct;
    }
}
