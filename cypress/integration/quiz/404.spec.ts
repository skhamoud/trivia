describe("Landing uknown page", () => {
  it("Shows 404 and link to home page", () => {
    cy.visit("localhost:3000/unknown");
    cy.findByText(/Nothing here/i).should("exist");
    cy.findByRole("link", { name: /home/i }).click();
    cy.findByText(/welcome/i).should("be.visible");
  });
});
