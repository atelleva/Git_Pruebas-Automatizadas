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

  it('F01-E2-Escenario positivo - Acceder al sitio con contraseña correcta', function () {
    const username = Cypress.env('USERNAME')
    const password = Cypress.env('PASSWORD')
    cy.visit('#/signin')
    cy.get('input[id=identification]').type(username)
    cy.get('input[id=password]').type(`${password}{enter}`)
    cy.screenshot('F01-Inicio de sesión-E2')
    cy.url().should('include', '/dashboard');

    cy.visit('http://localhost:2368/private/?r=%2F');
    cy.get('input[type="password"]').click();
    cy.get('input')
      .type('Prueba.123{enter}')
    cy.url().should('not.include', '/private');
    cy.screenshot('F01-Acceder al sitio con contraseña-E2')
  })

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


describe('F02-Crear tags internos', () => {
  it('F02-E1-Escenario positivo - Crear tag interno con datos completos', function () {
    const username = Cypress.env('USERNAME')
    const password = Cypress.env('PASSWORD')
    cy.visit('#/signin')
    cy.get('input[id=identification]').type(username)
    cy.get('input[id=password]').type(`${password}{enter}`)
    cy.screenshot('F02-Inicio de sesión-E1')
    cy.url().should('include', '/dashboard');

    cy.visit('/');
    cy.get('a[href="#/tags/"]').click();
    cy.url().should('include', '/tags');
    cy.get('button[data-test-tags-nav="internal"]').click()
    cy.get('a[class="ember-view gh-btn gh-btn-green"]').click()
    cy.url().should('include', '/tags/new');
    cy.get('input[id=tag-name]').type("Prueba")
    cy.get('input[id=tag-slug]').type("Slug prueba")
    cy.get('textarea[id=tag-description]').type("Descripción prueba")
    cy.get('button[data-test-button="save"]').click();
    cy.get('button[data-test-button="save"]')
      .should('contain.text', 'Saved');
    cy.screenshot('F02-Crear tags internos-E1')
  })

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