import { basePage } from "../../support/PageObjects/BasePage";
import { billingAdressWindow } from "../../support/PageObjects/BillingAddressWindow";
import { contactsPage } from "../../support/PageObjects/ContactsPage";
import { customerCreationPage } from "../../support/PageObjects/CustomerCreationPage";
import { mainPage } from "../../support/PageObjects/MainPage";
import { salePage, sellPage } from "../../support/PageObjects/SellPage";
import { shippingAddressWindow } from "../../support/PageObjects/ShippingAddressWindow";
import { signInPage } from "../../support/PageObjects/SignInPage";

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("customer creation", () => {


    before(function () {
        cy.visit("/");

        mainPage.checkTheTitle("Katana │ Manufacturing ERP Software for Total Visibility");
        mainPage.goToSignInPage();

        signInPage.checkTheTitle("Sign In | Manufacturing ERP — Katana");
        signInPage.loginAsUser();

        sellPage.webElementShouldVisible();
        sellPage.checkTheTitle("Sales list - Katana");

    })

    beforeEach(function () {

        sellPage.getPlusSignButton().click();
        sellPage.getAddCustomerMenuItem().click();

    })


    it("TC001 - Customer creation with filling all the input boxes", () => {

        customerCreationPage.typeInFirstName("Abdullah Burak");
        customerCreationPage.typeInLastName("Aksoy");
        customerCreationPage.typeInCompanyName("Katana");
        // customerCreationPage.typeInDisplayName("katanamrp.com");
        customerCreationPage.typeInEmail("katana@katanamrp.com");
        customerCreationPage.typeInPhoneNumber("+3720000000");
        customerCreationPage.typeInComment("IT Company in Talinn");
        customerCreationPage.typeInBillingAddress();



        billingAdressWindow.typeInFirstName("Abdullah Burak");
        billingAdressWindow.typeInLastName("Aksoy");
        billingAdressWindow.typeInCompanyName("Katana");
        billingAdressWindow.typeInPhoneNumber("+3720000000");
        billingAdressWindow.typeInAddressLine1("Peetri 7, 10411 Tallinn, Estonia")
        //billingAdressWindow.typeInAddressLine2("Estonia");
        billingAdressWindow.typeInCityOrTown("Talinn");
        billingAdressWindow.typeInStateOrRegion("Harju makoond");
        billingAdressWindow.typeInZipOrPostalCode("10411");
        billingAdressWindow.typeInCountry("Estonia");
        billingAdressWindow.okButton().click("center");

        customerCreationPage.typeInShippingAddress();


        shippingAddressWindow.typeInFirstName("Abdullah Burak");
        shippingAddressWindow.typeInLastName("Aksoy");
        shippingAddressWindow.typeInCompanyName("Katana");
        shippingAddressWindow.typeInPhoneNumber("+3720000000");
        shippingAddressWindow.typeInAddressLine1("Peetri 7, 10411 Tallinn, Estonia");
        //shippingAddressWindow.typeInAddressLine2("Estonia");
        shippingAddressWindow.typeInCityOrTown("Talinn");
        shippingAddressWindow.typeInStateOrRegion("Harju makoond");
        shippingAddressWindow.typeInZipOrPostalCode("10411");
        shippingAddressWindow.typeInCountry("Estonia");
        billingAdressWindow.okButton().click("center");

        customerCreationPage.goToContactsPage();

        contactsPage.findContactWithEmail("katana@katanamrp.com");


    })

    it("TC002 - Customer creation with filling all the input boxes except shippingadress", () => {


        customerCreationPage.typeInFirstName("Jon");
        customerCreationPage.typeInLastName("Jones");
        customerCreationPage.typeInCompanyName("Apple");
        // customerCreationPage.typeInDisplayName("apple.com");
        customerCreationPage.typeInEmail("jones@apple.com");
        customerCreationPage.typeInPhoneNumber("+1000000000");
        customerCreationPage.typeInComment("IT Company in USA");
        customerCreationPage.typeInBillingAddress();



        billingAdressWindow.typeInFirstName("Jon");
        billingAdressWindow.typeInLastName("Jones");
        billingAdressWindow.typeInCompanyName("Apple");
        billingAdressWindow.typeInPhoneNumber("+1000000000");
        billingAdressWindow.typeInAddressLine1("Bear St, Costa Mesa California, USA")
        //billingAdressWindow.typeInAddressLine2("Estonia");
        billingAdressWindow.typeInCityOrTown("Costa Mesa");
        billingAdressWindow.typeInStateOrRegion("California");
        billingAdressWindow.typeInZipOrPostalCode("10411");
        billingAdressWindow.typeInCountry("USA");
        billingAdressWindow.okButton().click("center");

        customerCreationPage.goToContactsPage();
        contactsPage.findContactWithEmail("jones@apple.com");


    })

    it("TC003 - Customer creation with filling all the input boxes except shippingaddress and billing address ", () => {

        sellPage.getPlusSignButton().click();
        sellPage.getAddCustomerMenuItem().click();


        customerCreationPage.typeInFirstName("Tyson");
        customerCreationPage.typeInLastName("Chandler");
        customerCreationPage.typeInCompanyName("Bentley");
        // customerCreationPage.typeInDisplayName("katanamrp.com");
        customerCreationPage.typeInEmail("chandler@bentley.com");
        customerCreationPage.typeInPhoneNumber("+4400000000");
        customerCreationPage.typeInComment("Automotive Company in UK")



        customerCreationPage.goToContactsPage();
        contactsPage.findContactWithEmail("chandler@bentley.com");



    })

    it("TC004 - Customer creation with filling only name, surname, email input boxes", () => {

        sellPage.getPlusSignButton().click();
        sellPage.getAddCustomerMenuItem().click();


        customerCreationPage.typeInFirstName("Ursula");
        customerCreationPage.typeInLastName("Garthner");
        customerCreationPage.typeInEmail("garthner@siemens.com");
        customerCreationPage.clickInDisplayName();

        customerCreationPage.goToContactsPage();
        contactsPage.findContactWithEmail("garthner@siemens.com");

    })

    it("TC005 - Customer creation with filling only name, surname, phonenumber input boxes", () => {

        sellPage.getPlusSignButton().click();
        sellPage.getAddCustomerMenuItem().click();


        customerCreationPage.typeInFirstName("Ingrid");
        customerCreationPage.typeInLastName("Larsson");
        customerCreationPage.typeInPhoneNumber("+4600000000");
        customerCreationPage.clickInDisplayName();



        customerCreationPage.goToContactsPage();
        contactsPage.findContactWithPhoneNumber("+4600000000")

    })

    it("TC006 - Customer Creation with filling letters in the phonenumber inputbox", () => {

        sellPage.getPlusSignButton().click();
        sellPage.getAddCustomerMenuItem().click();


        customerCreationPage.typeInFirstName("Ali");
        customerCreationPage.typeInLastName("Ihsan");
        customerCreationPage.typeInPhoneNumber("wqacsdjguwern");
        customerCreationPage.clickInDisplayName();



        customerCreationPage.goToContactsPage();
        contactsPage.isPhoneNumberInCorrectForm("wqacsdjguwern");

    })

})