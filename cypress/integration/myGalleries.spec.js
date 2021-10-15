import { myGalleries } from './../page_objects/myGalleries';
import { registerPage } from '../page_objects/registerPage';
import { loginPage } from './../page_objects/loginPage';
const faker = require("faker");

describe('Create gallery and delete', () => {
    let correctEmail = "milicagrubacic9@gmail.com"
    let correctPassword = "nervoznipostar1994"
    let correctUrl = "https://i.ytimg.com/vi/NIjk48KGzzE/maxresdefault.jpg"
    let correctUrl2 = "https://static.kupindoslike.com/brod-slike-za-zid-PREPEPO_slika_O_71448273.jpg" 
    let incorectTitle1 = "T"
    let incorectTitle2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas dolor quis semper fermentum. Sed justo diam, faucibus non consequat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas dolor quis semper fermentum. Etiam egestas"
    let incorectDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat facilisis tortor eu pretium. Quisque eget pulvinar erat. Nam quis pulvinar metus. Nam ac ipsum nec turpis laoreet rhoncus. Nam ac nibh risus. Phasellus non magna ullamcorper vei.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat facilisis tortor eu pretium. Quisque eget pulvinar erat. Nam quis pulvinar metus. Nam ac ipsum nec turpis laoreet rhoncus. Nam ac nibh risus. Phasellus non magna ullamcorper vei.Phasellus non magna ullamcorper vei.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat facilisis tortor eu pretium. Quisque eget pulvinar erat. Nam quis pulvinar metus. Nam ac ipsum nec turpis laoreet rhoncus. Nam ac nibh risus. Phasellus non magna ullamcorper vei.Phasellus non magna ullamcorper vei.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat facilisis tortor eu pretium. Quisque eget pulvinar erat. Nam quis pulvinar metus..."
    let incorectUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdOROf_GePCibtMqpzxktsJChkIwzkCZAhw&usqp=CAU"
    let userData = {
        randomTitle: faker.name.findName(),
        randomDescripion: faker.name.findName()

    }
    beforeEach('login', () => {
        cy.loginViaBackend(Cypress.env("validEmailAddress"),Cypress.env("validPassword"));
        cy.visit('/create');
        loginPage.logoutButton.should('be.visible');
        
    });

    it('create via BE',()=>{
        cy.createGalleryViaBackend("Titleee", "descr", "https://i.ytimg.com/vi/NIjk48KGzzE/maxresdefault.jpg").then((responseObject) => {
            let id = responseObject.body.id;
            console.log(id)
            cy.writeFile('galleryId.json', id.toString());
        })
    })
    it.only('test delete gallery via BE', () => {
        cy.readFile('./galleryId.json').then((file) => {
            let galleryId = file;
            cy.deleteGalleryViaBackend(galleryId);
        });
    })


    it('successfull create gallery', () => {
        cy.intercept(
            "POST",
            "https://gallery-api.vivifyideas.com/api/galleries",
            (req)=>{}
        ).as("create gallery")
        myGalleries.create(userData.randomTitle, userData.randomDescripion, correctUrl);
        cy.wait('@create gallery').then((interception)=>{
            expect(interception.response.statusCode).eq(201);
            expect(interception.response.body.user_id).eq(527);
        myGalleries.imageUrl.should('be.visible');
        myGalleries.galleriesLength.should('have.length', 10);
        registerPage.allGalleriesTitle.should('be.visible');
    })
})

    it('create with all empty fields', () => {
        myGalleries.createGalleryButton.click();
        cy.url().should('contains', 'gallery-app.vivifyideas.com/create');
        myGalleries.createGalleryTitle.should('be.visible');
        myGalleries.createGalleryTitle.should('have.text','Create Gallery');
    })

    it('create with incorrect title(1character)', () => {
        cy.intercept(
            "POST",
            "https://gallery-api.vivifyideas.com/api/galleries",
            (req)=>{}
        ).as("1character title")
        myGalleries.create(incorectTitle1, userData.randomDescripion, correctUrl);
        cy.wait('@1character title').then((interception)=>{
            expect(interception.response.statusCode).eq(422);
            expect(interception.response.body.message).eq('The given data was invalid.');
            myGalleries.shortTitleErrorMessage.should('be.visible');
            myGalleries.shortTitleErrorMessage.should('have.text','The title must be at least 2 characters.');
            myGalleries.createGalleryTitle.should('be.visible');
            myGalleries.createGalleryTitle.should('have.text','Create Gallery');  
    })
    })

    it('create with incorrect title(256characters)', () => {
        cy.intercept(
            "POST",
            "https://gallery-api.vivifyideas.com/api/galleries",
            (req)=>{}
        ).as("256character title")
        myGalleries.create(incorectTitle2, userData.randomDescripion, correctUrl);
        cy.wait('@256character title').then((interception)=>{
            expect(interception.response.statusCode).eq(422);
            expect(interception.response.body.message).eq('The given data was invalid.');
            myGalleries.longTitleErrorMessage.should('be.visible');
            myGalleries.longTitleErrorMessage.should('have.text', 'The title may not be greater than 255 characters.');
            myGalleries.createGalleryTitle.should('be.visible');
            myGalleries.createGalleryTitle.should('have.text','Create Gallery');
        
    })
})

    it('create with incorrect description(1001character))', () => {
        cy.intercept(
            "POST",
            "https://gallery-api.vivifyideas.com/api/galleries",
            (req)=>{}
        ).as("long description")
        myGalleries.create(userData.randomTitle, incorectDescription, correctUrl);
        cy.wait('@long description').then((interception)=>{
            expect(interception.response.statusCode).eq(422);
            expect(interception.response.body.message).eq('The given data was invalid.');
            myGalleries.longDescriptionErrorMessage.should('be.visible');
            myGalleries.longDescriptionErrorMessage.should('have.text', 'The description may not be greater than 1000 characters.');
            myGalleries.createGalleryTitle.should('be.visible');
            myGalleries.createGalleryTitle.should('have.text','Create Gallery');
        })
    })

    it('create with incorrect url', () => {
        cy.intercept(
            "POST",
            "https://gallery-api.vivifyideas.com/api/galleries",
            (req)=>{}
        ).as("invalid url")
        myGalleries.create(userData.randomTitle, userData.randomDescripion, incorectUrl);
        cy.wait('@invalid url').then((interception)=>{
            expect(interception.response.statusCode).eq(422);
            expect(interception.response.body.message).eq('The given data was invalid.');
            myGalleries.invalidUrlErrorMessage.should('be.visible');
            myGalleries.invalidUrlErrorMessage.should('have.text','Wrong format of image');
        })
    })

    it('create with 2 url',()=>{
        cy.intercept(
            "POST",
            "https://gallery-api.vivifyideas.com/api/galleries",
            (req)=>{}
        ).as("2 images")
        myGalleries.create2Url(userData.randomTitle,userData.randomDescripion,correctUrl,correctUrl2);
        cy.wait('@2 images').then((interception)=>{
            expect(interception.response.statusCode).eq(201);
            
            
        })
    })
     
    it('check 2 images',()=>{
        myGalleries.checkCreate2Url(userData.randomTitle,userData.randomDescripion,correctUrl,correctUrl2);
        myGalleries.indicator1.should('be.visible');
        myGalleries.indicator2.should('be.visible');
    })
       

    it('check down button',()=>{
        myGalleries.checkUpbutton(userData.randomTitle,userData.randomDescripion,correctUrl,correctUrl2);
        myGalleries.images.should('have.value', correctUrl2);
    })

    //KOD DELETE GALLERY NE PRIKAZUJE DELETE BUTTON KADA POKRENEM TEST PA NISAM NISTA MOGLA DA URADIM
    


})
