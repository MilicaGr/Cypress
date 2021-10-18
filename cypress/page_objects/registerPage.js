export default class RegisterPage {
   
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
   getInputField(id) {
       return cy.get(`#${id}`);
   }



   register(firstName,lastName,email,password,confirmPassword){
       this.getInputField('first-name').type(firstName);
       this.getInputField('last-name').type(lastName);
       this.getInputField('email').type(email);
       this.getInputField('password').type(password);
       this.getInputField('password-confirmation').type(confirmPassword);
       this.checkBox.check();
       this.submitButton.click();
   }
   emptyRegister(){
       this.submitButton.click();
   }

   noCehckboxRegister(firstName,lastName,email,password,confirmPassword){
    this.getInputField('first-name').type(firstName);
    this.getInputField('last-name').type(lastName);
    this.getInputField('email').type(email);
    this.getInputField('password').type(password);
    this.getInputField('password-confirmation').type(confirmPassword);
    this.submitButton.click();
   }
}
export const registerPage = new RegisterPage();