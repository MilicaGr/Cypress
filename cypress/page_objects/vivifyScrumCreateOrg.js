export default class Organization {

   get myOrganizationBox(){
       return cy.get('.vs-c-my-organization--add-new')
   }

   get organizationNameInputField(){
       return cy.get('input[name="name"]');
   }

   get nextButton(){
       return cy.get('[name="next_btn"]')
   }

   get createButton(){
       return cy.get('[name="next_btn"]')
   }

   get okButtonCreate(){
       return cy.get('.vs-c-modal--features-button').contains('ok')
   }

   get archiveButton(){
       return cy.get('span[title="Archive Organization"]').eq(4);
   }

   get deletedElement(){
       return cy.get ('.vs-c-my-organization__title').contains('za brisanje');
   }

   get okButton(){
       return cy.get('[name="save-btn"]')
   }

   get deleteOrganizaton(){
       return cy.get('.vs-c-icon--remove')
   }

   get confirmPass(){
       return cy.get('input[autocomplete="off"]');
   }

   get confirmButton(){
       return cy.get('[name="save-btn"]')
   }

   get myOrganizationTitle(){
       return cy.get('.vs-c-my-organization__title').eq(4);
   }

   createOrganization(organizationName) {
       this.myOrganizationBox.click();
       this.organizationNameInputField.type(organizationName);
       this.nextButton.click();
       this.createButton.click();
   }

   deleteOrganization(password){
       this.archiveButton.click({force: true});
       this.okButton.click();
       this.deleteOrganizaton.click({force: true});
       this.confirmPass.type(password);
       this.confirmButton.click();
   }

}

export const organization = new Organization();