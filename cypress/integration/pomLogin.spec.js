
//const Locators = require("../fixtures/Locator.json");
import {loginPage} from './../page_objects/loginPage';
const faker = require("faker");

describe('Improved login',()=>{
    let correctEmail = "milicagrubacic9@gmail.com";
    let correctPassword = "nervoznipostar1994";
    let userData = {
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    }

    beforeEach('visit link', ()=>{
        cy.visit("/");
        cy.url().should('contains', 'gallery-app.')
    })

    it('Successfull login',()=>{
        cy.intercept(
            "POST",
            "https://gallery-api.vivifyideas.com/api/auth/login",
            (req) => {}
        ).as("validLogin");

        loginPage.login(correctEmail,correctPassword);
        cy.wait('@validLogin').then((interception)=>{
            expect(interception.response.statusCode).eq(200);
        })
        loginPage.logoutButton.should('be.visible');
    })
    it('Logout',()=>{
        cy.intercept(
            "POST",
            "https://gallery-api.vivifyideas.com/api/auth/logout"
        ).as("logout")
        loginPage.login(correctEmail,correctPassword);
        loginPage.logoutButton.click();
        cy.wait('@logout').then((interception)=>{
            expect(interception.response.body.message).eq('Successfully logged out');
            expect(interception.response.statusCode).eq(200);
        })
        loginPage.logoutButton.should('not.exist');
    })
    it('login with invalid data',()=>{
        loginPage.login(userData.randomEmail,userData.randomPassword);
        loginPage.errorMessage.should('be.visible');
        loginPage.errorMessage.should('have.css','background-color','rgb(248, 215, 218)');
        loginPage.errorMessage.should('have.text', 'Bad Credentials');

       
       

    })
   
})