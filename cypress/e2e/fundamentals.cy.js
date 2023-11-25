describe('Fundamentals test', () => {

  beforeEach(()=>{
    cy.visit('/fundamentals');
  })

  it('Contains correct header text', () => {
    // cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i),
    cy.getDataTest("fundamentals-header").should('contain.text',"Testing Fundamentals")
  })

  it('Accordion works correctly', () => {
    cy.contains(/Your tests will exist in a describe block. This block takes two arguments. The first is a description of what you are testing./i).should("not.be.visible")


    cy.get('[data-test="accordion-item1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block. This block takes two arguments. The first is a description of what you are testing./i).should("be.visible")

    cy.get('[data-test="accordion-item1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block. This block takes two arguments. The first is a description of what you are testing./i).should("not.be.visible")
  })
}) 