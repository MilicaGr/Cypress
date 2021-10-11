export default class RegisterPage {
   get firstNameinput(){
       return cy.get("input[id='first-name']")
   }
   get lastNameinput(){
       return cy.get("input[id='last-name']")
   }
   get emailInput(){
        return cy.get("input[id='email']")
   }
   get passwordInput(){
       return cy.get('input[id="password"]')
   }
   get confirmPassword(){
       return cy.get("input[id='password-confirmation']")
   }
   get checkBox(){
       return cy.get("input[type='checkbox']")
   }
   get submitButton(){
       return cy.get("button[type='submit']")
   }
   register(firstName,lastName,email,password,confirmPassword){
       this.firstNameinput.type(firstName);
       this.lastNameinput.type(lastName);
       this.emailInput.type(email);
       this.passwordInput.type(password);
       this.confirmPassword.type(confirmPassword);
       this.checkBox.check();
       this.submitButton.click();
   }
}
export const registerPage = new RegisterPage();