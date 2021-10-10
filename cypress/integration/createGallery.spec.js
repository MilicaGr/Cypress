import {createGallery} from './../page_objects/createGallery'
const faker = require("faker");

describe('Create gallery',()=>{
    let correctEmail = "milicagrubacic9@gmail.com"
    let correctPassword = "nervoznipostar1994"
    let correctUrl = "https://i.ytimg.com/vi/NIjk48KGzzE/maxresdefault.jpg"
    let incorectTitle1 = "T"
    let incorectTitle2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas dolor quis semper fermentum. Sed justo diam, faucibus non consequat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam egestas dolor quis semper fermentum. Etiam egestas"
    let incorectDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat facilisis tortor eu pretium. Quisque eget pulvinar erat. Nam quis pulvinar metus. Nam ac ipsum nec turpis laoreet rhoncus. Nam ac nibh risus. Phasellus non magna ullamcorper vei.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat facilisis tortor eu pretium. Quisque eget pulvinar erat. Nam quis pulvinar metus. Nam ac ipsum nec turpis laoreet rhoncus. Nam ac nibh risus. Phasellus non magna ullamcorper vei.Phasellus non magna ullamcorper vei.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat facilisis tortor eu pretium. Quisque eget pulvinar erat. Nam quis pulvinar metus. Nam ac ipsum nec turpis laoreet rhoncus. Nam ac nibh risus. Phasellus non magna ullamcorper vei.Phasellus non magna ullamcorper vei.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat facilisis tortor eu pretium. Quisque eget pulvinar erat. Nam quis pulvinar metus..."
    let incorectUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwdOROf_GePCibtMqpzxktsJChkIwzkCZAhw&usqp=CAU"
    let userData = {
        randomTitle: faker.name.findName(),
        randomDescripion: faker.name.findName()
      
    }
    beforeEach('visit link',()=>{
        cy.visit("/");
        })
        
    it('successfull create gallery',()=>{
        createGallery.login(correctEmail,correctPassword);
        createGallery.createGalleryButton.click();
        createGallery.create(userData.randomTitle,userData.randomDescripion,correctUrl);
        createGallery.imageUrl.should('be.visible'); 
        createGallery.galleriesLength.should('have.length', 10);
        
        
    })
    it('create with all empty fields',()=>{
        createGallery.login(correctEmail,correctPassword);
        createGallery.createGalleryButton.click();
        cy.url().should('contains', 'gallery-app.vivifyideas.com/create');
        
        
    })
    it('create with incorrect title(1character)',()=>{
        createGallery.login(correctEmail,correctPassword);
        createGallery.createGalleryButton.click();
        createGallery.create(incorectTitle1,userData.randomDescripion,correctUrl);
        cy.url().should('contains', 'gallery-app.vivifyideas.com/create');
        cy.contains('The title must be at least 2 characters.');
    })
    it('create with incorrect title(256characters)',()=>{
        createGallery.login(correctEmail,correctPassword);
        createGallery.createGalleryButton.click();
        createGallery.create(incorectTitle2,userData.randomDescripion,correctUrl);
        cy.url().should('contains', 'gallery-app.vivifyideas.com/create');
        cy.contains('The title may not be greater than 255 characters.');
    })
    it('create with incorrect description(1001character))',()=>{
        createGallery.login(correctEmail,correctPassword);
        createGallery.createGalleryButton.click();
        createGallery.create(userData.randomTitle,incorectDescription, correctUrl);
        cy.url().should('contains', 'gallery-app.vivifyideas.com/create');
        cy.contains('The description may not be greater than 1000 characters.');
    })
    it('create with incorrect url',()=>{
        createGallery.login(correctEmail,correctPassword);
        createGallery.createGalleryButton.click();
        createGallery.create(userData.randomTitle,userData.randomDescripion, incorectUrl);
        cy.url().should('contains', 'gallery-app.vivifyideas.com/create');
        cy.contains('Wrong format of image');

        
    })


    })
