describe("Various examples", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });

  it("multi page testing ", () => {
    cy.getDataTest("nav-Why-Cypress").click();
    cy.location("pathname").should("equal", "/");

    cy.getDataTest("nav-Overview").click();
    cy.location("pathname").should("equal", "/overview");

    cy.getDataTest("nav-Fundamentals").click();
    cy.location("pathname").should("equal", "/fundamentals");

    cy.getDataTest("nav-Forms").click();
    cy.location("pathname").should("equal", "/forms");

    cy.getDataTest("nav-Component").click();
    cy.location("pathname").should("equal", "/component");
  });

  it("intercepts", () => {
    cy.intercept('POST', 'http://localhost:3000/examples', {
      fixture:"example.json"
    })
  });


  it.only('grudges',()=>{
    cy.contains(/add some grudges/i);

    cy.getDataTest("grudge-title").should("have.text","Add Some Grudges")

    cy.getDataTest("clear-button").should("not.exist")


    cy.getDataTest("grudge-list").within(()=>{
      cy.get("li").should("have.length",0)
    })


    cy.getDataTest("grudge-input").within(()=>{
      cy.get("input").type("some grudge")
    })
    cy.getDataTest("add-grudge-button").click()


    cy.getDataTest("grudge-title").should("have.text","Grudges")
    
    cy.getDataTest("grudge-list").within(()=>{
      cy.get("li").should("have.length",1)
      cy.get("li").its(0).within(()=>{
        cy.get("button").click();
      })
    })
    
    
    cy.getDataTest("grudge-input").within(()=>{
      cy.get("input").type("some grudge")
    })
    cy.getDataTest("add-grudge-button").click()
    
    
    
    cy.getDataTest("grudge-list").within(()=>{
      cy.get("li").should("have.length",1);
      cy.get("li").its(0).should("contains.text","some grudge");
    })

    cy.getDataTest("clear-button").click();



  });

});
