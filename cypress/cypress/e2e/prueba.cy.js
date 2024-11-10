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
  cy.screenshot('Inicio de sesión')

  //F01-Acceder al sitio con contraseña
  //E1-Escenario positivo - Configurar contraseña
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
  cy.screenshot('F01-Acceder al sitio con contraseña-E1.1.png')
  cy.get('div[data-testid="locksite"]')
    .find('span')
    .contains('Save')
    .click()
  cy.screenshot('F01-Acceder al sitio con contraseña-E1.2.png')

  //F01-Acceder al sitio con contraseña
  //E2-Escenario positivo - Acceder al sitio con contraseña correcta
  cy.visit('http://localhost:2368/private/?r=%2F');
  cy.get('input[type="password"]').click();
  cy.get('input')
    .type('Prueba.123{enter}')
  cy.screenshot('F01-Acceder al sitio con contraseña-E2')

  //F01-Acceder al sitio con contraseña
  //E3-Escenario Negativo - Acceder al sitio con contraseña incorrecta
  cy.visit('/');
  cy.visit('http://localhost:2368/private/?r=%2F');
  cy.get('input[type="password"]').click();
  cy.get('input')
    .type('TEST.123{enter}')
  cy.screenshot('F01-Acceder al sitio con contraseña-E3')

  //F02-Crear tags internos - Escenario 1
  //E1-Escenario positivo - Crear tag interno con datos completos
  cy.visit('/');
  cy.get('a[href="#/tags/"]').click();
  cy.get('button[data-test-tags-nav="internal"]').click()
  cy.get('a[class="ember-view gh-btn gh-btn-green"]').click();
  cy.get('input[id=tag-name]').type("Prueba")
  cy.get('input[id=tag-slug]').type("Slug prueba")
  cy.get('textarea[id=tag-description]').type("Descripción prueba")
  cy.get('button[data-test-button="save"]').click();
  cy.screenshot('F02-Crear tags internos-E1')

  //F02-Crear tags internos - Escenario 2
  //E2-Escenario negativo - Crear tag interno con datos incompletos
  cy.visit('/');
  cy.get('a[href="#/tags/"]').click();
  cy.get('button[data-test-tags-nav="internal"]').click()
  cy.get('a[class="ember-view gh-btn gh-btn-green"]').click();
  cy.get('input[id=tag-name]').type("Prueba")
  cy.get('input[id=tag-slug]').type("Slug prueba")
  cy.get('textarea[id=tag-description]').type("Descripción prueba")
  cy.get('button[data-test-button="save"]').click();
  cy.screenshot('F02-Crear tags internos-E2')

  //F02-Crear tags internos - Escenario 3
  //E3-Escenario negativo - Consultar tags internos creados
  cy.visit('/');
  cy.get('a[href="#/tags/"]').click();
  cy.get('button[data-test-tags-nav="internal"]').click()
  cy.screenshot('F02-Crear tags internos-E3')
})