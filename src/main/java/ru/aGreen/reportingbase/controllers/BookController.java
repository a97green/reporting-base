package ru.aGreen.reportingbase.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.aGreen.reportingbase.entity.BookUpd;
import ru.aGreen.reportingbase.entity.reference.Enterprise;
import ru.aGreen.reportingbase.enums.SubtypeEnterprise;
import ru.aGreen.reportingbase.repositories.BoorUpdRepository;
import ru.aGreen.reportingbase.repositories.reference.EnterpriseRepository;

import java.util.NoSuchElementException;

@Controller
public class BookController {
    private final BoorUpdRepository boorUpdRepository;
    private final EnterpriseRepository enterpriseRepository;

    @Autowired
    public BookController(BoorUpdRepository boorUpdRepository, EnterpriseRepository enterpriseRepository) {
        this.boorUpdRepository = boorUpdRepository;
        this.enterpriseRepository = enterpriseRepository;
    }

    @GetMapping("/book")
    public String book(Model model) {
        Iterable<BookUpd> bookUpds = boorUpdRepository.findAll();
        model.addAttribute("ourCompanies", enterpriseRepository.findBySubtype(SubtypeEnterprise.OUR_COMPANY));
        model.addAttribute("customers", enterpriseRepository.findBySubtype(SubtypeEnterprise.CUSTOMER));
        model.addAttribute("bookUpds", bookUpds);
        model.addAttribute("title", "Книга УПД");
        model.addAttribute("description", "На данной странице вы можете просмотреть список книг УПД");
        return "book";
    }

    @PostMapping("/book")
    public String addBook(@ModelAttribute("bookUpd") BookUpd bookUpd, @RequestParam Long ourCompany,  @RequestParam Long customer,Model model) {
        bookUpd.setOurCompany(receiveEnterprise(ourCompany));
        bookUpd.setCustomer(receiveEnterprise(customer));
        boorUpdRepository.save(bookUpd);
        return "redirect:/book";
    }

    @PostMapping("/book/remove/{id}")
    public String removeBook(@PathVariable(value = "id") Long id, Model model) {
        boorUpdRepository.delete(boorUpdRepository.findById(id).orElseThrow(() -> new NoSuchElementException("")));
        return "redirect:/book";
    }

    private Enterprise receiveEnterprise(Long id) {
        return enterpriseRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
    }

}
