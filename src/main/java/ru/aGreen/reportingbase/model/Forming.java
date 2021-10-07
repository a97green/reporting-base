package ru.aGreen.reportingbase.model;

import javax.persistence.*;

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
    @OneToOne
    private Cargo cargo;
    @OneToOne
    private CustomerPay customerPay;
    @OneToOne
    private CarrierPay carrierPay;
    private String date;

    public Forming() {
    }

    public Forming(Manager manager, CargoOwner cargoOwner, Transporter transporter, Driver driver, Vehicle vehicle, Cargo cargo, CustomerPay customerPay, CarrierPay carrierPay, String date) {
        this.manager = manager;
        this.cargoOwner = cargoOwner;
        this.transporter = transporter;
        this.driver = driver;
        this.vehicle = vehicle;
        this.cargo = cargo;
        this.customerPay = customerPay;
        this.carrierPay = carrierPay;
        this.date = date;
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

    public Cargo getCargo() {
        return cargo;
    }

    public void setCargo(Cargo cargo) {
        this.cargo = cargo;
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
}
