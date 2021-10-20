///<reference types="Cypress" />
import {loginPage} from './../page_objects/vivifyScrumLogin'
import {registerPage} from './../page_objects/vivifyScrumRegister'
import {validLoginMail,validLoginPassword} from './../fixtures/scrum.data.json'
const faker = require("faker");

describe('loginPage',()=>{
    let userData ={
        unregisteredEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    }

beforeEach('visit page',()=>{
    cy.visit('https://cypress.vivifyscrum-stage.com/login');
   loginPage.loginTitle.should('be.visible');
});

it('login with unregistered mail',()=>{
    loginPage.login(userData.unregisteredEmail,userData.randomPassword);
    loginPage.loginTitle.should('be.visible');
    registerPage.errorMessage.should('have.text','Oops! Your email/password combination is incorrect')
    .and('have.css','color','rgb(187, 57, 22)')
    cy.url().should('contains','vivifyscrum-stage.com/login')
});

it('login with no email provided',()=>{
    loginPage.login(' ',userData.randomPassword);
    loginPage.loginTitle.should('be.visible');
    registerPage.errorMessage.should('have.text','The email field must be a valid email')
    .and('have.css','color','rgb(187, 57, 22)');
    cy.url().should('contains','vivifyscrum-stage.com/login');
});

it('login with no password provided',()=>{
    loginPage.login(validLoginMail,' ');
    loginPage.loginTitle.should('be.visible');
    registerPage.errorMessage.should('have.text','The password field is required')
    .and('have.css','color','rgb(187, 57, 22)');
    cy.url().should('contains','vivifyscrum-stage.com/login');
});

it('successfull login',()=>{
    cy.intercept(
        "POST",
        "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
        (req)=>{}
    ).as("validLogin")
    loginPage.login(validLoginMail,validLoginPassword);
    cy.wait('@validLogin').then((interception)=>{
        expect(interception.response.statusCode).eq(200);
    })
    cy.url().should('contains','vivifyscrum-stage.com/my-organizations');
});

it('logout',()=>{
    loginPage.login(validLoginMail,validLoginPassword);
    loginPage.profilImage.click();
    loginPage.profil.click();
    loginPage.logoutButton.click();
    loginPage.loginTitle.should('be.visible');
    loginPage.loginButton.should('be.visible');
    cy.url().should('contains','vivifyscrum-stage.com/login');
});



});