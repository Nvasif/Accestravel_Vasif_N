///<reference types = "Cypress"/>

const baseUrl = 'https://www.accesstravel.com/en-US';
const homePageUrl = baseUrl + '/Home/Index';


describe('Main Menu Sanity Test', () => {

  beforeEach(() => {
    cy.visit(homePageUrl);
  });

  after(() => {
    cy.log("after all")
  })

  afterEach(() => {
    cy.log("after all")
  })



  it('Verify the main page has the following categories and menu options', () => {
    cy.get('.hotels').should("be.visible");
    cy.get('.guides').should("be.visible");
    cy.get('.js-list-tours').should("be.visible");
    cy.get('.attraction-link').should("be.visible");
  }); 

   it('Verify that clicking each one of  Hotels, Guides, Tours, and Things to do will navigate to the correct page', () => {
    cy.get('.hotels').click();
    cy.visit(homePageUrl);
    cy.get('.guides').click();
    cy.visit(homePageUrl);
    cy.get('.js-list-tours').click();
    cy.visit(homePageUrl);
    cy.get('.attraction-link').click();
  });

  it('Verify click on Login and Signup will open dedicated pages', () => {
    cy.visit(homePageUrl);
    cy.get('#burger > :nth-child(2)').click();
    cy.get(':nth-child(3) > :nth-child(1) > a').click();
    cy.visit(homePageUrl);
    cy.get('#burger > :nth-child(2)').click();
    cy.get('.mobile-menu > :nth-child(3) > :nth-child(2) > a').click();
    
  });



});