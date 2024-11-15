describe('F01-Acceder al blog con contraseña', () => {
  it('F01-E3-Escenario Negativo - Acceder al sitio con contraseña incorrecta', function () {
    const username = Cypress.env('USERNAME')
    const password = Cypress.env('PASSWORD')
    cy.visit('#/signin')
    cy.get('input[id=identification]').type(username)
    cy.get('input[id=password]').type(`${password}{enter}`)
    cy.screenshot('F01-Inicio de sesión-E3')
    cy.url().should('include', '/dashboard');

    cy.visit('/');
    cy.visit('http://localhost:2368/private/?r=%2F');
    cy.get('input[type="password"]').click();
    cy.get('input')
      .type('TEST.123{enter}')
    cy.url().should('include', '/private');
    cy.screenshot('F01-Acceder al sitio con contraseña-E3')
  })
});