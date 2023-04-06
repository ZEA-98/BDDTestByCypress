const { Given, When, Then } = requere('@badeball/cypress-cucumber-preprocessor')

Given ('I open login page', () => {
    cy.visit('https://www.saucedemo.com')
});

When ('I submit login', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('.submit-button btn_action').click()
})

Then ('I should see homepage', () => {
    cy.get('.header_secondary_container').should('be.visible')
    cy.get('.header_secondary_container').should('equal', 'Products')
})