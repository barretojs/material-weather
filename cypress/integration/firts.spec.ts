describe("works", () => {
  it("should access localhost:3000 and find the app", () => {
    cy.visit("localhost:3000");
    cy.get("#root").should("be.visible").contains("React Weather");
  });
});

export {};
