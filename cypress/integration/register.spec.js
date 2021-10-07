
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
        cy.get('button[type="submit"]').click();

    })
    it('Register with all spaces',()=>{
        cy.get('input[id="first-name"]').clear().type("    ");
        cy.get('input[id="last-name"]').clear().type("   ");
        cy.get('input[id="email"]').clear().type("    ");
        cy.get('input[id="password"]').clear().type("         ");
        cy.get('input[id="password-confirmation"]').clear().type("         ");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })
    it ('First name contains only digits', ()=>{
             cy.get('input[id="first-name"]').clear().type("12345");
             cy.get('input[id="last-name"]').clear().type("test");
             cy.get('input[id="email"]').clear().type("mailmail@test11.com");
             cy.get('input[id="password"]').clear().type("sifrasifra321");
             cy.get('input[id="password-confirmation"]').clear().type("sifrasifra321");
             cy.get('input[type="checkbox"]').check();
             cy.get('button[type="submit"]').click();
         })
    it ('Last name contains only digits', ()=>{
            cy.get('input[id="first-name"]').clear().type("test");
            cy.get('input[id="last-name"]').clear().type("123456");
            cy.get('input[id="email"]').clear().type("mailmail@test117.com");
            cy.get('input[id="password"]').clear().type("sifrasifra321");
            cy.get('input[id="password-confirmation"]').clear().type("sifrasifra321");
            cy.get('input[type="checkbox"]').check();
            cy.get('button[type="submit"]').click();
        })
    
    it('Register with email withouth @',()=>{
        cy.get('input[id="first-name"]').clear().type("test");
        cy.get('input[id="last-name"]').clear().type("test");
        cy.get('input[id="email"]').clear().type("mailmailtest.com");
        cy.get('input[id="password"]').clear().type("sifrasifra321");
        cy.get('input[id="password-confirmation"]').clear().type("sifrasifra321");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
        
    })
    it('Register with 2 @ at email',()=>{
        cy.get('input[id="first-name"]').clear().type("test");
        cy.get('input[id="last-name"]').clear().type("test");
        cy.get('input[id="email"]').clear().type("mailmail@@test.com");
        cy.get('input[id="password"]').clear().type("sifrasifra321");
        cy.get('input[id="password-confirmation"]').clear().type("sifrasifra321");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
        
    })
    it('Register withouth first part of email',()=>{
        cy.get('input[id="first-name"]').clear().type("test");
        cy.get('input[id="last-name"]').clear().type("test");
        cy.get('input[id="email"]').clear().type("@test.com");
        cy.get('input[id="password"]').clear().type("sifrasifra321");
        cy.get('input[id="password-confirmation"]').clear().type("sifrasifra321");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })
    it('Register withouth second part of email',()=>{
        cy.get('input[id="first-name"]').clear().type("test");
        cy.get('input[id="last-name"]').clear().type("test");
        cy.get('input[id="email"]').clear().type("test@");
        cy.get('input[id="password"]').clear().type("sifrasifra321");
        cy.get('input[id="password-confirmation"]').clear().type("sifrasifra321");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })
    it('Register withouth point in email',()=>{
        cy.get('input[id="first-name"]').clear().type("test");
        cy.get('input[id="last-name"]').clear().type("test");
        cy.get('input[id="email"]').clear().type("test@testcom");
        cy.get('input[id="password"]').clear().type("sifrasifra321");
        cy.get('input[id="password-confirmation"]').clear().type("sifrasifra321");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })
    it('Register with point after email',()=>{
        cy.get('input[id="first-name"]').clear().type("test");
        cy.get('input[id="last-name"]').clear().type("test");
        cy.get('input[id="email"]').clear().type("test@test.com.");
        cy.get('input[id="password"]').clear().type("sifrasifra321");
        cy.get('input[id="password-confirmation"]').clear().type("sifrasifra321");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })
    it('Register with existing email',()=>{
        cy.get('input[id="first-name"]').clear().type("test");
             cy.get('input[id="last-name"]').clear().type("test");
             cy.get('input[id="email"]').clear().type("mailmail@test.com");
             cy.get('input[id="password"]').clear().type("sifrasifra321");
             cy.get('input[id="password-confirmation"]').clear().type("sifrasifra321");
             cy.get('input[type="checkbox"]').check();
             cy.get('button[type="submit"]').click();
    })
    it('Register with password withouth digit',()=>{
        cy.get('input[id="first-name"]').clear().type("test");
        cy.get('input[id="last-name"]').clear().type("test");
        cy.get('input[id="email"]').clear().type("test@test1.com");
        cy.get('input[id="password"]').clear().type("sifrasifrasifra");
        cy.get('input[id="password-confirmation"]').clear().type("sifrasifrasifra");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })
    it('Register with password of 7 characters',()=>{
        cy.get('input[id="first-name"]').clear().type("test");
        cy.get('input[id="last-name"]').clear().type("test");
        cy.get('input[id="email"]').clear().type("test@test1.com");
        cy.get('input[id="password"]').clear().type("sifra11");
        cy.get('input[id="password-confirmation"]').clear().type("sifra11");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })
    it('Register with different confirmed password',()=>{
        cy.get('input[id="first-name"]').clear().type("test");
        cy.get('input[id="last-name"]').clear().type("test");
        cy.get('input[id="email"]').clear().type("test@test1.com");
        cy.get('input[id="password"]').clear().type("sifrasifra1");
        cy.get('input[id="password-confirmation"]').clear().type("sifrasifra2");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })
    it('Register withouth checking terms and conditions',()=>{
        cy.get('input[id="first-name"]').clear().type("test");
        cy.get('input[id="last-name"]').clear().type("test");
        cy.get('input[id="email"]').clear().type("test@test2.com");
        cy.get('input[id="password"]').clear().type("sifrasifra1");
        cy.get('input[id="password-confirmation"]').clear().type("sifrasifra1");
        cy.get('input[type="checkbox"]').uncheck();
        cy.get('button[type="submit"]').click();
    })
})