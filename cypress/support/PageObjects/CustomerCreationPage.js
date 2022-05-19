/// <reference types="cypress" />

import { BasePage } from "./BasePage";

export class CustomerCreationPage extends BasePage {


    typeInFirstName(firstName) {
        cy.get('[name="firstName"]').clear().type(firstName);
    }

    typeInLastName(lastName) {
        cy.get('[name="lastName"]').clear().type(lastName);
    }

    typeInCompanyName(companyName) {
        cy.get('[name="company"]').clear().wait(500).type("{Enter}" + companyName)
    }

    typeInDisplayName(displayName) {
        cy.get('[name="company"]').clear().type(displayName);
    }

    clickInDisplayName() {
        cy.get('[name="name"]').click();
    }


    typeInEmail(email) {
        cy.get('[name="email"]').click().clear().wait(500).type(email);
    }

    typeInPhoneNumber(phone) {
        cy.get('[name="phone"]').click().clear().wait(500).type("{Enter}" + phone);
    }

    typeInComment(comment) {
        cy.get('[name="comment"]').clear().type(comment);
    }


    typeInBillingAddress() {
        cy.get('[name="defaultBillingAddress"]').click("left");
    }

    typeInShippingAddress() {
        cy.get('[name="defaultShippingAddress"]').click("left");
    }
}


export const customerCreationPage = new CustomerCreationPage;