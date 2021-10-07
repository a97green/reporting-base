package ru.aGreen.reportingbase.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import ru.aGreen.reportingbase.model.Manager;
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
    public String setManager(@RequestParam String lastName,
                            @RequestParam String firstName,
                            @RequestParam String patronymic,
                            Model model) {
        Manager manager = new Manager(lastName, firstName, patronymic);
        managerRepository.save(manager);
        return "redirect:/manager";
    }

    @PostMapping("/manager/save/{id}")
    public String saveManager(@PathVariable(value = "id") Long id,
                              @RequestParam String lastName,
                              @RequestParam String firstName,
                              @RequestParam String patronymic,
                              Model model) {
        Manager manager = managerRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        manager.setLastName(lastName);
        manager.setFirstName(firstName);
        manager.setPatronymic(patronymic);
        managerRepository.save(manager);
        return "redirect:/manager";
    }

    @PostMapping("/manager/remove/{id}")
    public String removeManager(@PathVariable(value = "id") Long id, Model model) {
        managerRepository.delete(managerRepository.findById(id).orElseThrow(() -> new NoSuchElementException("")));
        return "redirect:/manager";
    }
}
