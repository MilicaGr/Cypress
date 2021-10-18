export default class MyGalleries{
   
    get createGalleryButton(){
        return cy.get("a[href='/create']")
    }
    get createGalleryTitle(){
        return cy.get("h1");
    }
   
    get images(){
        return cy.get('input[type="url"]').eq(0);
    }
    get images2(){
        return cy.get('input[type="url"]').eq(1);
    }
    get submitButtonCreate() {
        return cy.get('button[type="submit"]').eq(0);
    }
    get imageUrl(){
        return cy.get('img[src="https://i.ytimg.com/vi/NIjk48KGzzE/maxresdefault.jpg"]')
    }
    get addImageButton(){
        return cy.get('button[type="button"]').eq(2)
    }
    get downButton(){
        return cy.get('button[type="button"]').eq(4);
    }
    get indicator1(){
        return cy.get('#carousel___BV_indicator_1_');
    }
    get indicator2(){
        return cy.get('#carousel___BV_indicator_2_');
    }
    get galleriesLength(){
        return cy.get('div[class="cell"]')
    }
    get galleryName(){
        return cy.get('a[class="box-title"]').first()
    }
    get deleteButton(){
        return cy.get('button[class="btn btn-custom"]').first()
    }
    get shortTitleErrorMessage(){
        return cy.get('p[class="alert alert-danger"]');
    }
    get longTitleErrorMessage(){
        return cy.get('p[class="alert alert-danger"]');
    }
    get longDescriptionErrorMessage(){
        return cy.get('p[class="alert alert-danger"]');
    }
    get invalidUrlErrorMessage(){
        return cy.get('p[class="alert alert-danger"]');
    }
    get editButton(){
        return cy.get('a[type="button"]');
    }
    get myGalleries(){
        return cy.get('a[href="/my-galleries"]');
    }
    getInputField(id) {
        return cy.get(`#${id}`)
    }

    create(title,description,images) {
        this.getInputField('title').type(title);
        this.getInputField('description').type(description);
        this.images.type(images);
        this.submitButtonCreate.click();
    }

    create2Url(title,description,images,images2){
        this.getInputField('title').type(title);
        this.getInputField('description').type(description);
        this.images.type(images);
        this.addImageButton.click();
        this.images2.type(images2);
        this.submitButtonCreate.click();

    }

    checkCreate2Url(title,description,images,images2){
        this.getInputField('title').type(title);
        this.getInputField('description').type(description);
        this.images.type(images);
        this.addImageButton.click();
        this.images2.type(images2);
        this.submitButtonCreate.click();
        this.galleryName.click();

    }
    checkUpbutton(title,description,images,images2){
        this.getInputField('title').type(title);
        this.getInputField('description').type(description);
        this.images.type(images);
        this.addImageButton.click();
        this.images2.type(images2);
        this.downButton.click();
        this.submitButtonCreate.click();
       
    }
    
    
   
    
}
export const myGalleries = new MyGalleries();
