package ru.aGreen.reportingbase.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Controller
public class PrintController {

    @GetMapping("/print")
    public String print(Model model) {

        return "invoice";
    }
}
