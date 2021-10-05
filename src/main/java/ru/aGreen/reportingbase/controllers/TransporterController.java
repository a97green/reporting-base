package ru.aGreen.reportingbase.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import ru.aGreen.reportingbase.model.Passport;
import ru.aGreen.reportingbase.model.Requisites;
import ru.aGreen.reportingbase.model.Transporter;
import ru.aGreen.reportingbase.repositories.PassportRepository;
import ru.aGreen.reportingbase.repositories.RequisitesRepository;
import ru.aGreen.reportingbase.repositories.TransporterRepository;

import java.util.NoSuchElementException;

@Controller
public class TransporterController {
    private final TransporterRepository transporterRepository;
    private final PassportRepository passportRepository;
    private final RequisitesRepository requisitesRepository;

    @Autowired
    public TransporterController(TransporterRepository transporterRepository, PassportRepository passportRepository, RequisitesRepository requisitesRepository) {
        this.transporterRepository = transporterRepository;
        this.passportRepository = passportRepository;
        this.requisitesRepository = requisitesRepository;
    }

    @GetMapping("/transporter")
    public String getTransporter(Model model) {
        Iterable<Transporter> transporters = transporterRepository.findAll();
        model.addAttribute("title", "Перевозчики");
        model.addAttribute("description", "На данной странице вы можете просмотреть весь список перевозчиков");
        model.addAttribute("transporters", transporters);
        return "transporter";
    }

    @PostMapping("/transporter/ooo")
    public String setTransporterOoo(@RequestParam String name,
                                @RequestParam String legalAddress,
                                @RequestParam String postalAddress,
                                @RequestParam String actualAddress,
                                @RequestParam String numberPhone,
                                @RequestParam String inn,
                                @RequestParam String typeOrganization,
                                @RequestParam String kpp,
                                @RequestParam String ogrn,
                                @RequestParam String payAccount,
                                @RequestParam String corAccount,
                                @RequestParam String bik,
                                @RequestParam String nameBank,
                                Model model) {
        Requisites requisites = new Requisites(inn, kpp, payAccount, corAccount, bik, nameBank);
        requisitesRepository.save(requisites);
        Transporter transporter = new Transporter(name, legalAddress, postalAddress, actualAddress, numberPhone, typeOrganization, ogrn, requisites);
        transporterRepository.save(transporter);
        return "redirect:/transporter";
    }

    @PostMapping("/transporter/save/ooo/{id}")
    public String saveTransporterOoo(@PathVariable(value = "id") Long id,
                                 @RequestParam String name,
                                 @RequestParam String legalAddress,
                                 @RequestParam String postalAddress,
                                 @RequestParam String actualAddress,
                                 @RequestParam String numberPhone,
                                 @RequestParam String inn,
                                 @RequestParam String kpp,
                                 @RequestParam String ogrn,
                                 @RequestParam String payAccount,
                                 @RequestParam String corAccount,
                                 @RequestParam String bik,
                                 @RequestParam String nameBank,
                                 Model model) {
        Transporter transporter = transporterRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        Requisites requisites = requisitesRepository.findById(transporter.getRequisites().getId()).orElseThrow(() -> new NoSuchElementException(""));

        requisites.setInn(inn);
        requisites.setKpp(kpp);
        requisites.setPayAccount(payAccount);
        requisites.setCorAccount(corAccount);
        requisites.setBik(bik);
        requisites.setNameBank(nameBank);
        requisitesRepository.save(requisites);

        transporter.setName(name);
        transporter.setLegalAddress(legalAddress);
        transporter.setPostalAddress(postalAddress);
        transporter.setActualAddress(actualAddress);
        transporter.setNumberPhone(numberPhone);
        transporter.setOgrn(ogrn);
        transporter.setRequisites(requisites);
        transporterRepository.save(transporter);
        return "redirect:/transporter";
    }

