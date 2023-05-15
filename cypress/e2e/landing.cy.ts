describe('Landing', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    describe('Navigation to sign-in page', () => {
        const testCases = [
            { element: 'Get Start', url: '/auth/signIn' },
            { element: 'Try Free', url: '/auth/signIn' },
            { element: 'Buy Now', url: '/auth/signIn' }
        ];

        testCases.forEach((testCase) => {
            it(`should navigate ${testCase.element} to the sign-in page`, () => {
                cy.contains(testCase.element).click();
                cy.url().should('include', testCase.url);
            });
        });
    });
});
