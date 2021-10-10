import { internet } from "faker";
import { allGalleries } from "./../page_objects/allGalleries";

describe('all galleries',()=>{
    let correctEmail = "milicagrubacic9@gmail.com"
    let correctPassword = "nervoznipostar1994"

    beforeEach('visit link',()=>{
        cy.visit("/");
        })

    it('all galleries pagination',()=>{
        allGalleries.login(correctEmail,correctPassword);
        allGalleries.galleriesLength.should('have.length', 10);
        allGalleries.galleryAppButton.should('be.visible');
        allGalleries.allGalleriesButton.should('be.visible');
        allGalleries.createGalleryButton.should('be.visible');
        allGalleries.logoutButton.should('be.visible');
        allGalleries.searchInputField.should('be.visible');
        allGalleries.filterButton.should('be.visible');
        allGalleries.loadMoreButton.should('exist');

    })
})