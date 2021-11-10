package ru.aGreen.reportingbase.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.aGreen.reportingbase.entity.Manager;
import ru.aGreen.reportingbase.repositories.ManagerRepository;

import java.util.NoSuchElementException;

@Controller
public class ManagerController {
    private final ManagerRepository managerRepository;

    @Autowired
    public ManagerController(ManagerRepository managerRepository) {
        this.managerRepository = managerRepository;
    }

    @GetMapping("/manager")
    public String getManager(Model model) {
        Iterable<Manager> managers = managerRepository.findAll();
        model.addAttribute("title", "Менеджеры");
        model.addAttribute("description", "На данной странице вы можете просмотреть список менеджеров");
        model.addAttribute("managers", managers);
        return "manager";
    }

    @PostMapping("/manager")
    public String addManager(@ModelAttribute("manager") Manager manager, Model model) {
        managerRepository.save(manager);
        return "redirect:/manager";
    }

    @PostMapping("/manager/save/{id}")
    public String saveManager(@PathVariable(value = "id") Long id, @ModelAttribute("manager") Manager manager, Model model) {
        manager.setId(id);
        managerRepository.save(manager);
        return "redirect:/manager";
    }

    @PostMapping("/manager/remove/{id}")
    public String removeManager(@PathVariable(value = "id") Long id, Model model) {
        managerRepository.delete(managerRepository.findById(id).orElseThrow(() -> new NoSuchElementException("")));
        return "redirect:/manager";
    }
}
