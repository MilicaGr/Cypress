export default class LoginPage {
    get submitButton() {
        return cy.get('button[type="submit"]')

    }
    get logoutButton () {
        return cy.get("a[role='button ']")
    }
    
    get loginButton(){
        return cy.get('a[href="/login"]')
    }
    
    get errorMessage(){
        return cy.get('p[class="alert alert-danger"]')
    }
    getInputField(id) {
        return cy.get(`#${id}`);
    }
    login(email,password) {
        this.loginButton.click()
        this.getInputField('email').type(email);
        this.getInputField('password').type(password);
        this.submitButton.click();
    }


}

export const loginPage = new LoginPage();