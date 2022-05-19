export class ShippingAddressWindow {
    typeInFirstName(firstName) {
        cy.get('[name="firstName"]').eq(1).click().type(firstName);
    }

    typeInLastName(lastName) {
        cy.get('[name="lastName"]').eq(1).clear().type(lastName);
    }

    typeInCompanyName(companyName) {
        cy.get('[name="company"]').eq(1).clear().type(companyName);
    }


    typeInPhoneNumber(phone) {
        cy.get('[name="phone"]').eq(1).clear().type(phone);
    }

    typeInAddressLine1(address1) {
        cy.get('[name="line1"]').clear().type(address1);
    }

    typeInAddressLine2(address2) {
        cy.get('[name="line2"]').clear().type(address2);
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

    typeInCountry(country) {
        cy.get('[name="country"]').clear().type(country);
    }

    okButton() {
        return cy.get("#submitButton");
    }







}

export const shippingAddressWindow = new ShippingAddressWindow;