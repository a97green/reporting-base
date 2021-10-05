package ru.aGreen.reportingbase.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import ru.aGreen.reportingbase.model.CargoOwner;
import ru.aGreen.reportingbase.model.Passport;
import ru.aGreen.reportingbase.model.Requisites;
import ru.aGreen.reportingbase.repositories.CargoOwnerRepository;
import ru.aGreen.reportingbase.repositories.PassportRepository;
import ru.aGreen.reportingbase.repositories.RequisitesRepository;

import java.util.NoSuchElementException;

@Controller
public class CargoOwnerController {
    private final CargoOwnerRepository cargoOwnerRepository;
    private final RequisitesRepository requisitesRepository;
    private final PassportRepository passportRepository;

    @Autowired
    public CargoOwnerController(CargoOwnerRepository cargoOwnerRepository, RequisitesRepository requisitesRepository, PassportRepository passportRepository) {
        this.cargoOwnerRepository = cargoOwnerRepository;
        this.requisitesRepository = requisitesRepository;
        this.passportRepository = passportRepository;
    }

    @GetMapping("/cargo-owner")
    public String getCargoOwner(Model model) {
        Iterable<CargoOwner> cargoOwners = cargoOwnerRepository.findAll();
        model.addAttribute("title", "Грузовладельцы");
        model.addAttribute("description", "На данной странице вы можете просмотреть весь список грузовладельцев");
        model.addAttribute("cargoOwners", cargoOwners);
        return "cargoOwner";
    }

    @PostMapping("/cargo-owner/ooo")
    public String setCargoOwnerOoo(@RequestParam String name,
                                @RequestParam String legalAddress,
                                @RequestParam String postalAddress,
                                @RequestParam String actualAddress,
                                @RequestParam String numberPhone,
                                @RequestParam String typeOrganization,
                                @RequestParam String inn,
                                @RequestParam String kpp,
                                @RequestParam String ogrn,
                                @RequestParam String payAccount,
                                @RequestParam String corAccount,
                                @RequestParam String bik,
                                @RequestParam String nameBank,
                                Model model) {
        Requisites requisites = new Requisites(inn, kpp, payAccount, corAccount, bik, nameBank);
        requisitesRepository.save(requisites);
        CargoOwner cargoOwner = new CargoOwner(name, legalAddress, postalAddress, actualAddress, numberPhone, typeOrganization, ogrn, requisites);
        cargoOwnerRepository.save(cargoOwner);
        return "redirect:/cargo-owner";
    }

    @PostMapping("/cargo-owner/ip")
    public String setCargoOwnerIp(@RequestParam String name,
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
        CargoOwner cargoOwner = new CargoOwner(name, legalAddress, postalAddress, actualAddress, numberPhone, typeOrganization, ogrnIp, passport, requisites);
        cargoOwnerRepository.save(cargoOwner);
        return "redirect:/cargo-owner";
    }

    @PostMapping("/cargo-owner/chl")
    public String setCargoOwnerChl(@RequestParam String name,
                                   @RequestParam String numberPhone,
                                   @RequestParam String typeOrganization,
                                   @RequestParam String inn,
                                   @RequestParam String kpp,
                                   @RequestParam String payAccount,
                                   @RequestParam String corAccount,
                                   @RequestParam String bik,
                                   @RequestParam String nameBank,
                                   @RequestParam String lastName,
                                   @RequestParam String firstName,
                                   @RequestParam String patronymic,
                                   @RequestParam String serialPassport,
                                   @RequestParam String numberPassport,
                                   @RequestParam String issued,
                                   @RequestParam String issuedDate,
                                   Model model) {
        Requisites requisites = new Requisites(inn, kpp, payAccount, corAccount, bik, nameBank);
        requisitesRepository.save(requisites);
        Passport passport = new Passport(lastName, firstName, patronymic, serialPassport, numberPassport, issued, issuedDate);
        passportRepository.save(passport);
        CargoOwner cargoOwner = new CargoOwner(name, numberPhone, typeOrganization, passport, requisites);
        cargoOwnerRepository.save(cargoOwner);
        return "redirect:/cargo-owner";
    }

    @PostMapping("/cargo-owner/save/ooo/{id}")
    public String saveCargoOwner(@PathVariable(value = "id") Long id,
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
        CargoOwner cargoOwner = cargoOwnerRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        Requisites requisites = requisitesRepository.findById(cargoOwner.getRequisites().getId()).orElseThrow(() -> new NoSuchElementException(""));

        requisites.setInn(inn);
        requisites.setKpp(kpp);
        requisites.setPayAccount(payAccount);
        requisites.setCorAccount(corAccount);
        requisites.setBik(bik);
        requisites.setNameBank(nameBank);
        requisitesRepository.save(requisites);

        cargoOwner.setName(name);
        cargoOwner.setLegalAddress(legalAddress);
        cargoOwner.setPostalAddress(postalAddress);
        cargoOwner.setActualAddress(actualAddress);
        cargoOwner.setNumberPhone(numberPhone);
        cargoOwner.setOgrn(ogrn);
        cargoOwnerRepository.save(cargoOwner);
        return "redirect:/cargo-owner";
    }

    @PostMapping("/cargo-owner/save/ip/{id}")
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
        CargoOwner cargoOwner = cargoOwnerRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        Passport passport = passportRepository.findById(cargoOwner.getPassport().getId()).orElseThrow(() -> new NoSuchElementException(""));
        Requisites requisites = requisitesRepository.findById(cargoOwner.getRequisites().getId()).orElseThrow(() -> new NoSuchElementException(""));

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

        cargoOwner.setName(name);
        cargoOwner.setLegalAddress(legalAddress);
        cargoOwner.setPostalAddress(postalAddress);
        cargoOwner.setActualAddress(actualAddress);
        cargoOwner.setNumberPhone(numberPhone);
        cargoOwner.setOgrn(ogrnIp);
        cargoOwner.setPassport(passport);
        cargoOwner.setRequisites(requisites);
        cargoOwnerRepository.save(cargoOwner);
        return "redirect:/cargo-owner";
    }


    @PostMapping("/cargo-owner/remove/{id}")
    public String removeCargoOwner(@PathVariable(value = "id") Long id, Model model) {
        cargoOwnerRepository.delete(cargoOwnerRepository.findById(id).orElseThrow(() -> new NoSuchElementException("")));
        return "redirect:/cargo-owner";
    }
}
