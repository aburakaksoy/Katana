/// <reference types="cypress" />

import { BasePage } from "./BasePage";

//sayfadaki webelementleri ilk kez tıkladığımda başka bir webelementine dönüştüğü için iki kere webelementi bulduk
//hata this element is detacted from the DOM

export class SalesOrderPage extends BasePage {

    typeInCustomerNameAndSurname(nameAndSurname) {
        cy.get('[placeholder="Search or create customer"]').clear().type(nameAndSurname, { delay: 600 });
        cy.get('[placeholder="Search or create customer"]').type('{downArrow}{enter}').wait(500);
    }

    typeInSearchItemInputBox(item) {
        cy.get('[col-id="item"]').eq(1).click("center").wait(500);
        cy.get('[col-id="item"]').eq(1).type(item, { delay: 600 });
        cy.get('[col-id="item"]').eq(1).type('{downArrow}{enter}');
    }

    typeInQuantityInputBox(quantity) {
        cy.get('[col-id="quantity"]').eq(1).click("center").wait(1000);
        cy.get('[col-id="quantity"]').eq(1).click("center").type(quantity, { delay: 600 });
    }

    typeInPriceUnitInputBox(price) {
        cy.get('[col-id="item.salesPrice"]').eq(1).click("center").wait(1000);
        cy.get('[col-id="item.salesPrice"]').eq(1).click("center").type(price, { delay: 600 })
    }

    getSalesOrderNumber() {
        cy.wait(1000);
        cy.get('[name="orderNo"]').invoke("val").as('text1');
    }

    getBillToInputBox() {
        return cy.get('.sc-jrsJWt').eq(0);
    }

    typeInAddressLine1(address1) {
        cy.get('[name="line1"]').clear().type(address1);
    }

    typeInCityOrTown(city) {
        cy.get('[name="city"]').clear().type(city);
    }

    typeInStateOrRegion(state) {
        cy.get('[name="state"]').clear().type(state);
    }

    typeInZipOrPostalCode(zip) {
        cy.get('[name="zip"]').clear().type(zip);
    }

    typeInFirstName(firstName) {
        cy.get('[name="firstName"]').eq(1).click().type(firstName);
    }

    typeInLastName(lastName) {
        cy.get('[name="lastName"]').eq(1).clear().type(lastName);
    }


    okButton() {
        return cy.get("#submitButton");
    }
}

export const salesOrderPage = new SalesOrderPage;