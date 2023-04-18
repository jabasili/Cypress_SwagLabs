Cypress.Commands.add('DadosLoginErrado', () => {
    cy.fixture('Login')
        .then((Login) =>{
    cy.get('input[id=user-name]')
        .as('User')
        .type(Login.email)
    cy.get('input[id=password]')
        .as('Senha')
        .type((Login.senhaErrada), { log: false })
    cy.get('input[id=login-button]')
        .as('BotaoLogin')
        .click()
    cy.get('@User')
        .clear()
    cy.get('@Senha')
        .clear()
    })
})

Cypress.Commands.add('DadosLogin', () => {
    cy.fixture('Login')
        .then((Login) =>{
    cy.get('input[id=user-name]')
        .as('User')
        .type(Login.email)
    cy.get('input[id=password]')
        .as('Senha')
        .type((Login.senha), { log: false })
    })
})

Cypress.Commands.add('ClicarBotaoLogin', () => {
    cy.get('input[id=login-button]')
        .as('BotaoLogin')
        .click()
    cy.get('div[id=page_wrapper]')
        .as('PaginaLogada')
})

Cypress.Commands.add('ClicarOpenMenu', () => {
    cy.get('button[id=react-burger-menu-btn]')
        .as('OpenMenu')
        .click()
})

Cypress.Commands.add('FazerLogout', () => {
    cy.get('#logout_sidebar_link')
        .should('be.visible')
    cy.get('a[id=logout_sidebar_link]')
        .as('Logout')
        .click()
})

