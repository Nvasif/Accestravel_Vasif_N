///<reference types = "Cypress"/>

describe('Hotels Page Tests', () => {
    const hotelsPageUrl = 'https://www.accesstravel.com/en-US/Hotel/List';
    const ChildrenNum = '[name="Filter.ChildrenNum"]'
    const checkin = '[name="Filter.CheckIn"]'
    const checkout ='[name="Filter.CheckOut"]'
    

    beforeEach(() => {
        cy.visit(hotelsPageUrl);
    });

     it('Positive test: number of children - choosing a valid number of children will open a new filter of ages', () => {
        cy.get(ChildrenNum).type('{backspace}').type("2").should('have.value', '2', {force: true});
        cy.get('.hotels-wrap').click();
        cy.get('.row.children-age').should('be.visible');
        cy.get('input[name="Filter.ChildrensAge[0]"]').clear().type('5', {force: true});
        cy.get('input[name="Filter.ChildrensAge[1]"]').clear().type('8', {force: true});


    }); 

     it('Negative Test - dates: invalid dates will trigger an error', () => {
        cy.get('#Filter_DestinationId').select("Jerusalem")
        cy.get(checkin).clear().type('2024-12-01');
        cy.get(checkout).clear().type('2021-11-30');
        cy.get('.form-centered > .btn').click();
        cy.get('.invalid-feedback.d-block').should('be.visible');
      }); 

      it('Negative Test - adults: invalid number of adults will trigger an error', () => {
        cy.get('#Filter_DestinationId').select("Jerusalem")
        cy.get(checkin).clear().type('2024-12-01');
        cy.get(checkout).clear().type('2024-12-30');
        cy.get('#Filter_AdultNum').clear().type('-1');
        cy.get('.form-centered > .btn').click();
        cy.get('.invalid-feedback.d-block').should('be.visible');
      }); 

      it('Negative Test - children: invalid number of children will trigger an error', () => {
        cy.get(ChildrenNum).type('{backspace}');
        cy.get('.form-centered > .btn').click();
        cy.get('.invalid-feedback.d-block').should('be.visible');
      });

 
});
