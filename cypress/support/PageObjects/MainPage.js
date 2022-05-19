import { BasePage } from "./BasePage";

export class MainPage extends BasePage{

    goToSignInPage(){
        return cy.get(".button__text").contains("Sign in").click({force:true});
    }


}

export const mainPage = new MainPage;