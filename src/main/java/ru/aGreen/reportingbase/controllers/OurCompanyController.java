package ru.aGreen.reportingbase.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import ru.aGreen.reportingbase.model.*;
import ru.aGreen.reportingbase.repositories.*;

import java.util.NoSuchElementException;

@Controller
public class OurCompanyController {
    private final OurCompanyRepository ourCompanyRepository;
    private final PassportRepository passportRepository;
    private final RequisitesRepository requisitesRepository;

    @Autowired
    public OurCompanyController(OurCompanyRepository ourCompanyRepository, PassportRepository passportRepository, RequisitesRepository requisitesRepository) {
        this.ourCompanyRepository = ourCompanyRepository;
        this.passportRepository = passportRepository;
        this.requisitesRepository = requisitesRepository;
    }

    @GetMapping("/our-company")
    public String getTransporter(Model model) {
        Iterable<OurCompany> ourCompanies = ourCompanyRepository.findAll();
        model.addAttribute("title", "Наши компании");
        model.addAttribute("description", "На данной странице вы можете просмотреть весь список наших компаний");
        model.addAttribute("ourCompanies", ourCompanies);
        return "ourCompany";
    }

    @PostMapping("/our-company/ooo")
    public String setOurCompanyOoo(@RequestParam String name,
                                    @RequestParam String legalAddress,
                                    @RequestParam String postalAddress,
                                    @RequestParam String actualAddress,
                                    @RequestParam String numberPhone,
                                    @RequestParam String orgInn,
                                    @RequestParam String orgKpp,
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
        OurCompany ourCompany = new OurCompany(name, legalAddress, postalAddress, actualAddress, numberPhone, orgInn, orgKpp, typeOrganization, ogrn, requisites);
        ourCompanyRepository.save(ourCompany);
        return "redirect:/our-company";
    }

    @PostMapping("/our-company/save/ooo/{id}")
    public String saveOurCompanyOoo(@PathVariable(value = "id") Long id,
                                     @RequestParam String name,
                                     @RequestParam String legalAddress,
                                     @RequestParam String postalAddress,
                                     @RequestParam String actualAddress,
                                     @RequestParam String numberPhone,
                                     @RequestParam String orgInn,
                                     @RequestParam String orgKpp,
                                     @RequestParam String inn,
                                     @RequestParam String kpp,
                                     @RequestParam String ogrn,
                                     @RequestParam String payAccount,
                                     @RequestParam String corAccount,
                                     @RequestParam String bik,
                                     @RequestParam String nameBank,
                                     Model model) {
        OurCompany ourCompany = ourCompanyRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        Requisites requisites = requisitesRepository.findById(ourCompany.getRequisites().getId()).orElseThrow(() -> new NoSuchElementException(""));

        requisites.setInn(inn);
        requisites.setKpp(kpp);
        requisites.setPayAccount(payAccount);
        requisites.setCorAccount(corAccount);
        requisites.setBik(bik);
        requisites.setNameBank(nameBank);
        requisitesRepository.save(requisites);

        ourCompany.setName(name);
        ourCompany.setLegalAddress(legalAddress);
        ourCompany.setPostalAddress(postalAddress);
        ourCompany.setActualAddress(actualAddress);
        ourCompany.setNumberPhone(numberPhone);
        ourCompany.setInn(orgInn);
        ourCompany.setKpp(orgKpp);
        ourCompany.setOgrn(ogrn);
        ourCompany.setRequisites(requisites);
        ourCompanyRepository.save(ourCompany);
        return "redirect:/our-company";
    }

    @PostMapping("/our-company/ip")
    public String setOurCompanyIp(@RequestParam String name,
                                   @RequestParam String legalAddress,
                                   @RequestParam String postalAddress,
                                   @RequestParam String actualAddress,
                                   @RequestParam String numberPhone,
                                   @RequestParam String orgInn,
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
        OurCompany ourCompany = new OurCompany(name, legalAddress, postalAddress, actualAddress, numberPhone, orgInn, typeOrganization, ogrnIp, passport, requisites);
        ourCompanyRepository.save(ourCompany);
        return "redirect:/our-company";
    }

    @PostMapping("/our-company/save/ip/{id}")
    public String saveOurCompanyIp(@PathVariable(value = "id") Long id,
                                    @RequestParam String name,
                                    @RequestParam String legalAddress,
                                    @RequestParam String postalAddress,
                                    @RequestParam String actualAddress,
                                    @RequestParam String numberPhone,
                                    @RequestParam String orgInn,
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
        OurCompany ourCompany = ourCompanyRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        Passport passport = passportRepository.findById(ourCompany.getPassport().getId()).orElseThrow(() -> new NoSuchElementException(""));
        Requisites requisites = requisitesRepository.findById(ourCompany.getRequisites().getId()).orElseThrow(() -> new NoSuchElementException(""));

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

        ourCompany.setName(name);
        ourCompany.setLegalAddress(legalAddress);
        ourCompany.setPostalAddress(postalAddress);
        ourCompany.setActualAddress(actualAddress);
        ourCompany.setNumberPhone(numberPhone);
        ourCompany.setInn(orgInn);
        ourCompany.setOgrn(ogrnIp);
        ourCompany.setPassport(passport);
        ourCompany.setRequisites(requisites);
        ourCompanyRepository.save(ourCompany);
        return "redirect:/our-company";
    }

    @PostMapping("/our-company/remove/{id}")
    public String removeOurCompany(@PathVariable(value = "id") Long id, Model model) {
        OurCompany ourCompany = ourCompanyRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        ourCompanyRepository.delete(ourCompany);
        return "redirect:/our-company";
    }
}
