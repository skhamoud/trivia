describe("Landing on random quiz page", () => {
  it("Shows Error and plays on play", () => {
    cy.visit("localhost:3000/quiz/5");
    cy.findByText(/No question found/i).should("exist");
    cy.findByRole("button", { name: /replay/i }).click();
    cy.findByTestId("question").should("be.visible");
  });
});
