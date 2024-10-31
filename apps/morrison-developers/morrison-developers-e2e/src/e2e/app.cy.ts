describe('morrison-developers-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should load the homepage successfully', () => {
    // Check if the page contains some basic text or elements that should always be there
    cy.get('body').should('be.visible');
  });
});
