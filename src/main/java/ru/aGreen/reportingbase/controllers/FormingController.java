package ru.aGreen.reportingbase.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.aGreen.reportingbase.entity.*;
import ru.aGreen.reportingbase.enums.DocType;
import ru.aGreen.reportingbase.enums.SubtypeEnterprise;
import ru.aGreen.reportingbase.enums.TypePaying;
import ru.aGreen.reportingbase.entity.reference.*;
import ru.aGreen.reportingbase.repositories.*;
import ru.aGreen.reportingbase.repositories.reference.*;

import java.text.SimpleDateFormat;
import java.util.*;

@Controller
public class FormingController {
    private final FormingRepository formingRepository;
    private final EnterpriseRepository enterpriseRepository;
    private final ManagerRepository managerRepository;
    private final DriverRepository driverRepository;
    private final VehicleRepository vehicleRepository;
    private final TrailerRepository trailerRepository;
    private final CargoRepository cargoRepository;
    private final PlaceRepository placeRepository;
    private final PayingRepository payingRepository;
    private final PaymentFormRepository paymentFormRepository;
    private final PositionRepository positionRepository;
    private final DocRepository docRepository;

    @Autowired
    public FormingController(FormingRepository formingRepository, EnterpriseRepository enterpriseRepository, ManagerRepository managerRepository, DriverRepository driverRepository, VehicleRepository vehicleRepository, TrailerRepository trailerRepository, CargoRepository cargoRepository, PlaceRepository placeRepository, PayingRepository payingRepository, PaymentFormRepository paymentFormRepository, PositionRepository positionRepository, DocRepository docRepository) {
        this.formingRepository = formingRepository;
        this.enterpriseRepository = enterpriseRepository;
        this.managerRepository = managerRepository;
        this.driverRepository = driverRepository;
        this.vehicleRepository = vehicleRepository;
        this.trailerRepository = trailerRepository;
        this.cargoRepository = cargoRepository;
        this.placeRepository = placeRepository;
        this.payingRepository = payingRepository;
        this.paymentFormRepository = paymentFormRepository;
        this.positionRepository = positionRepository;
        this.docRepository = docRepository;
    }

    @GetMapping("/")
    public String getForming(Model model) {
        model.addAttribute("title", "Формирование рейса");
        model.addAttribute("description", "На данной странице вы можете просмотреть список ранее сформированных рейсов и сформировать новый");
        model.addAttribute("formings", formingRepository.findAll());
        model.addAttribute("formPays", paymentFormRepository.findAll());
        model.addAttribute("managers", managerRepository.findAll());
        model.addAttribute("ourCompanies", enterpriseRepository.findBySubtype(SubtypeEnterprise.OUR_COMPANY));
        model.addAttribute("customers", enterpriseRepository.findBySubtype(SubtypeEnterprise.CUSTOMER));
        model.addAttribute("transporters", enterpriseRepository.findBySubtype(SubtypeEnterprise.TRANSPORTER));
        model.addAttribute("drivers", driverRepository.findAll());
        model.addAttribute("vehicles", vehicleRepository.findAll());
        model.addAttribute("trailers", trailerRepository.findAll());
        return "forming";
    }

    @PostMapping("/forming/add")
    public String addForming(@RequestParam Long enumerate, @RequestParam Long ourCompany, @RequestParam Long manager, @RequestParam Long customer, @RequestParam Long transporter, @RequestParam Long driver, @RequestParam Long vehicle,
                             @RequestParam String comment,
                             @RequestParam("cargo[]") List<String> cargo, @RequestParam("weight[]") List<String> weight,
                             @RequestParam("loadingPlace[]") List<String> loadingPlace, @RequestParam String loadingPerson, @RequestParam String loadingDate, @RequestParam String loadingNumber,
                             @RequestParam("loadingPlace[]") List<String> unloadingPlace, @RequestParam String unloadingPerson, @RequestParam String unloadingNumber, @RequestParam String unloadingDate,
                             @RequestParam Long formPayCust, @RequestParam String amountCust, @RequestParam String amountWordsCust, @RequestParam String payTermsCust, @RequestParam TypePaying typeCust,
                             @RequestParam Long formPayCarr, @RequestParam String amountCarr, @RequestParam String amountWordsCarr, @RequestParam String payTermsCarr, @RequestParam TypePaying typeCarr,
                             Model model) {
        Forming forming = new Forming(
            enumerate,
            receiveEnterprise(ourCompany),
            receiveManager(manager),
            receiveEnterprise(customer),
            receiveEnterprise(transporter),
            receiveDriver(driver),
            receiveVehicle(vehicle),
            receiveCargo(cargo, weight),
            receivePlace(loadingPlace, loadingPerson, loadingNumber, loadingDate),
            receivePlace(unloadingPlace, unloadingPerson, unloadingNumber, unloadingDate),
            receivePaying(amountCust, amountWordsCust, payTermsCust, formPayCust, typeCust),
            receivePaying(amountCarr, amountWordsCarr, payTermsCarr, formPayCarr, typeCarr),
            new SimpleDateFormat("dd.MM.yyyy").format(new Date()),
            comment,
            receiveDocs());
        formingRepository.save(forming);
        return "redirect:/";
    }

