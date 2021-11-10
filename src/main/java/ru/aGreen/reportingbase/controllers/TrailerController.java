package ru.aGreen.reportingbase.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import ru.aGreen.reportingbase.entity.enums.SubtypeEnterprise;
import ru.aGreen.reportingbase.entity.Enterprise;
import ru.aGreen.reportingbase.entity.Trailer;
import ru.aGreen.reportingbase.entity.Vehicle;
import ru.aGreen.reportingbase.repositories.EnterpriseRepository;
import ru.aGreen.reportingbase.repositories.TrailerRepository;
import ru.aGreen.reportingbase.repositories.VehicleRepository;

import java.util.NoSuchElementException;

@Controller
public class TrailerController {
    private final TrailerRepository trailerRepository;
    private final EnterpriseRepository enterpriseRepository;
    private final VehicleRepository vehicleRepository;

    @Autowired
    public TrailerController(TrailerRepository trailerRepository, EnterpriseRepository enterpriseRepository, VehicleRepository vehicleRepository) {
        this.trailerRepository = trailerRepository;
        this.enterpriseRepository = enterpriseRepository;
        this.vehicleRepository = vehicleRepository;
    }

    @GetMapping("/trailer")
    public String getTrailer(Model model) {
        Iterable<Enterprise> enterprises = enterpriseRepository.findBySubtype(SubtypeEnterprise.TRANSPORTER);
        Iterable<Trailer> trailers = trailerRepository.findAll();
        model.addAttribute("title", "Прицепы");
        model.addAttribute("description", "На данной странице вы можете просмотреть список прицепов");
        model.addAttribute("transporters", enterprises);
        model.addAttribute("trailers", trailers);
        return "trailer";
    }

    @PostMapping("/trailer")
    public String setTrailer(@RequestParam Long transporter,
                             @RequestParam String mark,
                             @RequestParam String stateNumber,
                             Model model) {
        Enterprise transporter1 = enterpriseRepository.findById(transporter).orElseThrow(() -> new NoSuchElementException(""));
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
        trailer.setTransporter(enterpriseRepository.findById(transporter).orElseThrow(() -> new NoSuchElementException("")));
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
