describe('SignUp', () => {
    beforeEach(() => {
        cy.visit('/auth/signUp');
    });

    describe('invalid inputs', () => {
        beforeEach(() => {
            cy.get('[id="nickname"]').type('test');
            cy.get('[id="email"]').type('test@naver.com');
            cy.get('[id="password"]').type('testUser123');
            cy.get('[id="password_check"]').type('testUser123');
        });

        it('should display an error message when nickname is too short', () => {
            cy.get('[id="nickname"]').clear().type('h');
            cy.contains('가입하기').should('be.disabled');
        });

        it('should display an error message when email is invalid', () => {
            cy.get('[id="email"]').clear().type('testnaver.com');
            cy.contains('가입하기').should('be.disabled');
        });

        it('should display an error message when password is too short', () => {
            cy.get('[id="password"]').clear().type('1234');
            cy.contains('가입하기').should('be.disabled');
        });

        it('should display an error message when match check password is not same', () => {
            cy.get('[id="password_check"]').clear().type('testUser124');
            cy.contains('가입하기').should('be.disabled');
        });
    });

    it('should enable sighUp button when all inputs are valid', () => {
        cy.visit('/auth/signUp');

        cy.get('[id="nickname"]').type('testNickname123');
        cy.get('[id="email"]').type('testtest123@testtest.com');
        cy.get('[id="password"]').type('testUser123');
        cy.get('[id="password_check"]').type('testUser123');

        cy.contains('가입하기').should('not.be.disabled');
    });

    it('should navigate to sign in page successfully', () => {
        cy.visit('/auth/signUp');

        cy.contains('이전').click();

        cy.url().should('include', '/auth/signIn');
    });
});
