package ru.aGreen.reportingbase.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import ru.aGreen.reportingbase.entity.Passport;
import ru.aGreen.reportingbase.entity.Requisites;
import ru.aGreen.reportingbase.entity.Enterprise;
import ru.aGreen.reportingbase.entity.enums.SubtypeEnterprise;
import ru.aGreen.reportingbase.entity.enums.TypeEnterprise;
import ru.aGreen.reportingbase.repositories.PassportRepository;
import ru.aGreen.reportingbase.repositories.RequisitesRepository;
import ru.aGreen.reportingbase.repositories.EnterpriseRepository;

import java.util.List;
import java.util.NoSuchElementException;

@Controller
public class OurController {
    private final EnterpriseRepository enterpriseRepository;
    private final RequisitesRepository requisitesRepository;
    private final PassportRepository passportRepository;

    @Autowired
    public OurController(EnterpriseRepository enterpriseRepository, RequisitesRepository requisitesRepository, PassportRepository passportRepository) {
        this.enterpriseRepository = enterpriseRepository;
        this.requisitesRepository = requisitesRepository;
        this.passportRepository = passportRepository;
    }

    @GetMapping("/our")
    public String getOurCompanies(Model model) {
        List<Enterprise> enterprises = enterpriseRepository.findBySubtype(SubtypeEnterprise.OUR_COMPANY);
        model.addAttribute("title", "Наши компании");
        model.addAttribute("description", "На данной странице вы можете просмотреть список Наших компаний");
        model.addAttribute("ourCompanies", enterprises);
        return "ourCompany";
    }

    @PostMapping("/our/add")
    public String addOurCompanies(@ModelAttribute("enterprise") Enterprise enterprise, @ModelAttribute("passport") Passport passport, @ModelAttribute("requisites") Requisites requisites, Model model) {
        if (enterprise.getType() != TypeEnterprise.OOO) {
            saveEntity(enterprise, passport);
        }
        saveEntity(enterprise, requisites);
        return "redirect:/our";
    }

    @PostMapping("/our/save/{id}")
    public String saveOurCompanies(@PathVariable(value = "id") Long id, @ModelAttribute("enterprise") Enterprise enterprise, @ModelAttribute("passport") Passport passport, @ModelAttribute("requisites") Requisites requisites, Model model) {
        if (enterprise.getType() != TypeEnterprise.OOO) {
            passport.setId(enterpriseRepository.findById(id).orElseThrow(() -> new NoSuchElementException("")).getPassport().getId());
            saveEntity(enterprise, passport);
        }
        requisites.setId(enterpriseRepository.findById(id).orElseThrow(() -> new NoSuchElementException("")).getRequisites().getId());
        saveEntity(enterprise, requisites);
        return "redirect:/our";
    }

    @PostMapping("/our/remove/{id}")
    public String removeOurCompanies(@PathVariable(value = "id") Long id, Model model) {
        try {
            Enterprise enterprise = enterpriseRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
            enterpriseRepository.delete(enterprise);
            requisitesRepository.delete(requisitesRepository.findById(enterprise.getRequisites().getId()).orElseThrow(() -> new NoSuchElementException("")));
        } catch (NoSuchElementException e) {
            e.printStackTrace();
            return "redirect:/our";
        }
        return "redirect:/our";
    }

    private void saveEntity(Enterprise enterprise, Requisites requisites) {
        enterprise.setRequisites(requisites);
        requisitesRepository.save(requisites);
        enterpriseRepository.save(enterprise);
    }

    private void saveEntity(Enterprise enterprise, Passport passport) {
        enterprise.setPassport(passport);
        passportRepository.save(passport);
    }
}
