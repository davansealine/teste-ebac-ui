/// <reference types="cypress" />
const customCommands = require('../support/commands')

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Aero Daily Fitness Tee')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 2

        cy.get('[class="product-block grid"]')
            .contains('Ajax Full-Zip Sweatshirt').click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')

    });

    it('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 'M', 'Red', 3)
    });

    it('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
        cy.addProdutos('Abominable Hoodie', 'M', 'Blue', 10)
    });
});