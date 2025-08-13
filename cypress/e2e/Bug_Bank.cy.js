describe('Login Pagina', () => {
    it.only('Email e Senha são campos obrigatórios', () => {
        cy.visit('https://bugbank.netlify.app/')
        cy.contains('button', 'Acessar').click()

        cy.get('input[name="email"]')
        .parent()
        .find('p.input__warging')
        .should('have.text', 'É campo obrigatório')

        cy.get('input[name="password"]')
        .parent()
        .find('p.input__warging')
        .should('have.text', 'É campo obrigatório')    
    });
});