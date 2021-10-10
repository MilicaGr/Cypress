export default class AllGalleries{

    get galleriesLength(){
        return cy.get('div[class="cell"]')
    }
    get galleryAppButton(){
        return cy.get('.navbar-brand')
    }
    get allGalleriesButton(){
        return cy.get(':nth-child(1) > .nav-link')
    }
    get createGalleryButton(){
        return cy.get("a[href='/create']")
    }
    get logoutButton () {
        return cy.get("a[role='button ']")
    }
    get searchInputField(){
        return cy.get('input[type="text"]')
    }
    get filterButton(){
        return cy.get('button[type="button"]')
    }
    get loadMoreButton(){
        return cy.get(':nth-child(3) > :nth-child(2) > .btn')
    }
    /// LOGIN
    get submitButton() {
        return cy.get('button[type="submit"]')
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
    login(email,password) {
        this.loginButton.click()
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.submitButton.click();
    }
}
export const allGalleries = new AllGalleries();