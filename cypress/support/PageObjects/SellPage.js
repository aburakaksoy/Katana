import { BasePage } from "./BasePage"

export class SellPage extends BasePage {

    webElementShouldVisible() {
        cy.get("#globalAdd").should("be.visible");

    }

    findOrderWithOrderNumber(orderNumber) {
        cy.get("body").find(".ag-body-viewport")  //.scrollTo("bottom");
        cy.contains(orderNumber).should("have.text", orderNumber);
    }





}

export const sellPage = new SellPage;