describe('F01-Acceder al blog con contraseña', () => {
  it('F01-E1-Escenario positivo - Configurar contraseña', function () {
    const username = Cypress.env('USERNAME')
    const password = Cypress.env('PASSWORD')
    cy.visit('#/signin')
    cy.get('input[id=identification]').type(username)
    cy.get('input[id=password]').type(`${password}{enter}`)
    cy.screenshot('F01-Inicio de sesión-E1')
    cy.url().should('include', '/dashboard');

    cy.visit('/');
    cy.get('a[href="#/settings/"]').click();
    cy.get('a[id="locksite"]').click();
    cy.get('div[data-testid="locksite"]')
      .find('button')
      .click()
    cy.get('button[data-state="unchecked"]').click();
    cy.get('div[data-testid="locksite"]')
      .find('input')
      .clear()
      .type("Prueba.123")
    cy.screenshot('F01-Acceder al sitio con contraseña-E1.1')
    cy.get('div[data-testid="locksite"]')
      .find('span')
      .contains('Save')
      .click()
    cy.get('div[data-testid="locksite"]')
      .should('contain.text', 'Your site is password protected');
    cy.screenshot('F01-Acceder al sitio con contraseña-E1.2')
  })
});