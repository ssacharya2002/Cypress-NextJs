describe("Form test",()=>{
    beforeEach(()=>{
        cy.visit("/forms");
    })

    it("Test subscribe form ",()=>{
        cy.contains(/testing forms/i);

        cy.getDataTest("subscribe-form").find("input").as('subscribe-input');


        cy.get('@subscribe-input').type("ssacharya@gmail.com");

        cy.contains(/Successfully subbed: ssacharya@gmail.com!/).should("not.exist");
        
        cy.getDataTest("subscribe-button").click();

        cy.contains(/Successfully subbed: ssacharya@gmail.com!/).should("exist");
        
        cy.wait(3000);
        cy.contains(/Successfully subbed: ssacharya@gmail.com!/).should("not.exist");
        
        
        cy.get("@subscribe-input").type("askdnfasdn@df.io")
        
        cy.contains(/Successfully subbed: askdnfasdn@df.io/).should("not.exist");
        
        cy.getDataTest("subscribe-button").click();
        cy.contains(/Successfully subbed: askdnfasdn@df.io/).should("not.exist");
        
        cy.contains(/Invalid email: !/i).should("not.exist")
        cy.getDataTest("subscribe-button").click();
        // cy.contains(/Invalid email: !/i).should("exist")
        cy.contains(/Invalid email:!/i).should("not.exist")



        

    })
})