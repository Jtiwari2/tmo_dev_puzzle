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

  // new test case to mark a book as finished
  it('Then: I should see book as finished', () => {
    cy.get('input[type="search"]').type('javascript');
    cy.get('form').submit();
    cy.get('[data-testing="want-to-read-button"]').click({ multiple: true ,force: true});

    cy.get('[data-testing="toggle-reading-list"]').click({ multiple: true })

    cy.get('[data-testing="mark-as-read"]').click({ multiple: true,force: true });

    cy.get('[data-testing="finished-book-icon"]').should('exist');

    cy.get('[data-testing="reading-list-container"]').first().as('close').click({ multiple: true });

    cy.get('[data-testing="want-to-read-button"]').contains('Finished',{force: true });
  });

});
