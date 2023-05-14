describe('SignIn', () => {
    beforeEach(() => {
        cy.visit('/auth/signIn');
    });

    it('should signIn successfully', () => {
        cy.get('[type="text"]').type('test@test.com');

        cy.get('[type="password"]').type('testUser123');

        cy.contains('로그인').click();

        cy.url().should('include', '/main');
    });

    it('should move SignUp page successfully', () => {
        cy.contains('회원가입').click();

        cy.url().should('include', '/auth/signUp');
    });
});
