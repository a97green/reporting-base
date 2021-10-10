package ru.aGreen.reportingbase.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Forming {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    private Manager manager;
    @OneToOne
    private CargoOwner cargoOwner;
    @OneToOne
    private Transporter transporter;
    @OneToOne
    private Driver driver;
    @OneToOne
    private Vehicle vehicle;
    @OneToMany
    private List<Cargo> cargo;
    @OneToOne
    private Place loading;
    @OneToOne
    private Place unloading;
    @OneToOne
    private CustomerPay customerPay;
    @OneToOne
    private CarrierPay carrierPay;
    private String comment;
    private String date;


    public Forming() {
    }

    public Forming(Manager manager, CargoOwner cargoOwner, Transporter transporter, Driver driver, Vehicle vehicle, List<Cargo> cargo, Place loading, Place unloading, CustomerPay customerPay, CarrierPay carrierPay, String date, String comment) {
        this.manager = manager;
        this.cargoOwner = cargoOwner;
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
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Manager getManager() {
        return manager;
    }

    public void setManager(Manager manager) {
        this.manager = manager;
    }

    public CargoOwner getCargoOwner() {
        return cargoOwner;
    }

    public void setCargoOwner(CargoOwner cargoOwner) {
        this.cargoOwner = cargoOwner;
    }

    public Transporter getTransporter() {
        return transporter;
    }

    public void setTransporter(Transporter transporter) {
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

    public CustomerPay getCustomerPay() {
        return customerPay;
    }

    public void setCustomerPay(CustomerPay customerPay) {
        this.customerPay = customerPay;
    }

    public CarrierPay getCarrierPay() {
        return carrierPay;
    }

    public void setCarrierPay(CarrierPay carrierPay) {
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
}
