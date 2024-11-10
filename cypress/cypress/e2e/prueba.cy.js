describe('Pagina inicial', () => {
  it('passes', () => {
    cy.visit('/')
  })
})

it('Inicio de sesion', function () {
  //Inicio de sesión
  const username = Cypress.env('USERNAME')
  const password = Cypress.env('PASSWORD')
  cy.visit('#/signin')
  cy.get('input[id=identification]').type(username)
  cy.get('input[id=password]').type(`${password}{enter}`)
  cy.screenshot('F01-Acceder al sitio con contraseña.png')


  //F01-Acceder al sitio con contraseña

  //F02-Crear tags internos - Escenario 1
  //Escenario positivo - Crear tag interno con datos completos
  cy.get('a[href="#/tags/"]').click();
  cy.get('button[data-test-tags-nav="internal"]').click()
  cy.get('a[class="ember-view gh-btn gh-btn-green"]').click();
  cy.get('input[id=tag-name]').type("Prueba")
  cy.get('input[id=tag-slug]').type("Slug prueba")
  cy.get('textarea[id=tag-description]').type("Descripción prueba")
  cy.get('button[data-test-button="save"]').click();
  cy.screenshot('F02-Acceder al sitio con contraseña-E1.png')

  //F02-Crear tags internos - Escenario 2
  //Escenario negativo - Crear tag interno con datos incompletos
  cy.visit('/');
  cy.get('a[href="#/tags/"]').click();
  cy.get('button[data-test-tags-nav="internal"]').click()
  cy.get('a[class="ember-view gh-btn gh-btn-green"]').click();
  cy.get('input[id=tag-name]').type("Prueba")
  cy.get('input[id=tag-slug]').type("Slug prueba")
  cy.get('textarea[id=tag-description]').type("Descripción prueba")
  cy.get('button[data-test-button="save"]').click();
  cy.screenshot('F02-Acceder al sitio con contraseña-E2.png')

  //F02-Crear tags internos - Escenario 3
  //Escenario negativo - Consultar tags internos creados
  cy.visit('/');
  cy.get('a[href="#/tags/"]').click();
  cy.get('button[data-test-tags-nav="internal"]').click()
  cy.screenshot('F02-Acceder al sitio con contraseña-E3.png')
})