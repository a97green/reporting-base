package ru.aGreen.reportingbase.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import ru.aGreen.reportingbase.model.*;
import ru.aGreen.reportingbase.repositories.TrailerRepository;
import ru.aGreen.reportingbase.repositories.TransporterRepository;
import ru.aGreen.reportingbase.repositories.VehicleRepository;

import java.util.NoSuchElementException;

@Controller
public class VehicleController {
    private final VehicleRepository vehicleRepository;
    private final TrailerRepository trailerRepository;
    private final TransporterRepository transporterRepository;

    @Autowired
    public VehicleController(VehicleRepository vehicleRepository, TrailerRepository trailerRepository, TransporterRepository transporterRepository) {
        this.vehicleRepository = vehicleRepository;
        this.trailerRepository = trailerRepository;
        this.transporterRepository = transporterRepository;
    }

    @GetMapping("/vehicle")
    public String getVehicle(Model model) {
        Iterable<Vehicle> vehicles = vehicleRepository.findAll();
        Iterable<Transporter> transporters = transporterRepository.findAll();
        Iterable<Trailer> trailers = trailerRepository.findAll();
        model.addAttribute("title", "Транспортные средства");
        model.addAttribute("description", "На данной странице вы можете просмотреть список транспортных средств");
        model.addAttribute("vehicles", vehicles);
        model.addAttribute("transporters", transporters);
        model.addAttribute("trailers", trailers);
        return "vehicle";
    }

    @PostMapping("/vehicle")
    public String setVehicle(@RequestParam Long transporter,
                            @RequestParam Long trailer,
                            @RequestParam String mark,
                            @RequestParam String stateNumber,
                            Model model) {
        Trailer trailer1 = trailerRepository.findById(trailer).orElseThrow(() -> new NoSuchElementException(""));
        Transporter transporter1 = transporterRepository.findById(transporter).orElseThrow(() -> new NoSuchElementException(""));
        Vehicle vehicle = new Vehicle(mark, stateNumber, trailer1, transporter1);
        vehicleRepository.save(vehicle);
        return "redirect:/vehicle";
    }

    @PostMapping("/vehicle/save/{id}")
    public String saveVehicle(@PathVariable(value = "id") Long id,
                              @RequestParam Long transporter,
                              @RequestParam Long trailer,
                              @RequestParam String mark,
                              @RequestParam String stateNumber,
                              Model model) {
        Vehicle vehicle = vehicleRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        vehicle.setModel(mark);
        vehicle.setStateNumber(stateNumber);
        vehicle.setTransporter(transporterRepository.findById(transporter).orElseThrow(() -> new NoSuchElementException("")));
        vehicle.setTrailer(trailerRepository.findById(trailer).orElseThrow(() -> new NoSuchElementException("")));
        vehicleRepository.save(vehicle);
        return "redirect:/vehicle";
    }

    @PostMapping("/vehicle/remove/{id}")
    public String removeVehicle(@PathVariable(value = "id") Long id, Model model) {
        vehicleRepository.delete(vehicleRepository.findById(id).orElseThrow(() -> new NoSuchElementException("")));
        return "redirect:/vehicle";
    }
}
