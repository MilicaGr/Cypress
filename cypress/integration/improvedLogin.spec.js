
const Locators = require("../fixtures/Locator.json");
const faker = require("faker");

describe('Improved login',()=>{
    let correctEmail = "milicagrubacic9@gmail.com";
    let correctPassword = "nervoznipostar1994";
    let userData = {
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    }

    before('visit link', ()=>{
        cy.visit("/");
        cy.url().should('contains', 'gallery-app.')
    })

    it('Successfull login',()=>{
        cy.get(Locators.Header.loginButton).click();
        cy.get(Locators.LoginPage.emailInput).type(correctEmail);
        cy.get(Locators.LoginPage.passwordInput).type(correctPassword);
        cy.get('button[type="submit"]').click();
        cy.get(Locators.LoginPage.logoutButton).should('be.visible');
    })
    it('Logout',()=>{
        cy.get(Locators.LoginPage.logoutButton).click();
        cy.get(Locators.LoginPage.logoutButton).should('not.exist');
    })
    it('login with invalid data',()=>{
        cy.get(Locators.Header.loginButton).click();
        cy.get(Locators.LoginPage.emailInput).type(userData.randomEmail);
        cy.get(Locators.LoginPage.passwordInput).type(userData.randomPassword);
        cy.get('button[type="submit"]').click();
       

    })
   
})