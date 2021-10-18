import { registerPage } from '../page_objects/vivifyScrumRegister';
import {existingMail,validPassword,validNumberOfUsers,emailWithout,validMail,shortPassword} from '../fixtures/scrum.data.json'
describe('register page',()=>{

    

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
        })
    })

    it('register without email address provided',()=>{
        registerPage.register(' ',validPassword,validNumberOfUsers);
        registerPage.errorMessage.should('be.visible')
        .and('have.text','The email field must be a valid email');
        registerPage.accountDetailsTitle.should('be.visible');
    })

    it('register with mail without @',()=>{
        registerPage.register(emailWithout,validPassword,validNumberOfUsers);
        registerPage.errorMessage.should('be.visible')
        .and('have.text','The email field must be a valid email');
        registerPage.accountDetailsTitle.should('be.visible');
    })

    it('register with mail without .',()=>{
        registerPage.register('test@testcom',validPassword,validNumberOfUsers);
        registerPage.errorMessage.should('be.visible')
        .and('have.text','The email field must be a valid email');
        registerPage.accountDetailsTitle.should('be.visible');
    })

    it('register wihtout password provided',()=>{
        registerPage.register(validMail,' ',validNumberOfUsers);
        registerPage.errorMessage.should('be.visible')
        .and('have.text','The password field is required');
        registerPage.accountDetailsTitle.should('be.visible');
    })

    it('register with short password',()=>{
        registerPage.register(validMail,shortPassword,validNumberOfUsers);
        registerPage.errorMessage.should('be.visible')
        .and('have.text','The password field must be at least 5 characters');
        registerPage.accountDetailsTitle.should('be.visible');
     })

    it('register with less number of users',()=>{
        registerPage.register(validMail,validPassword,'0');
        registerPage.errorMessage.should('be.visible')
        .and('have.text','The number of users must be between 1 and 10');
        registerPage.accountDetailsTitle.should('be.visible');
    })

    it.only('register wihtout number of users provided',()=>{
        registerPage.register(validMail,validPassword,' ');
        registerPage.errorMessage.should('be.visible')
        .and('have.text','The number of users field is required');
        registerPage.accountDetailsTitle.should('be.visible');
    })

    it('register with more number of users',()=>{
        registerPage.register(validMail,validPassword, '11');
        registerPage.errorMessage.should('be.visible')
        .and('have.text','The number of users must be between 1 and 10');
        registerPage.accountDetailsTitle.should('be.visible');
    })

    //it('valid registration',()=>{
        //registerPage.register('mlc@mlc.com',validPassword.validNumberOfUsers);

  //  })
})