export default class RegisterPage {

    get freeSignUpButton(){
        return cy.get('.vsp-c-pricing-plan-list--annual > :nth-child(2) > .vsp-c-btn')

        }

    get emailInputField(){
        return cy.get('input[type="email"]');
    }

    get passwordInputField(){
        return cy.get('input[type="password"]');
    }

    get numberOfUsersInputField(){
        return cy.get('input[name="number_of_users"]');
    }

    get checkBox(){
        return cy.get('.vs-c-checkbox-check');
    }

    get startFreeTrialButton(){
        return cy.get('button[type="submit"]');
    }

    get accountDetailsTitle(){
        return cy.get('h1');
    }
    get errorMessage(){
        return cy.get('.el-form-item__error');
    }
    get myOrganization(){
        return cy.get('.vs-c-my-organization__content').first();
    }
    get profileImage(){
        return cy.get('.vs-u-img--round');
    }
    
    get price(){
        return cy.get('.vs-c-sign-up-modal__new-price')
    }

    register(email,password,numberOfUsers) {
        this.emailInputField.type(email);
        this.passwordInputField.type(password);
        this.numberOfUsersInputField.type(numberOfUsers);
        this.startFreeTrialButton.click();
    }
    registerCheckbox(email,password,numberOfUsers) {
        this.emailInputField.type(email);
        this.passwordInputField.type(password);
        this.numberOfUsersInputField.type(numberOfUsers);
        this.checkBox.click();
        this.startFreeTrialButton.click();
    }

}

export const registerPage = new RegisterPage();