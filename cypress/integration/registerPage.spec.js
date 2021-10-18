import{registerPage} from './../page_objects/registerPage';
import {loginPage} from './../page_objects/loginPage';
const faker = require('faker');

describe('register page',()=>{
    let existingEmail = "milicagrubacic9@gmail.com"
    let shortPassword = "test123"
    let passwordWithoutDigit = "testtest"
    let userRegisterData = {
        randomFirstName:faker.name.findName(),
        randomLastName:faker.name.findName(),
        randomEmail:faker.internet.email(),
        randomPassword:faker.internet.password(),
        randomConfirmedPassword:faker.internet.password(),
        
    }
    let firstName = "   ";
    let lastName = "   ";
    let password = "        ";
    let confirmedPassword= "        ";

    beforeEach('visit link',()=>{
        cy.visit("/register");
        })


        //it('successfull register',()=>{
          //  cy.intercept(
              //  "POST",
               // "https://gallery-api.vivifyideas.com/api/auth/register",
              //  (req)=>{}
          //  ).as("validRegistration")
           // registerPage.register(userRegisterData.randomFirstName,userRegisterData.randomLastName,userRegisterData.randomEmail,userRegisterData.randomPassword,userRegisterData.randomPassword);
           // cy.wait('@validRegistration').then((interception)=>{
             //   expect(interception.response.statusCode).eq(200);
            //    loginPage.logoutButton.should('be.visible');
             //   registerPage.allGalleriestitle.should('have.text', 'All Galleries')
         //   })
    
      //  })

      it('register with all empty fields',()=>{
          registerPage.emptyRegister();
          cy.url().should('contains', 'app.vivifyideas.com/register');
          registerPage.registerTitle.should('be.visible');
          registerPage.registerTitle.should('have.text', 'Register');
      })

    it('register with spaces instead of first and last name',()=>{
        cy.intercept(
            "POST",
            "https://gallery-api.vivifyideas.com/api/auth/register",
            (req)=>{}
        ).as("first and last name with spaces")
        registerPage.register(firstName,lastName,userRegisterData.randomEmail,userRegisterData.randomPassword,userRegisterData.randomPassword);
        cy.wait('@first and last name with spaces').then((interception)=>{
            expect(interception.response.statusCode).eq(422);
            expect(interception.response.body.message).eq('The given data was invalid.');
            registerPage.firstNameErrorMessage.should('be.visible');
            registerPage.firstNameErrorMessage.should('have.text', 'The first name field is required.');
            registerPage.lastNameErrorMessage.should('be.visible');
            registerPage.lastNameErrorMessage.should('have.text', 'The last name field is required.');
        })
    })

    it('register with spaces instead of password',()=>{
        cy.intercept(
            "POST",
            "https://gallery-api.vivifyideas.com/api/auth/register",
            (req)=>{}
        ).as("password with spaces")
        registerPage.register(userRegisterData.randomFirstName,userRegisterData.randomLastName,userRegisterData.randomEmail,password,confirmedPassword);
        cy.wait('@password with spaces').then((interception)=>{
            expect(interception.response.statusCode).eq(422);
            expect(interception.response.body.message).eq('The given data was invalid.');
            registerPage.passwordErrorMessage.should('be.visible');
            registerPage.passwordErrorMessage.should('have.text', 'The password field is required.');
        })

    })

    it('register with existing mail',()=>{
        cy.intercept(
            "POST",
            "https://gallery-api.vivifyideas.com/api/auth/register",
            (req)=>{}
        ).as("existing mail")
        registerPage.register(userRegisterData.randomFirstName,userRegisterData.randomLastName,existingEmail,userRegisterData.randomPassword,userRegisterData.randomPassword);
        cy.wait('@existing mail').then((interception)=>{
            expect(interception.response.statusCode).eq(422);
            expect(interception.response.body.message).eq('The given data was invalid.');
            registerPage.emailErrorMessage.should('be.visible');
            registerPage.emailErrorMessage.should('have.text', 'The email has already been taken.')
        })
    })

    it('register with wrong password confirmation',()=>{
        cy.intercept(
            "POST",
            "https://gallery-api.vivifyideas.com/api/auth/register",
            (req)=>{}
        ).as("wrong pass confirmation")
        registerPage.register(userRegisterData.randomFirstName,userRegisterData.randomLastName,userRegisterData.randomEmail,userRegisterData.randomPassword,userRegisterData.randomConfirmedPassword);
        cy.wait('@wrong pass confirmation').then((interception)=>{
            expect(interception.response.statusCode).eq(422);
            expect(interception.response.body.message).eq('The given data was invalid.');
            registerPage.passwordConfirmationErrorMessage.should('be.visible');
            registerPage.passwordConfirmationErrorMessage.should('have.text', 'The password confirmation does not match.')
        })
    })

    it('register with 7 characters in password',()=>{
        cy.intercept(
            "POST",
            "https://gallery-api.vivifyideas.com/api/auth/register",
            (req)=>{}
        ).as("short password")
        registerPage.register(userRegisterData.randomFirstName,userRegisterData.randomLastName,userRegisterData.randomEmail,shortPassword,shortPassword);
        cy.wait('@short password').then((interception)=>{
            expect(interception.response.statusCode).eq(422);
            expect(interception.response.body.message).eq('The given data was invalid.');
            registerPage.shortPasswordErrorMessage.should('be.visible');
            registerPage.shortPasswordErrorMessage.should('have.text', 'The password must be at least 8 characters.')
        })
    })

    it('register with password without digit',()=>{
        cy.intercept(
            "POST",
            "https://gallery-api.vivifyideas.com/api/auth/register",
            (req)=>{}
        ).as("no digit password")
        registerPage.register(userRegisterData.randomFirstName,userRegisterData.randomLastName,userRegisterData.randomEmail,passwordWithoutDigit,passwordWithoutDigit);
        cy.wait('@no digit password').then((interception)=>{
        expect(interception.response.statusCode).eq(422);
        expect(interception.response.body.message).eq('The given data was invalid.');
        registerPage.noDigitPasswordErrorMessage.should('be.visible');
        registerPage.noDigitPasswordErrorMessage.should('have.text', 'The password format is invalid.');
    })
})

    it.only('register without checkbox',()=>{
        cy.intercept(
            "POST",
            "https://gallery-api.vivifyideas.com/api/auth/register",
            (req)=>{}
        ).as("no checkbox")
        registerPage.noCehckboxRegister(userRegisterData.randomFirstName,userRegisterData.randomLastName,userRegisterData.randomEmail,userRegisterData.randomPassword,userRegisterData.randomPassword);
        cy.wait('@no checkbox').then((interception)=>{
        expect(interception.response.statusCode).eq(422);
        expect(interception.response.body.message).eq('The given data was invalid.');
        registerPage.checkBoxErrorMessage.should('be.visible');
        registerPage.checkBoxErrorMessage.should('have.text', 'The terms and conditions must be accepted.');
    })
    })


    
})