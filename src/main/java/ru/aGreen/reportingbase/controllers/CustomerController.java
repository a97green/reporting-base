package ru.aGreen.reportingbase.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.aGreen.reportingbase.entity.enums.SubtypeEnterprise;
import ru.aGreen.reportingbase.entity.enums.TypeEnterprise;
import ru.aGreen.reportingbase.entity.Enterprise;
import ru.aGreen.reportingbase.entity.Passport;
import ru.aGreen.reportingbase.entity.Requisites;
import ru.aGreen.reportingbase.repositories.EnterpriseRepository;
import ru.aGreen.reportingbase.repositories.PassportRepository;
import ru.aGreen.reportingbase.repositories.RequisitesRepository;

import java.util.List;
import java.util.NoSuchElementException;

@Controller
public class CustomerController {
    private final EnterpriseRepository enterpriseRepository;
    private final RequisitesRepository requisitesRepository;
    private final PassportRepository passportRepository;

    @Autowired
    public CustomerController(EnterpriseRepository enterpriseRepository, RequisitesRepository requisitesRepository, PassportRepository passportRepository) {
        this.enterpriseRepository = enterpriseRepository;
        this.requisitesRepository = requisitesRepository;
        this.passportRepository = passportRepository;
    }

    @GetMapping("/customer")
    public String getCustomer(Model model) {
        List<Enterprise> enterprises = enterpriseRepository.findBySubtype(SubtypeEnterprise.CUSTOMER);
        model.addAttribute("title", "Заказчики");
        model.addAttribute("description", "На данной странице вы можете просмотреть список Заказчиков");
        model.addAttribute("customers", enterprises);
        return "customer";
    }

    @PostMapping("/customer/add")
    public String addCustomer(@ModelAttribute("enterprise") Enterprise enterprise, @ModelAttribute("passport") Passport passport, @ModelAttribute("requisites") Requisites requisites, Model model) {
        if (enterprise.getType() != TypeEnterprise.OOO) {
            enterprise.setPassport(passport);
            passportRepository.save(passport);
        }
        enterprise.setRequisites(requisites);
        requisitesRepository.save(requisites);

        enterpriseRepository.save(enterprise);
        return "redirect:/customer";
    }

    @PostMapping("/customer/save/{id}")
    public String saveCustomer(@PathVariable(value = "id") Long id, @ModelAttribute("enterprise") Enterprise enterprise, @ModelAttribute("passport") Passport passport, @ModelAttribute("requisites") Requisites requisites, Model model) {
        if (enterprise.getType() != TypeEnterprise.OOO) {
            passport.setId(enterpriseRepository.findById(id).orElseThrow(() -> new NoSuchElementException("")).getPassport().getId());
            enterprise.setPassport(passport);
            passportRepository.save(passport);
        }
        enterprise.setRequisites(requisites);
        requisitesRepository.save(requisites);

        enterpriseRepository.save(enterprise);
        return "redirect:/customer";
    }

    @PostMapping("/customer/remove/{id}")
    public String removeCustomer(@PathVariable(value = "id") Long id, Model model) {
        try {
            Enterprise enterprise = enterpriseRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
            enterpriseRepository.delete(enterprise);
            requisitesRepository.delete(requisitesRepository.findById(enterprise.getRequisites().getId()).orElseThrow(() -> new NoSuchElementException("")));
        }
        catch (NoSuchElementException e) {
            e.printStackTrace();
            return "redirect:/customer";
        }
        return "redirect:/customer";
    }
}
