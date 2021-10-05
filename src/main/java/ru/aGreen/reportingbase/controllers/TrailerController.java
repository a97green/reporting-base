package ru.aGreen.reportingbase.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import ru.aGreen.reportingbase.model.Trailer;
import ru.aGreen.reportingbase.model.Transporter;
import ru.aGreen.reportingbase.model.Vehicle;
import ru.aGreen.reportingbase.repositories.TrailerRepository;
import ru.aGreen.reportingbase.repositories.TransporterRepository;
import ru.aGreen.reportingbase.repositories.VehicleRepository;

import java.util.NoSuchElementException;

@Controller
public class TrailerController {
    private final TrailerRepository trailerRepository;
    private final TransporterRepository transporterRepository;
    private final VehicleRepository vehicleRepository;

    @Autowired
    public TrailerController(TrailerRepository trailerRepository, TransporterRepository transporterRepository, VehicleRepository vehicleRepository) {
        this.trailerRepository = trailerRepository;
        this.transporterRepository = transporterRepository;
        this.vehicleRepository = vehicleRepository;
    }

    @GetMapping("/trailer")
    public String getTrailer(Model model) {
        Iterable<Transporter> transporters = transporterRepository.findAll();
        Iterable<Trailer> trailers = trailerRepository.findAll();
        model.addAttribute("title", "Прицепы");
        model.addAttribute("description", "На данной странице вы можете просмотреть список прицепов");
        model.addAttribute("transporters", transporters);
        model.addAttribute("trailers", trailers);
        return "trailer";
    }

    @PostMapping("/trailer")
    public String setTrailer(@RequestParam Long transporter,
                             @RequestParam String mark,
                             @RequestParam String stateNumber,
                             Model model) {
        Transporter transporter1 = transporterRepository.findById(transporter).orElseThrow(() -> new NoSuchElementException(""));
        Trailer trailer = new Trailer(mark, stateNumber, transporter1);
        trailerRepository.save(trailer);
        return "redirect:/trailer";
    }

    @PostMapping("/trailer/save/{id}")
    public String saveTrailer(@PathVariable(value = "id") Long id,
                              @RequestParam Long transporter,
                              @RequestParam String mark,
                              @RequestParam String stateNumber,
                              Model model) {
        Trailer trailer = trailerRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        trailer.setModel(mark);
        trailer.setStateNumber(stateNumber);
        trailer.setTransporter(transporterRepository.findById(transporter).orElseThrow(() -> new NoSuchElementException("")));
        trailerRepository.save(trailer);
        return "redirect:/trailer";
    }

    @PostMapping("/trailer/remove/{id}")
    public String removeTrailer(@PathVariable(value = "id") Long id, Model model) {
        Trailer trailer = trailerRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        for (Vehicle vehicle : vehicleRepository.findAll()) {
            if (vehicle.getTrailer().getId().equals(trailer.getId())) {
                return "redirect:/trailer";
            }
        }
        trailerRepository.delete(trailerRepository.findById(id).orElseThrow(() -> new NoSuchElementException("")));
        return "redirect:/trailer";
    }
}
