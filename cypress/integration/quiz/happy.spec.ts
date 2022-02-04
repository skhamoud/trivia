describe("Happy path", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
    cy.findByText(/Welcome to the trivia challenge/i).should("be.visible");
    cy.findByRole("link", { name: /begin/i }).click();
  });

  it("loads welcome page fine and start challenge on begin", () => {
    cy.findByLabelText(/loading/i).should("not.exist");
    cy.findByText(/no question/i).should("not.exist");
    cy.findByTestId("question").should("be.visible");
  });

  it("Navigates to next question", () => {
    cy.findByText(/1 out of 10/i).should("be.visible");
    cy.findAllByRole("button", { name: /true/i }).click();
    cy.findAllByRole("button", { name: /false/i }).click();
    cy.findByText(/3 out of 10/i).should("be.visible");
  });

  context("on Results page", () => {
    beforeEach(() => {
      for (let ii = 0; ii < 10; ii++) {
        cy.findAllByRole("button", { name: /true/i }).click();
      }
    });
    it("shows total score and questions + answers", () => {
      // contains from cypress matches better with complex regex when texts
      // spans multiple elements
      cy.contains(/You scored(.|\s)*?\/\s*10/i).should("be.visible");
      // 10 questions and their correct answers
      cy.findAllByText(/correct answer\s+:\s+(true|false)/i).should(
        "have.length",
        10
      );
    });

    it("restarts the game on replay", () => {
      cy.findByRole("link", { name: /replay/i }).click();
      cy.findByText(/Welcome/).should("be.visible");
      cy.findByRole("link", { name: /begin/i }).should("exist");
    });
  });
});
