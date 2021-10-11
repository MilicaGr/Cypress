import{registerPage} from './../page_objects/registerPage';


describe('register page',()=>{
    let firstName="imeime";
    let lastName="prezimeprezime";
    let email="randommejl@gmatil.com";
    let password="sifrasifra88887777";
    let confirmPassword="sifrasifra88887777";

    beforeEach('visit link',()=>{
        cy.visit("/register");
        })

    
    
    it('register',()=>{
        registerPage.register(firstName,lastName,email,password,confirmPassword);

    
    })
})