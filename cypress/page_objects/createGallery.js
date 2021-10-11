export default class CreateGallery{
    get submitButton() {
        return cy.get('button[type="submit"]')

    }
    get logoutButton () {
        return cy.get("a[role='button ']")
    }
    
    get loginButton(){
        return cy.get('a[href="/login"]')
    }
    get emailInput(){
        return cy.get('#email')

    }
    get passwordInput() {
        return cy.get('#password')
    }
    get createGalleryButton(){
        return cy.get("a[href='/create']")
    }
    get title(){
        return cy.get('#title')
    }
    get description() {
        return cy.get('#description')
    }
    get images(){
        return cy.get('input[type="url"]')
    }
    get submitButtonCreate() {
        return cy.get('form > :nth-child(4)')
    }
    get imageUrl(){
        return cy.get('img[src="https://i.ytimg.com/vi/NIjk48KGzzE/maxresdefault.jpg"]')
    }
    get galleriesLength(){
        return cy.get('div[class="cell"]')
    }
    create(title,description,images) {
        this.title.type(title);
        this.description.type(description);
        this.images.type(images);
        this.submitButtonCreate.click();
    }
}
export const createGallery = new CreateGallery();
