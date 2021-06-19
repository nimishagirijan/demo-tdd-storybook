/// <reference types="../support/types"/>/// <reference path="../support/index.d.ts" />

describe('Button Component', () => {
    it('should respond to click on button with warning', () => {
        cy.visit("http://localhost:6006/iframe.html?id=button--primary");
        cy.get('button').click();
        cy.contains("You need to fill a form");
    });
})