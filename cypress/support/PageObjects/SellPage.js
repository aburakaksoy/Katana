import { BasePage } from "./BasePage"

export class SellPage extends BasePage {

    webElementShouldVisible() {
        cy.get("#globalAdd").should("be.visible");

    }

    findOrderWithOrderNumber(orderNumber) {
        // cy.contains(orderNumber).should("be.visible");
        // cy.get(".Loader__content a").last().contains(orderNumber).should("be.visible");
        cy.get("body").find(".ag-body-viewport")  //.scrollTo("bottom");
        cy.contains(orderNumber).should("have.text", orderNumber);
    }





}

export const sellPage = new SellPage;