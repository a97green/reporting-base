package ru.aGreen.reportingbase.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import ru.aGreen.reportingbase.model.CargoOwner;

@Controller
public class MainController {



    @GetMapping("/")
    public String greeting(Model model) {
        model.addAttribute("title", "Список формирований перевозок");
        model.addAttribute("description", "На данной странице вы можете просмотреть весь список ранее сформированных отчётов перевозок");
        return "index";
    }



}
