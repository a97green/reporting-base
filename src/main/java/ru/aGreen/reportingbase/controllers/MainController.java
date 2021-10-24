package ru.aGreen.reportingbase.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/error")
    public String error(Model model) {
        return "error";
    }
}