    @PostMapping("/forming/save/{id}")
    public String saveForming(@PathVariable(value = "id") Long id, @RequestParam Long enumerate, @RequestParam Long ourCompany, @RequestParam Long manager, @RequestParam Long customer, @RequestParam Long transporter, @RequestParam Long driver, @RequestParam Long vehicle, @RequestParam String commentDoc,
                             @RequestParam String comment,
                             @RequestParam("cargo[]") List<String> cargo, @RequestParam("weight[]") List<String> weight,
                             @RequestParam("loadingPlace[]") List<String> loadingPlace, @RequestParam String loadingPerson, @RequestParam String loadingDate, @RequestParam String loadingNumber,
                             @RequestParam("loadingPlace[]") List<String> unloadingPlace, @RequestParam String unloadingPerson, @RequestParam String unloadingNumber, @RequestParam String unloadingDate,
                             @RequestParam Long formPayCust, @RequestParam String amountCust, @RequestParam String amountWordsCust, @RequestParam String payTermsCust, @RequestParam TypePaying typeCust,
                             @RequestParam Long formPayCarr, @RequestParam String amountCarr, @RequestParam String amountWordsCarr, @RequestParam String payTermsCarr, @RequestParam TypePaying typeCarr,
                             Model model) {
        Forming forming = formingRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
        forming.setOurCompany(receiveEnterprise(ourCompany));
        forming.setManager(receiveManager(manager));
        forming.setCustomer(receiveEnterprise(customer));
        forming.setTransporter(receiveEnterprise(transporter));
        forming.setDriver(receiveDriver(driver));
        forming.setVehicle(receiveVehicle(vehicle));
        forming.setCargo(receiveCargo(cargo, weight));
        forming.setLoading(receivePlace(loadingPlace, loadingPerson, loadingNumber, loadingDate));
        forming.setUnloading(receivePlace(unloadingPlace, unloadingPerson, unloadingNumber, unloadingDate));
        forming.setCustomerPay(receivePaying(amountCust, amountWordsCust, payTermsCust, formPayCust, typeCust));
        forming.setCarrierPay(receivePaying(amountCarr, amountWordsCarr, payTermsCarr, formPayCarr, typeCarr));
        forming.setComment(comment);
        forming.setCommentDoc(commentDoc);
        formingRepository.save(forming);
        return "redirect:/";
    }

    private Manager receiveManager(Long id) {
        return managerRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
    }

    private Enterprise receiveEnterprise(Long id) {
        return enterpriseRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
    }

    private Driver receiveDriver(Long id) {
        return driverRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
    }

    private Vehicle receiveVehicle(Long id) {
        return vehicleRepository.findById(id).orElseThrow(() -> new NoSuchElementException(""));
    }

    private List<Cargo> receiveCargo(List<String> cargos, List<String> weights) {
        List<Cargo> cargos1 = new ArrayList<>();
        for (int i = 0; i < cargos.size(); i++) {
            if (!(cargos.get(i).equals("") || cargos.get(i) == null)) {
                Cargo cargo = new Cargo(cargos.get(i), weights.get(i));
                cargoRepository.save(cargo);
                cargos1.add(cargo);
            }
        }
        return cargos1;
    }

    private Place receivePlace(List<String> places, String person, String number, String date) {
        List<Position> positions = new ArrayList<>();
        for (String s : places) {
            if (!s.equals("")) {
                Position position = new Position(s);
                positionRepository.save(position);
                positions.add(position);
            }
        }
        Place place = new Place(positions, person, number, date);
        placeRepository.save(place);
        return place;
    }

    private Paying receivePaying(String amount, String amountWords, String payTerms, Long formPay, TypePaying type) {
        Paying paying = new Paying(amount, amountWords, payTerms, paymentFormRepository.findById(formPay).orElseThrow(() -> new NoSuchElementException("")), type);
        payingRepository.save(paying);
        return paying;
    }

    private List<Doc> receiveDocs() {
        List<Doc> docs = new ArrayList<>();
        for (DocType type : DocType.values()) {
            Doc doc = new Doc(type);
            docRepository.save(doc);
            docs.add(doc);
        }
        return docs;
    }
}
