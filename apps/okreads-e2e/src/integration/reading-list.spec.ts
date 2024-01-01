describe('When: I use the reading list feature', () => {
  beforeEach(() => {
    cy.startAt('/');
  });

  it('Then: I should see my reading list', () => {
    cy.get('[data-testing="toggle-reading-list"]').click();

    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );
  });

  // new test case to check undo action for adding book
  it('Then: I can undo the action for adding book', () => {
    cy.get('input[type="search"]').type('javascript');
    cy.get('form').submit();
    cy.get('[data-testing="want-to-read-button"]').click({ multiple: true, force: true });

    cy.contains('Undo').click({ multiple: true });
    cy.get('[data-testing="want-to-read-button"]').should('be.enabled');
  });


  // new test case to check undo action for removing book
  it('Then: I can undo the action for removing book', () => {
    cy.get('input[type="search"]').type('javascript');
    cy.get('form').submit();
    cy.get('[data-testing="want-to-read-button"]').click({ multiple: true, force: true });

    cy.get('[data-testing="toggle-reading-list"]').click();
    cy.get('[data-testing="reading-list-container"]').should(
      'contain.text',
      'My Reading List'
    );

    cy.get('[data-testing="remove-book-button"]').click({ multiple: true ,force: true});
    
    cy.get("#cdk-overlay-1").contains('Undo').click({ multiple: true });
    cy.get('[data-testing="remove-book-button"]').should('exist');

  });
});
