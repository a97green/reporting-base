package ru.aGreen.reportingbase.controllers.enterprises;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.aGreen.reportingbase.entity.Passport;
import ru.aGreen.reportingbase.entity.Requisites;
import ru.aGreen.reportingbase.enums.SubtypeEnterprise;
import ru.aGreen.reportingbase.enums.TypeEnterprise;
import ru.aGreen.reportingbase.entity.reference.*;
import ru.aGreen.reportingbase.repositories.PassportRepository;
import ru.aGreen.reportingbase.repositories.RequisitesRepository;
import ru.aGreen.reportingbase.repositories.reference.EnterpriseRepository;

import java.util.List;
import java.util.NoSuchElementException;

@Controller
public class TransporterController {
    private final EnterpriseRepository enterpriseRepository;
    private final RequisitesRepository requisitesRepository;
    private final PassportRepository passportRepository;

    @Autowired
    public TransporterController(EnterpriseRepository enterpriseRepository, RequisitesRepository requisitesRepository, PassportRepository passportRepository) {
        this.enterpriseRepository = enterpriseRepository;
        this.passportRepository = passportRepository;
        this.requisitesRepository = requisitesRepository;
    }

    @GetMapping("/transporter")
    public String getTransporter(Model model) {
        List<Enterprise> enterprises = enterpriseRepository.findBySubtype(SubtypeEnterprise.TRANSPORTER);
        model.addAttribute("title", "Перевозчики");
        model.addAttribute("description", "На данной странице вы можете просмотреть список Перевозчиков");
        model.addAttribute("transporters", enterprises);
        return "transporter";
    }

    @PostMapping("/transporter/add")
    public String addTransporter(@ModelAttribute("enterprise") Enterprise enterprise, @ModelAttribute("passport") Passport passport, @ModelAttribute("requisites") Requisites requisites, Model model) {
        if (enterprise.getType() != TypeEnterprise.OOO) {
            enterprise.setPassport(passport);
            passportRepository.save(passport);
        }
        enterprise.setRequisites(requisites);
        requisitesRepository.save(requisites);

        enterpriseRepository.save(enterprise);
        return "redirect:/transporter";
    }

    @PostMapping("/transporter/save/{id}")
    public String saveTransporter(@PathVariable(value = "id") Long id, @ModelAttribute("enterprise") Enterprise enterprise, @ModelAttribute("passport") Passport passport, @ModelAttribute("requisites") Requisites requisites, Model model) {
        if (enterprise.getType() != TypeEnterprise.OOO) {
            passport.setId(enterpriseRepository.findById(id).orElseThrow(() -> new NoSuchElementException("")).getPassport().getId());
            enterprise.setPassport(passport);
            passportRepository.save(passport);
        }
        enterprise.setRequisites(requisites);
        requisitesRepository.save(requisites);

        enterpriseRepository.save(enterprise);
        return "redirect:/transporter";
    }

    @PostMapping("/transporter/remove/{id}")
    public String removeTransporter(@PathVariable(value = "id") Long id, Model model) {
        try {
            Enterprise enterprise = enterpriseRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
            enterpriseRepository.delete(enterprise);
            requisitesRepository.delete(requisitesRepository.findById(enterprise.getRequisites().getId()).orElseThrow(() -> new NoSuchElementException("")));
        }
        catch (NoSuchElementException e) {
            e.printStackTrace();
            return "redirect:/transporter";
        }
        return "redirect:/transporter";
    }
}
