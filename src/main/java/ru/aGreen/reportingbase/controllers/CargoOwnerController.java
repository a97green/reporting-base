package ru.aGreen.reportingbase.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import ru.aGreen.reportingbase.model.CargoOwner;
import ru.aGreen.reportingbase.repositories.CargoOwnerRepository;

import java.util.NoSuchElementException;

@Controller
public class CargoOwnerController {
    private final CargoOwnerRepository cargoOwnerRepository;

    @Autowired
    public CargoOwnerController(CargoOwnerRepository cargoOwnerRepository) {
        this.cargoOwnerRepository = cargoOwnerRepository;
    }

    @GetMapping("/cargo-owner")
    public String getCargoOwner(Model model) {
        Iterable<CargoOwner> cargoOwners = cargoOwnerRepository.findAll();
        model.addAttribute("title", "Грузовладельцы");
        model.addAttribute("description", "На данной странице вы можете просмотреть весь список грузовладельцев");
        model.addAttribute("cargoOwners", cargoOwners);
        return "cargoOwner";
    }

    @PostMapping("/cargo-owner")
    public String setCargoOwner(@RequestParam String name,
                                @RequestParam String legalAddress,
                                @RequestParam String postalAddress,
                                @RequestParam String actualAddress,
                                @RequestParam String numberPhone,
                                @RequestParam String contactPerson,
                                @RequestParam String numberPerson,
                                @RequestParam String inn,
                                @RequestParam String kpp,
                                @RequestParam String ogrn,
                                Model model) {
        CargoOwner cargoOwner = new CargoOwner(name, legalAddress, postalAddress, actualAddress, numberPhone, contactPerson, numberPerson, inn, kpp,ogrn);
        cargoOwnerRepository.save(cargoOwner);
        return "redirect:/cargo-owner";
    }

    @PostMapping("/cargo-owner/save/{id}")
    public String saveCargoOwner(@PathVariable(value = "id") Long id,
                                @RequestParam String name,
                                @RequestParam String legalAddress,
                                @RequestParam String postalAddress,
                                @RequestParam String actualAddress,
                                @RequestParam String numberPhone,
                                @RequestParam String contactPerson,
                                @RequestParam String numberPerson,
                                @RequestParam String inn,
                                @RequestParam String kpp,
                                @RequestParam String ogrn,
                                Model model) {
        CargoOwner cargoOwner = cargoOwnerRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        cargoOwner.setName(name);
        cargoOwner.setLegalAddress(legalAddress);
        cargoOwner.setPostalAddress(postalAddress);
        cargoOwner.setActualAddress(actualAddress);
        cargoOwner.setNumberPhone(numberPhone);
        cargoOwner.setContactPerson(contactPerson);
        cargoOwner.setNumberPerson(numberPerson);
        cargoOwner.setInn(inn);
        cargoOwner.setKpp(kpp);
        cargoOwner.setOgrn(ogrn);
        cargoOwnerRepository.save(cargoOwner);
        return "redirect:/cargo-owner";
    }

    @PostMapping("/cargo-owner/remove/{id}")
    public String removeCargoOwner(@PathVariable(value = "id") Long id, Model model) {
        cargoOwnerRepository.delete(cargoOwnerRepository.findById(id).orElseThrow(() -> new NoSuchElementException("")));
        return "redirect:/cargo-owner";
    }
}
