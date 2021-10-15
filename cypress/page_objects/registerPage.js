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
   get allGalleriesTitle(){
       return cy.get("h1")
   }
   get firstNameErrorMessage(){
       return cy.get('p[class="alert alert-danger"]').first();
   }
   get lastNameErrorMessage(){
    return cy.get('p[class="alert alert-danger"]').last();
   }
   get passwordErrorMessage(){
       return cy.get('p[class="alert alert-danger"]');
   }
   get emailErrorMessage(){
       return cy.get('p[class="alert alert-danger"]');
   }
   get passwordConfirmationErrorMessage(){
       return cy.get('p[class="alert alert-danger"]');
   }
   get shortPasswordErrorMessage(){
       return cy.get('p[class="alert alert-danger"]');
   }
   get noDigitPasswordErrorMessage(){
       return cy.get('p[class="alert alert-danger"]');
   }
   get checkBoxErrorMessage(){
       return cy.get('p[class="alert alert-danger"]');
   }
   get registerTitle(){
       return cy.get("h1");
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
   emptyRegister(){
       this.submitButton.click();
   }

   noCehckboxRegister(firstName,lastName,email,password,confirmPassword){
    this.firstNameinput.type(firstName);
    this.lastNameinput.type(lastName);
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.confirmPassword.type(confirmPassword);
    this.submitButton.click();
   }
}
export const registerPage = new RegisterPage();