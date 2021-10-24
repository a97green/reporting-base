package ru.aGreen.reportingbase.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import ru.aGreen.reportingbase.entity.BookUpd;
import ru.aGreen.reportingbase.entity.Forming;
import ru.aGreen.reportingbase.enums.TypeEnterprise;
import ru.aGreen.reportingbase.repositories.BoorUpdRepository;
import ru.aGreen.reportingbase.repositories.FormingRepository;

import java.util.NoSuchElementException;

@Controller
public class PrintController {
    private final FormingRepository formingRepository;
    private final BoorUpdRepository boorUpdRepository;

    @Autowired
    public PrintController(FormingRepository formingRepository, BoorUpdRepository boorUpdRepository) {
        this.formingRepository = formingRepository;
        this.boorUpdRepository = boorUpdRepository;
    }

    @GetMapping("/print/act/{id}")
    public String printAct(@PathVariable(value = "id") Long id, Model model) {
        Forming forming = formingRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        model.addAttribute("forming", forming);
        if (forming.getOurCompany().getType().equals(TypeEnterprise.IP)) {
            return "print/ip/act";
        }
        return "print/act";
    }

    @GetMapping("/print/invoice/{id}")
    public String printInvoice(@PathVariable(value = "id") Long id, Model model) {
        Forming forming = formingRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        model.addAttribute("forming", forming);
        if (forming.getOurCompany().getType().equals(TypeEnterprise.IP)) {
            return "print/ip/invoice";
        }
        return "print/invoice";
    }

    @GetMapping("/print/payment/{id}")
    public String printPayment(@PathVariable(value = "id") Long id, Model model) {
        Forming forming = formingRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        model.addAttribute("forming", forming);
        if (forming.getOurCompany().getType().equals(TypeEnterprise.IP)) {
            return "print/ip/payment";
        }
        return "print/payment";
    }

    @GetMapping("/print/app-customer/{id}")
    public String printAppCustomer(@PathVariable(value = "id") Long id, Model model) {
        Forming forming = formingRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        model.addAttribute("forming", forming);
        if (forming.getOurCompany().getType().equals(TypeEnterprise.IP)) {
            return "print/ip/app-customer";
        }
        return "print/app-customer";
    }

    @GetMapping("/print/app-carrier/{id}")
    public String printAppCarrier(@PathVariable(value = "id") Long id, Model model) {
        Forming forming = formingRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        model.addAttribute("forming", forming);
        if (forming.getOurCompany().getType().equals(TypeEnterprise.IP)) {
            return "print/ip/app-carrier";
        }
        return "print/app-carrier";
    }

    @GetMapping("/print/attorney/{id}")
    public String printAttorney(@PathVariable(value = "id") Long id, Model model) {
        Forming forming = formingRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        model.addAttribute("forming", forming);
        if (forming.getOurCompany().getType().equals(TypeEnterprise.IP)) {
            return "print/ip/attorney";
        }
        return "print/attorney";
    }

    @GetMapping("/print/book/{id}")
    public String printBook(@PathVariable(value = "id") Long id, Model model) {
        BookUpd bookUpd = boorUpdRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        model.addAttribute("bookUpd", bookUpd);
        return "print/book";
    }


}
