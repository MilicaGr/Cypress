/// < reference types="Cypress" />

describe('login test',()=>{
    it ('visit galleries page', ()=>{
        cy.visit("/login");
    })
    it ('click login button', ()=>{
        cy.get('a[href="/login"]').click();
    })
    it ('login with valid data',()=>{
        cy.get('input[id="email"]').type("milicagrubacic9@gmail.com");
        cy.get('input[id="password"]').type("nervoznipostar1994");
        cy.get('button[type="submit"]').click();
    
    })
    it ('logout', ()=>{
        cy.wait(3000);
        cy.get('a[role="button "]').click();
    });
    //negative cases
    it('All empty fields',()=>{
        cy.get('button[type="submit"]').click();
    })
    it('Login with unregistered email',()=>{
        cy.get('input[id="email"]').type("neregistrovan@mail.com");
        cy.get('input[id="password"]').type("sifrasifra1");
        cy.get('button[type="submit"]').click();
    })
    it('Login with wrong password',()=>{
        cy.get('input[id="email"]').clear().type("milicagrubacic9@gmail.com");
        cy.get('input[id="password"]').clear().type("sifrasifra12");
        cy.get('button[type="submit"]').click();
    })
})