
Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('The play() request was interrupted')) {
        return false;
    }
    return true;
});

describe('Prueba E2E de Creación y Programación de Publicaciones en Ghost', () => {
    beforeEach(() => {

        cy.login();
    });

    it('Debería crear y publicar una entrada correctamente', () => {
        cy.visit('#/editor/post');
        cy.wait(1000);
        cy.get('textarea[placeholder="Post title"]').type('Nueva Publicación');
        cy.get('.koenig-react-editor').type('Este es el contenido de la publicación.');
        cy.get('button').contains('Publish').click();

        cy.get('button[data-test-button="continue"]').click();
        
        cy.get('button[data-test-button="confirm-publish"]').click();

        
        cy.get('div.modal-post-success').should('be.visible');

       
        cy.get('h2').contains('Nueva Publicación').should('be.visible');
        cy.get('.post-excerpt').contains('Este es el contenido de la publicación.').should('be.visible');

        
        cy.get('button[data-test-button="close-publish-flow"]').click();

       
        cy.get('div.modal-post-success').should('not.exist');
    });

    it('Debería programar una publicación para una fecha futura', () => {
        cy.visit('#/editor/post');
        cy.get('textarea[placeholder="Post title"]').type('Publicación Programada');
        cy.get('.koenig-react-editor').type('Contenido para publicación programada.');
        cy.get('button').contains('Publish').click();

        cy.get('div[data-test-setting="publish-at"] button.gh-publish-setting-title').click();

       
        cy.get('div.gh-radio').contains('Schedule for later').click();

        cy.get('button[data-test-button="continue"]').click();

        cy.get('button[data-test-button="confirm-publish"]').click();

     
        cy.get('div.modal-post-success').should('be.visible');

     
        cy.get('h2').contains('Publicación Programada').should('be.visible');
        cy.get('.post-excerpt').contains('Contenido para publicación programada.').should('be.visible');


        cy.get('button[data-test-button="close-publish-flow"]').click();


        cy.get('div.modal-post-success').should('not.exist');
    });


});
