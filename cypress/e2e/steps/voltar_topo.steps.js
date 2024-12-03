import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que eu acesse a página inicial do gov.br", () => {
  cy.visit("https://www.gov.br/pt-br");
});

When('eu rolar a página inicial do gov.br para o final', (botao) => {
  cy.scrollTo("bottom");
});

And('eu clicar no botão Voltar ao topo', (botao) => {
    cy.get('.back-to-top > a > .fa').click(); 
});

Then("a página deve rolar para o início", () => {
  cy.window().its("scrollY").should("equal", 0);
});