
describe ('register test', () =>{

    it ('visit galleries page',()=>{
        cy.visit("/register");
        

    })
    // it ('Register valid', ()=>{
    //     cy.get('input[id="first-name"]').type("test");
    //     cy.get('input[id="last-name"]').type("test");
    //     cy.get('input[id="email"]').type("mailmail@test.com");
    //     cy.get('input[id="password"]').type("sifrasifra321");
    //     cy.get('input[id="password-confirmation"]').type("sifrasifra321");
    //     cy.get('input[type="checkbox"]').check();
    //     cy.get('button[type="submit"]').click();
    // })
    it ('Register empty field', ()=>{
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();

    })
    it ('Register without firstName',()=>{
        cy.get('input[id="last-name"]').type("test");
        cy.get('input[id="email"]').type("mailmail@test.com");
        cy.get('input[id="password"]').type("sifrasifra321");
        cy.get('input[id="password-confirmation"]').type("sifrasifra321");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })
    it ('Register without lastName',()=>{
        cy.get('input[id="first-name"]').clear().type("test");
        cy.get('input[id="last-name"]').clear();
        cy.get('input[id="email"]').clear().type("mailmail@test.com");
        cy.get('input[id="password"]').clear().type("sifrasifra321");
        cy.get('input[id="password-confirmation"]').clear().type("sifrasifra321");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })
    it('Register with mail without @',()=>{
        cy.get('input[id="first-name"]').clear().type("test");
        cy.get('input[id="last-name"]').clear().type("test");
        cy.get('input[id="email"]').clear().type("mailmailtest.com");
        cy.get('input[id="password"]').clear().type("sifrasifra321");
        cy.get('input[id="password-confirmation"]').clear().type("sifrasifra321");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
        
    })
    it('Register with 2 @ mail',()=>{
        cy.get('input[id="first-name"]').clear().type("test");
        cy.get('input[id="last-name"]').clear().type("test");
        cy.get('input[id="email"]').clear().type("mailmail@@test.com");
        cy.get('input[id="password"]').clear().type("sifrasifra321");
        cy.get('input[id="password-confirmation"]').clear().type("sifrasifra321");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
        
    })
    it('Register without first part of mail',()=>{
        cy.get('input[id="first-name"]').clear().type("test");
        cy.get('input[id="last-name"]').clear().type("test");
        cy.get('input[id="email"]').clear().type("@test.com");
        cy.get('input[id="password"]').clear().type("sifrasifra321");
        cy.get('input[id="password-confirmation"]').clear().type("sifrasifra321");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })
})