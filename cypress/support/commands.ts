Cypress.Commands.add('login', () => {
    const { email, password } = Cypress.env('oauth');
    cy.visit(`http://localhost:3000/auth/signIn`);
    cy.get('input[type="text"]').click().type(email);
    cy.get('input[type="password"]').click().type(password);
    cy.get('button').should('have.text', '로그인').click();
});
