
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
        loginPage.login(correctEmail,correctPassword);
        loginPage.logoutButton.should('be.visible');
    })
    it('Logout',()=>{
        loginPage.login(correctEmail,correctPassword);
        loginPage.logoutButton.click();
        loginPage.logoutButton.should('not.exist');
    })
    it('login with invalid data',()=>{
        loginPage.login(userData.randomEmail,userData.randomPassword);
        loginPage.logoutButton.click();

       
       

    })
   
})