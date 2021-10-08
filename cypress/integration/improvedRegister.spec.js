const Locators = require("../fixtures/Locator.json");
const faker = require("faker");

describe('Improved register',()=>{
    let userData = {
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password(),
        randomLastName: faker.name.lastName()
    }

   // let firstName = "first";
   // let lastName = "last";
   // let correctEmail = "novimejl@novi.com";
   // let correctPassword = "nervoznipostar1994";

    before('visit link', ()=>{
        cy.visit("/");
        cy.url().should('contains', 'gallery-app.')
    })
    
        
    it('successfull register',()=>{
        cy.get(Locators.Header.registerButton).click();
        cy.get(Locators.RegisterPage.firstNameinput).type(userData.randomName);
        cy.get(Locators.RegisterPage.lastNameinput).type(userData.randomLastName);
        cy.get(Locators.RegisterPage.emailInput).type(userData.randomEmail);
        cy.get(Locators.RegisterPage.passwordInput).type(userData.randomPassword);
        cy.get(Locators.RegisterPage.confirmPasswordinput).type(userData.randomPassword);
        cy.get(Locators.RegisterPage.checkBox).check();
        cy.get(Locators.RegisterPage.registerButton).click();
        
    })

    

})