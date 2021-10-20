export default class LoginPage {

    get loginTitle(){
        return cy.get('h1')
    }

    get emailInputField(){
        return cy.get('input[type="email"]');
    }

    get passwordInputField(){
        return cy.get('input[type="password"]');
    }

    get loginButton(){
        return cy.get('button[type="submit"]');
    }

    get finishRegWindow(){
        return cy.get('.vs-c-auth-modal__body')
    }
    
    get profilImage(){
        return cy.get('.vs-u-img--round')
    }
    get profil(){
        return cy.get(':nth-child(4) > [effect="dark"] > :nth-child(2) > .vs-c-site-logo')
    }
    get logoutButton(){
        return cy.get('.vs-c-logout > .vs-c-btn')
    }

    login(email,password) {
        this.emailInputField.type(email);
        this.passwordInputField.type(password);
        this.loginButton.click();
    }


}
export const loginPage = new LoginPage();