import { BasePage } from "./BasePage";

export class ContactsPage extends BasePage {

    findContactWithEmail(email) {
        cy.get("body").find(".ag-body-viewport")    //.scrollTo("bottom");
        cy.contains(email).should('have.text', email);
    }

    findContactWithPhoneNumber(number) {
        cy.get("body").find(".ag-body-viewport")    //.scrollTo("bottom");
        cy.contains(number).should('have.text', number);
    }

    isPhoneNumberInCorrectForm(number) {
        cy.get("body").find(".ag-body-viewport")   //.scrollTo("bottom");
        cy.contains(number).should('not.contain.text', number);
        cy.wait(2000);

    }
}

export const contactsPage = new ContactsPage;