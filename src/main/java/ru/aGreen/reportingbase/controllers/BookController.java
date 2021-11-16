package ru.aGreen.reportingbase.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.aGreen.reportingbase.entity.BookUpd;
import ru.aGreen.reportingbase.entity.Enterprise;
import ru.aGreen.reportingbase.entity.Expense;
import ru.aGreen.reportingbase.entity.PaymentForm;
import ru.aGreen.reportingbase.entity.enums.SubtypeEnterprise;
import ru.aGreen.reportingbase.repositories.BoorUpdRepository;
import ru.aGreen.reportingbase.repositories.EnterpriseRepository;
import ru.aGreen.reportingbase.repositories.ExpenseRepository;
import ru.aGreen.reportingbase.repositories.PaymentFormRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@Controller
public class BookController {
    private final BoorUpdRepository boorUpdRepository;
    private final EnterpriseRepository enterpriseRepository;
    private final ExpenseRepository expenseRepository;
    private final PaymentFormRepository paymentFormRepository;

    @Autowired
    public BookController(BoorUpdRepository boorUpdRepository, EnterpriseRepository enterpriseRepository, ExpenseRepository expenseRepository, PaymentFormRepository paymentFormRepository) {
        this.boorUpdRepository = boorUpdRepository;
        this.enterpriseRepository = enterpriseRepository;
        this.expenseRepository = expenseRepository;
        this.paymentFormRepository = paymentFormRepository;
    }

    @GetMapping("/book")
    public String book(Model model) {
        Iterable<BookUpd> bookUpds = boorUpdRepository.findAll();
        model.addAttribute("ourCompanies", enterpriseRepository.findBySubtype(SubtypeEnterprise.OUR_COMPANY));
        model.addAttribute("customers", enterpriseRepository.findBySubtype(SubtypeEnterprise.CUSTOMER));
        model.addAttribute("formPays", paymentFormRepository.findAll());
        model.addAttribute("bookUpds", bookUpds);
        model.addAttribute("title", "Книга УПД");
        model.addAttribute("description", "На данной странице вы можете просмотреть список книг УПД");
        return "book";
    }

    @PostMapping("/book")
    public String addBook(@ModelAttribute("bookUpd") BookUpd bookUpd, @RequestParam Long ourCompany, @RequestParam Long customer, @RequestParam Long formPay,
                          @RequestParam(value = "expenditure[]", required = false) List<Double> expenditures,
                          @RequestParam(value = "commentEx[]", required = false) List<String> comments,
                          Model model) {
        if (bookUpd.getEnumerate() == null) {
            bookUpd.setEnumerate(0L);
        }
        bookUpd.setPaymentForm(receivePaymentForm(formPay));
        bookUpd.setOurCompany(receiveEnterprise(ourCompany));
        bookUpd.setCustomer(receiveEnterprise(customer));
        bookUpd.setExpenses(receiveExpense(expenditures, comments));
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

    private PaymentForm receivePaymentForm(Long id) {
        return paymentFormRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
    }

    private List<Expense> receiveExpense(List<Double> expenditures, List<String> comments) {
        if (expenditures == null) {
            expenditures = new ArrayList<>();
        }
        if (comments == null) {
            comments = new ArrayList<>();
        }
        List<Expense> expenses = new ArrayList<>();
        for (int i = 0; i < expenditures.size(); i++) {
            if (!(expenditures.get(i) == null)) {
                Expense expense = new Expense(expenditures.get(i), comments.get(i));
                expenseRepository.save(expense);
                expenses.add(expense);
            }
        }
        return expenses;
    }


}
