import { password, username } from "../Authentication";
import { BasePage } from "./BasePage";

export class SignInPage extends BasePage {

    loginAsUser() {

        cy.get("#1-email").clear().type(username);
        cy.get('[type="password"][name="password"]').clear().type(password);
        cy.get('[name="submit"][aria-label="Sign in"]').click("center");

    }




}

export const signInPage = new SignInPage;   