import { registerPage } from '../page_objects/vivifyScrumRegister';
import {existingMail,validPassword,validNumberOfUsers,emailWithout,validMail,shortPassword} from '../fixtures/scrum.data.json'
const faker = require("faker");
describe('register page',()=>{
    let userData={
        randomEmail: faker.internet.email()
    }

    beforeEach('visit page',()=>{
        cy.visit("https://cypress-api.vivifyscrum-stage.com/pricing");
        registerPage.freeSignUpButton.click({force: true});
     registerPage.emailInputField.should('be.visible');
        
    })

    
    it('register with existing mail',()=>{
        cy.intercept(
            "POST",
            "https://cypress-api.vivifyscrum-stage.com/api/v2/register",
            (req)=>{}
        ).as("existingMail")
        registerPage.register(existingMail,validPassword,validNumberOfUsers);
        cy.wait('@existingMail').then((interception)=>{
            expect(interception.response.statusCode).eq(401);
            registerPage.accountDetailsTitle.should('be.visible');
            cy.url().should('contains','vivifyscrum-stage.com/sign-up?type=yearly&plan=2&event=page-card');
        })
    })
  

    it('register without email address provided',()=>{
        registerPage.register(' ',validPassword,validNumberOfUsers);
        registerPage.errorMessage.should('be.visible')
        .and('have.text','The email field must be a valid email');
        registerPage.accountDetailsTitle.should('be.visible');
        cy.url().should('contains','vivifyscrum-stage.com/sign-up?type=yearly&plan=2&event=page-card');
    })

    it('register with mail without @',()=>{
        registerPage.register(emailWithout,validPassword,validNumberOfUsers);
        registerPage.errorMessage.should('be.visible')
        .and('have.text','The email field must be a valid email');
        registerPage.accountDetailsTitle.should('be.visible');
        cy.url().should('contains','vivifyscrum-stage.com/sign-up?type=yearly&plan=2&event=page-card');
    })

    it('register with mail without .',()=>{
        registerPage.register('test@testcom',validPassword,validNumberOfUsers);
        registerPage.errorMessage.should('be.visible')
        .and('have.text','The email field must be a valid email');
        registerPage.accountDetailsTitle.should('be.visible');
        cy.url().should('contains','vivifyscrum-stage.com/sign-up?type=yearly&plan=2&event=page-card');
    })

    it('register wihtout password provided',()=>{
        registerPage.register(validMail,' ',validNumberOfUsers);
        registerPage.errorMessage.should('be.visible')
        .and('have.text','The password field is required');
        registerPage.accountDetailsTitle.should('be.visible');
        cy.url().should('contains','vivifyscrum-stage.com/sign-up?type=yearly&plan=2&event=page-card');
    })

    it('register with short password',()=>{
        registerPage.register(validMail,shortPassword,validNumberOfUsers);
        registerPage.errorMessage.should('be.visible')
        .and('have.text','The password field must be at least 5 characters');
        registerPage.accountDetailsTitle.should('be.visible');
        cy.url().should('contains','vivifyscrum-stage.com/sign-up?type=yearly&plan=2&event=page-card');
     })

    it('register with less number of users',()=>{
        registerPage.register(validMail,validPassword,'0');
        registerPage.errorMessage.should('be.visible')
        .and('have.text','The number of users must be between 11 and 50');
        registerPage.accountDetailsTitle.should('be.visible');
        cy.url().should('contains','vivifyscrum-stage.com/sign-up?type=yearly&plan=2&event=page-card');
    })

    it('register wihtout number of users provided',()=>{
        registerPage.register(validMail,validPassword,' ');
        registerPage.errorMessage.should('be.visible')
        .and('have.text','The number of users field is required');
        registerPage.accountDetailsTitle.should('be.visible');
        cy.url().should('contains','vivifyscrum-stage.com/sign-up?type=yearly&plan=2&event=page-card');
    })

    it('register with more number of users',()=>{
        registerPage.register(validMail,validPassword, '150');
        registerPage.errorMessage.should('be.visible')
        .and('have.text','The number of users must be between 11 and 50');
        registerPage.accountDetailsTitle.should('be.visible');
        cy.url().should('contains','vivifyscrum-stage.com/sign-up?type=yearly&plan=2&event=page-card');
    })

    it('register without checkbox',()=>{
        registerPage.registerCheckbox(validMail,validPassword,validNumberOfUsers);
        registerPage.errorMessage.should('be.visible')
        .and('have.text','The agree to terms and privacy policy field is required');
        cy.url().should('contain','vivifyscrum-stage.com/sign-up?type=yearly&plan=2&event=page-card');
    })

    it('check price',()=>{
        registerPage.numberOfUsersInputField.type(validNumberOfUsers);
        registerPage.price.should('have.text','$72per month, billed annually\n  ')
    })

    it('valid registration',()=>{
        cy.intercept(
            "POST",
            "https://cypress-api.vivifyscrum-stage.com/api/v2/register",
            (req)=>{}
        ).as("validReg")
        registerPage.register(userData.randomEmail,validPassword,validNumberOfUsers);
        cy.wait('@validReg').then((interception)=>{
            expect(interception.response.statusCode).eq(200);
            cy.url().should('contains','vivifyscrum-stage.com/my-organizations')
        registerPage.myOrganization.should('be.visible');
        registerPage.profileImage.should('be.visible');

    })
})
    
})