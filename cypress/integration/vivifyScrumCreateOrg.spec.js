///<reference types="Cypress" />
import {loginPage} from './../page_objects/vivifyScrumLogin'
import {organization} from './../page_objects/vivifyScrumCreateOrg'
import {validLoginMail,validLoginPassword} from './../fixtures/scrum.data.json'
describe('create organization',()=>{


    beforeEach('visit page',()=>{
        cy.visit('https://cypress.vivifyscrum-stage.com/login');
        loginPage.login(validLoginMail,validLoginPassword);

    })

    it('create organization',()=>{
        cy.intercept(
            "POST",
            "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations",
            (req)=>{}
        ).as("createOrganization")
        organization.createOrganization('za brisanje');
        cy.wait('@createOrganization').then((interception)=>{
            expect(interception.response.statusCode).eq(200);   
            cy.url().should('contains','/boards')
        })
    })

    it('check created organization',()=>{
        organization.myOrganizationTitle.should('exist')
            .and('have.text','za brisanje');
    })

    it('delete organization',()=>{
        cy.intercept(
            "POST",
            "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/**",
            (req)=>{}
        ).as("deleteOrg")
        organization.deleteOrganization(validLoginPassword);
        cy.wait('@deleteOrg').then((interception)=>{
            expect(interception.response.statusCode).eq(201);
        })
    })

    it('check deleted organization',()=>{
        organization.deletedElement.should('not.exist')
    })
})