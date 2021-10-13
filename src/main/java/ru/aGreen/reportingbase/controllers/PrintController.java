package ru.aGreen.reportingbase.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import ru.aGreen.reportingbase.model.Forming;
import ru.aGreen.reportingbase.repositories.FormingRepository;

import java.util.NoSuchElementException;

@Controller
public class PrintController {
    private final FormingRepository formingRepository;

    @Autowired
    public PrintController(FormingRepository formingRepository) {
        this.formingRepository = formingRepository;
    }

    @GetMapping("/print/act/{id}")
    public String printAct(@PathVariable(value = "id") Long id, Model model) {
        Forming forming = formingRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        model.addAttribute("forming", forming);
        return "print/act";
    }

    @GetMapping("/print/invoice/{id}")
    public String printInvoice(@PathVariable(value = "id") Long id, Model model) {
        Forming forming = formingRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        model.addAttribute("forming", forming);
        return "print/invoice";
    }

    @GetMapping("/print/payment/{id}")
    public String printPayment(@PathVariable(value = "id") Long id, Model model) {
        Forming forming = formingRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        model.addAttribute("forming", forming);
        return "print/payment";
    }

    @GetMapping("/print/app-customer/{id}")
    public String printAppCustomer(@PathVariable(value = "id") Long id, Model model) {
        Forming forming = formingRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        model.addAttribute("forming", forming);
        return "print/app-customer";
    }

    @GetMapping("/print/app-carrier/{id}")
    public String printAppCarrier(@PathVariable(value = "id") Long id, Model model) {
        Forming forming = formingRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        model.addAttribute("forming", forming);
        return "print/app-carrier";
    }

    @GetMapping("/print/attorney/{id}")
    public String printAttorney(@PathVariable(value = "id") Long id, Model model) {
        Forming forming = formingRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        model.addAttribute("forming", forming);
        return "print/attorney";
    }
}
