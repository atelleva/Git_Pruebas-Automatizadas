describe('F02-Crear tags internos', () => {
  it('F02-E3-Escenario negativo - Consultar tags internos creados', function () {
    const username = Cypress.env('USERNAME')
    const password = Cypress.env('PASSWORD')
    cy.visit('#/signin')
    cy.get('input[id=identification]').type(username)
    cy.get('input[id=password]').type(`${password}{enter}`)
    cy.screenshot('F02-Inicio de sesión-E3')
    cy.url().should('include', '/dashboard');

    cy.visit('/');
    cy.get('a[href="#/tags/"]').click();
    cy.get('button[data-test-tags-nav="internal"]').click()
    cy.get('a[class="ember-view gh-btn gh-btn-green"]')
      .should('not.contain.text', 'Create a new tag');
    cy.screenshot('F02-Crear tags internos-E3')
  });
});