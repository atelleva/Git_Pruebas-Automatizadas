describe('F02-Crear tags internos', () => {
  it('F02-E2-Escenario negativo - Crear tag interno con datos incompletos', function () {
    const username = Cypress.env('USERNAME')
    const password = Cypress.env('PASSWORD')
    cy.visit('#/signin')
    cy.get('input[id=identification]').type(username)
    cy.get('input[id=password]').type(`${password}{enter}`)
    cy.screenshot('F02-Inicio de sesión-E2')
    cy.url().should('include', '/dashboard');

    cy.visit('/');
    cy.get('a[href="#/tags/"]').click();
    cy.get('button[data-test-tags-nav="internal"]').click()
    cy.get('a[class="ember-view gh-btn gh-btn-green"]').click();
    cy.get('input[id=tag-name]').type("Prueba")
    cy.get('input[id=tag-slug]').type("Slug prueba")
    cy.get('textarea[id=tag-description]').type("Descripción prueba")
    cy.get('button[data-test-button="save"]').click();
    cy.get('button[data-test-button="save"]')
      .should('contain.text', 'Saved');
    cy.screenshot('F02-Crear tags internos-E2')
  })
});