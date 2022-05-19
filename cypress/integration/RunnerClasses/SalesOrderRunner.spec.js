import { sellPage } from "../../support/PageObjects/SellPage";
import { mainPage } from "../../support/PageObjects/MainPage";
import { signInPage } from "../../support/PageObjects/SignInPage";
import { salesOrderPage } from "../../support/PageObjects/SalesOrderPage";




Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe("Sales Order", () => {

    before(function () {
        cy.visit("/");

        mainPage.checkTheTitle("Katana │ Manufacturing ERP Software for Total Visibility");
        mainPage.goToSignInPage();

        signInPage.checkTheTitle("Sign In | Manufacturing ERP — Katana");
        signInPage.loginAsUser();

        sellPage.webElementShouldVisible();
        sellPage.checkTheTitle("Sales list - Katana");

        sellPage.getPlusSignButton().click();
        sellPage.getSalesOrderMenuItem().click();

    })

    beforeEach(function () {


    })

    afterEach(function () {
        salesOrderPage.goToSellPage();
        sellPage.findOrderWithOrderNumber(this.text1);
        sellPage.getPlusSignButton().click();
        sellPage.getSalesOrderMenuItem().click();


    })




    it("TC001 - Creating Sales Order With Existing Contact", () => {

        salesOrderPage.typeInCustomerNameAndSurname("Tyson Chandler");
        // salesOrderPage.getBillToInputBox().click();
        // salesOrderPage.typeInAddressLine1("2700 Clarendon Blvd, Arlington, USA ");
        // salesOrderPage.typeInCityOrTown("Arlington");
        // salesOrderPage.typeInStateOrRegion("Virginia");
        // salesOrderPage.typeInZipOrPostalCode("22201");
        // salesOrderPage.okButton().click();


        salesOrderPage.typeInSearchItemInputBox("Dining table")
        salesOrderPage.typeInQuantityInputBox(2);
        salesOrderPage.typeInPriceUnitInputBox(1500);
        salesOrderPage.getSalesOrderNumber();


    })

    it("TC002 - Creating Sales Order With Changing Existing Contact Address", () => {

        salesOrderPage.typeInCustomerNameAndSurname("Jon Jones");
        salesOrderPage.typeInSearchItemInputBox("Lounge chair")
        salesOrderPage.typeInQuantityInputBox(3);
        salesOrderPage.typeInPriceUnitInputBox(300);


        salesOrderPage.getBillToInputBox().click();
        salesOrderPage.typeInAddressLine1("2700 Clarendon Blvd, Arlington, USA ");
        salesOrderPage.typeInCityOrTown("Arlington");
        salesOrderPage.typeInStateOrRegion("Virginia");
        salesOrderPage.typeInZipOrPostalCode("22201");
        salesOrderPage.okButton().click({ force: true });

        salesOrderPage.getSalesOrderNumber();

    })

})