    @PostMapping("/transporter/ip")
    public String setTransporterIp(@RequestParam String name,
                                @RequestParam String legalAddress,
                                @RequestParam String postalAddress,
                                @RequestParam String actualAddress,
                                @RequestParam String numberPhone,
                                @RequestParam String inn,
                                @RequestParam String kpp,
                                @RequestParam String typeOrganization,
                                @RequestParam String ogrnIp,
                                @RequestParam String lastName,
                                @RequestParam String firstName,
                                @RequestParam String patronymic,
                                @RequestParam String serialPassport,
                                @RequestParam String numberPassport,
                                @RequestParam String issued,
                                @RequestParam String issuedDate,
                                @RequestParam String payAccount,
                                @RequestParam String corAccount,
                                @RequestParam String bik,
                                @RequestParam String nameBank,
                                Model model) {
        Requisites requisites = new Requisites(inn, kpp, payAccount, corAccount, bik, nameBank);
        requisitesRepository.save(requisites);
        Passport passport = new Passport(lastName, firstName, patronymic, serialPassport, numberPassport, issued, issuedDate);
        passportRepository.save(passport);
        Transporter transporter = new Transporter(name, legalAddress, postalAddress, actualAddress, numberPhone, typeOrganization, ogrnIp, passport, requisites);
        transporterRepository.save(transporter);
        return "redirect:/transporter";
    }

    @PostMapping("/transporter/save/ip/{id}")
    public String saveTransporterIp(@PathVariable(value = "id") Long id,
                                    @RequestParam String name,
                                    @RequestParam String legalAddress,
                                    @RequestParam String postalAddress,
                                    @RequestParam String actualAddress,
                                    @RequestParam String numberPhone,
                                    @RequestParam String inn,
                                    @RequestParam String kpp,
                                    @RequestParam String ogrnIp,
                                    @RequestParam String lastName,
                                    @RequestParam String firstName,
                                    @RequestParam String patronymic,
                                    @RequestParam String serialPassport,
                                    @RequestParam String numberPassport,
                                    @RequestParam String issued,
                                    @RequestParam String issuedDate,
                                    @RequestParam String payAccount,
                                    @RequestParam String corAccount,
                                    @RequestParam String bik,
                                    @RequestParam String nameBank,
                                    Model model) {
        Transporter transporter = transporterRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        Passport passport = passportRepository.findById(transporter.getPassport().getId()).orElseThrow(() -> new NoSuchElementException(""));
        Requisites requisites = requisitesRepository.findById(transporter.getRequisites().getId()).orElseThrow(() -> new NoSuchElementException(""));

        requisites.setInn(inn);
        requisites.setKpp(kpp);
        requisites.setPayAccount(payAccount);
        requisites.setCorAccount(corAccount);
        requisites.setBik(bik);
        requisites.setNameBank(nameBank);
        requisitesRepository.save(requisites);

        passport.setLastName(lastName);
        passport.setFirstName(firstName);
        passport.setPatronymic(patronymic);
        passport.setSerialPassport(serialPassport);
        passport.setNumberPassport(numberPassport);
        passport.setIssued(issued);
        passport.setIssuedDate(issuedDate);
        passportRepository.save(passport);

        transporter.setName(name);
        transporter.setLegalAddress(legalAddress);
        transporter.setPostalAddress(postalAddress);
        transporter.setActualAddress(actualAddress);
        transporter.setNumberPhone(numberPhone);
        transporter.setOgrn(ogrnIp);
        transporter.setPassport(passport);
        transporter.setRequisites(requisites);
        transporterRepository.save(transporter);
        return "redirect:/transporter";
    }

    @PostMapping("/transporter/remove/{id}")
    public String removeCargoOwner(@PathVariable(value = "id") Long id, Model model) {
        transporterRepository.delete(transporterRepository.findById(id).orElseThrow(() -> new NoSuchElementException("")));
        return "redirect:/transporter";
    }
}
