describe('Fazer login e logout', () => {
    // Armazena as variaveis de elementos usados em todo o teste
    before(() => {
        Cypress.env('TextoTelaInicial', 'div[class=login_logo]')
        Cypress.env('TelaProdutos', 'span[class="title"]')
        Cypress.env('ErroLogin', '[data-test="error"]')
    })
    it('Visitar a Pagina', () => {
        cy.visit('')
        // Verifica se o texto "Swag Labs" é exibido na página inicial 
        cy.get(Cypress.env('TextoTelaInicial'))
        .should('be.visible')
        .and('have.text', 'Swag Labs')
    })

    it('Erro de login', () => {
        cy.DadosLoginErrado()
        cy.get(Cypress.env('ErroLogin'))
        .invoke('text')
        .should('contain', 'Epic sadface: Username and password do not match any user in this service')
    })

    it('Fazer login', () => {
        // Executa o comando personalizado "DadosLogin" para inserir as informações de login
        cy.DadosLogin()     
        cy.get('@User')
        .should('be.visible')
        cy.get('@Senha')
        .should('be.visible')
    })            

    it('Clicar no botão entrar', () => {
        // Executa o comando personalizado "ClicarBotaoLogin" para clicar no botão de login
        cy.ClicarBotaoLogin()
        // Verifica se o texto "Products" é exibido após o login bem-sucedido
        cy.get(Cypress.env('TelaProdutos'))
        .should('be.visible')
        .and('have.text', 'Products')
    })

    it('Fazer logout', () => {
        // Executa o comando personalizado "ClicarOpenMenu" para abrir o menu de usuário
        cy.ClicarOpenMenu()
        cy.get('@OpenMenu')
        .should('be.visible')
        // Executa o comando personalizado "FazerLogout" para fazer logout do usuário
        cy.FazerLogout()
        // Verifica se o usuário foi redirecionado para a página inicial após o logout
        cy.get(Cypress.env('TextoTelaInicial'))
        .should('be.visible')
        .and('have.text', 'Swag Labs')
    })

})