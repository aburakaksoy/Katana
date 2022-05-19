export class BasePage {

    checkTheTitle(expectedTitle) {
        return cy.title().should("eq", expectedTitle);
    }

    getPlusSignButton() {
        return cy.get("#globalAdd");
    }

    getAddCustomerMenuItem() {
        return cy.get("#add-customer");
    }

    goToContactsPage() {
        cy.get("#contactsTab").click("left");
    }

    getSalesOrderMenuItem() {
        return cy.get("#add-sales");
    }

    goToSellPage() {
        cy.get("#salesTab").click("center");
    }


}

export const basePage = new BasePage;