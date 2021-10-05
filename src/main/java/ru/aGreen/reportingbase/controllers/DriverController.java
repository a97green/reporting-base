package ru.aGreen.reportingbase.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import ru.aGreen.reportingbase.model.CargoOwner;
import ru.aGreen.reportingbase.model.Driver;
import ru.aGreen.reportingbase.model.Passport;
import ru.aGreen.reportingbase.model.Transporter;
import ru.aGreen.reportingbase.repositories.DriverRepository;
import ru.aGreen.reportingbase.repositories.PassportRepository;
import ru.aGreen.reportingbase.repositories.RequisitesRepository;
import ru.aGreen.reportingbase.repositories.TransporterRepository;

import java.util.NoSuchElementException;

@Controller
public class DriverController {
    private final DriverRepository driverRepository;
    private final PassportRepository passportRepository;
    private final TransporterRepository transporterRepository;
    private final RequisitesRepository requisitesRepository;

    @Autowired
    public DriverController(DriverRepository driverRepository, PassportRepository passportRepository, TransporterRepository transporterRepository, RequisitesRepository requisitesRepository) {
        this.driverRepository = driverRepository;
        this.passportRepository = passportRepository;
        this.transporterRepository = transporterRepository;
        this.requisitesRepository = requisitesRepository;
    }

    @GetMapping("/driver")
    public String getDriver(Model model) {
        Iterable<Driver> drivers = driverRepository.findAll();
        Iterable<Transporter> transporters = transporterRepository.findAll();
        model.addAttribute("title", "Водители");
        model.addAttribute("description", "На данной странице вы можете просмотреть список водителей и подробную информацию о водителе");
        model.addAttribute("drivers", drivers);
        model.addAttribute("transporters", transporters);
        return "driver";
    }

    @PostMapping("/driver")
    public String setDriver(@RequestParam Long idTransporter,
                            @RequestParam String numberPhone,
                            @RequestParam String lastName,
                            @RequestParam String firstName,
                            @RequestParam String patronymic,
                            @RequestParam String serialPassport,
                            @RequestParam String numberPassport,
                            @RequestParam String issued,
                            @RequestParam String issuedDate,
                                Model model) {
        Passport passport = new Passport(lastName, firstName, patronymic, serialPassport, numberPassport, issued, issuedDate);
        passportRepository.save(passport);
        Transporter transporter = transporterRepository.findById(idTransporter).orElseThrow(() -> new NoSuchElementException(""));

        Driver driver = new Driver(numberPhone, transporter, passport);
        driverRepository.save(driver);
        return "redirect:/driver";
    }

    @PostMapping("/driver/save/{id}")
    public String saveDriver(@PathVariable(value = "id") Long id,
                                 @RequestParam Long idTransporter,
                                 @RequestParam String numberPhone,
                                 @RequestParam String lastName,
                                 @RequestParam String firstName,
                                 @RequestParam String patronymic,
                                 @RequestParam String serialPassport,
                                 @RequestParam String numberPassport,
                                 @RequestParam String issued,
                                 @RequestParam String issuedDate,
                                 Model model) {
        Driver driver = driverRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        Passport passport = passportRepository.findById(driver.getPassport().getId()).orElseThrow(() -> new NoSuchElementException(""));
        Transporter transporter = transporterRepository.findById(idTransporter).orElseThrow(() -> new NoSuchElementException(""));

        passport.setLastName(lastName);
        passport.setFirstName(firstName);
        passport.setPatronymic(patronymic);
        passport.setSerialPassport(serialPassport);
        passport.setNumberPassport(numberPassport);
        passport.setIssued(issued);
        passport.setIssuedDate(issuedDate);
        passportRepository.save(passport);

        driver.setTransporter(transporter);
        driver.setNumberPhone(numberPhone);
        driverRepository.save(driver);
        return "redirect:/driver";
    }

    @PostMapping("/driver/remove/{id}")
    public String removeCargoOwner(@PathVariable(value = "id") Long id, Model model) {
        driverRepository.delete(driverRepository.findById(id).orElseThrow(() -> new NoSuchElementException("")));
        return "redirect:/driver";
    }
}
