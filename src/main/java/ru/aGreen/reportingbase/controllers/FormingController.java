package ru.aGreen.reportingbase.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import ru.aGreen.reportingbase.model.*;
import ru.aGreen.reportingbase.repositories.*;

import java.util.Date;
import java.util.List;
import java.util.NoSuchElementException;

@Controller
public class FormingController {
    private final FormingRepository formingRepository;
    private final OurCompanyRepository ourCompanyRepository;
    private final ManagerRepository managerRepository;
    private final CargoOwnerRepository cargoOwnerRepository;
    private final TransporterRepository transporterRepository;
    private final DriverRepository driverRepository;
    private final VehicleRepository vehicleRepository;
    private final CargoRepository cargoRepository;
    private final PlaceRepository placeRepository;
    private final CustomerPayRepository customerPayRepository;
    private final CarrierPayRepository carrierPayRepository;
    private final FormPayRepository formPayRepository;


    @Autowired
    public FormingController(FormingRepository formingRepository, OurCompanyRepository ourCompanyRepository, ManagerRepository managerRepository, CargoOwnerRepository cargoOwnerRepository, TransporterRepository transporterRepository, DriverRepository driverRepository, VehicleRepository vehicleRepository, CargoRepository cargoRepository, PlaceRepository placeRepository, CustomerPayRepository customerPayRepository, CarrierPayRepository carrierPayRepository, FormPayRepository formPayRepository) {
        this.formingRepository = formingRepository;
        this.ourCompanyRepository = ourCompanyRepository;
        this.managerRepository = managerRepository;
        this.cargoOwnerRepository = cargoOwnerRepository;
        this.transporterRepository = transporterRepository;
        this.driverRepository = driverRepository;
        this.vehicleRepository = vehicleRepository;
        this.cargoRepository = cargoRepository;
        this.placeRepository = placeRepository;
        this.customerPayRepository = customerPayRepository;
        this.carrierPayRepository = carrierPayRepository;
        this.formPayRepository = formPayRepository;
    }

    @GetMapping("/forming")
    public String getForming(Model model) {
        Iterable<Forming> formings = formingRepository.findAll();
        Iterable<OurCompany> ourCompanies = ourCompanyRepository.findAll();
        Iterable<FormPay> formPays = formPayRepository.findAll();
        Iterable<Manager> managers = managerRepository.findAll();
        Iterable<CargoOwner> cargoOwners = cargoOwnerRepository.findAll();
        Iterable<Transporter> transporters = transporterRepository.findAll();
        Iterable<Driver> drivers = driverRepository.findAll();
        Iterable<Vehicle> vehicles = vehicleRepository.findAll();
        Iterable<Cargo> cargos = cargoRepository.findAll();
        Iterable<Place> places = placeRepository.findAll();
        Iterable<CustomerPay> customerPays = customerPayRepository.findAll();
        Iterable<CarrierPay> carrierPays = carrierPayRepository.findAll();
        model.addAttribute("title", "Формирование рейса");
        model.addAttribute("description", "На данной странице вы можете просмотреть список ранее сформированных рейсов и сформировать новый");
        model.addAttribute("formings", formings);
        model.addAttribute("ourCompanies", ourCompanies);
        model.addAttribute("formPays", formPays);
        model.addAttribute("managers", managers);
        model.addAttribute("cargoOwners", cargoOwners);
        model.addAttribute("transporters", transporters);
        model.addAttribute("drivers", drivers);
        model.addAttribute("vehicles", vehicles);
        model.addAttribute("cargos", cargos);
        model.addAttribute("places", places);
        model.addAttribute("customerPays", customerPays);
        model.addAttribute("carrierPays", carrierPays);
        return "forming";
    }

    @PostMapping("/forming")
    public String setForming(@RequestParam Long manager,
                             @RequestParam Long cargoOwner,
                             @RequestParam Long transporter,
                             @RequestParam Long driver,
                             @RequestParam Long vehicle,
                             @RequestParam("cargo[]") List<String> cargo,
                             @RequestParam("weight[]") List<String> weight,
                             @RequestParam String comment,
                             @RequestParam String loadingDate,
                             @RequestParam("loadingPlace[]") List<String> loadingPlace,
                             @RequestParam String loadingPerson,
                             @RequestParam String loadingNumber,
                             @RequestParam String unloadingDate,
                             @RequestParam("loadingPlace[]") List<String> unloadingPlace,
                             @RequestParam String unloadingPerson,
                             @RequestParam String unloadingNumber,
                             @RequestParam Long ourCompanyCust,
                             @RequestParam Long formPayCust,
                             @RequestParam String amountCust,
                             @RequestParam String amountWordsCust,
                             @RequestParam String payTermsCust,
                             @RequestParam Long ourCompanyCarr,
                             @RequestParam Long formPayCarr,
                             @RequestParam String amountCarr,
                             @RequestParam String amountWordsCarr,
                             @RequestParam String payTermsCarr,
                             Model model) {
        Cargo cargo1 = createCargo(cargo,weight);
        cargoRepository.save(cargo1);
        Place loadingPlace1 = createPlace(loadingPlace, loadingPerson, loadingNumber, loadingDate);
        placeRepository.save(loadingPlace1);
        Place unloadingPlace1 = createPlace(unloadingPlace, unloadingPerson, unloadingNumber, unloadingDate);
        placeRepository.save(unloadingPlace1);
        CustomerPay customerPay = new CustomerPay(amountCust, amountWordsCust, payTermsCust, formPayRepository.findById(formPayCust).orElseThrow(() -> new NoSuchElementException("")), ourCompanyRepository.findById(ourCompanyCust).orElseThrow(() -> new NoSuchElementException("")));
        customerPayRepository.save(customerPay);
        CarrierPay carrierPay = new CarrierPay(amountCarr, amountWordsCarr, payTermsCarr, formPayRepository.findById(formPayCarr).orElseThrow(() -> new NoSuchElementException("")), ourCompanyRepository.findById(ourCompanyCarr).orElseThrow(() -> new NoSuchElementException("")));
        carrierPayRepository.save(carrierPay);
        Forming forming = new Forming(
                managerRepository.findById(manager).orElseThrow(() -> new NoSuchElementException("")),
                cargoOwnerRepository.findById(cargoOwner).orElseThrow(() -> new NoSuchElementException("")),
                transporterRepository.findById(transporter).orElseThrow(() -> new NoSuchElementException("")),
                driverRepository.findById(driver).orElseThrow(() -> new NoSuchElementException("")),
                vehicleRepository.findById(vehicle).orElseThrow(() -> new NoSuchElementException("")),
                cargo1,
                loadingPlace1,
                unloadingPlace1,
                customerPay,
                carrierPay,
                new Date().toString(),
                comment);
        formingRepository.save(forming);
        return "redirect:/forming";
    }

    private Cargo createCargo(List<String> cargos, List<String> weights) {
        StringBuilder cargo = new StringBuilder();
        StringBuilder weight = new StringBuilder();

        for (String s : cargos) {
            cargo.append(s).append(";");
        }
        for (String s : weights) {
            weight.append(s).append(";");

        }
        return new Cargo(cargo.toString(), weight.toString());
    }

    private Place createPlace(List<String> places, String person, String number, String date) {
        StringBuilder place = new StringBuilder();
        for (String s : places) {
            place.append(s).append(";");
        }
        return new Place(place.toString(), person, number, date);
    }

}