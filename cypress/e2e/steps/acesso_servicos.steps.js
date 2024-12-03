import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("que eu acesse a página inicial do gov.br", () => {
  cy.visit("https://www.gov.br/pt-br");
});

When("eu clicar no botao de servicos", () => {
    cy.get('.fa-bars').click();
});

And("eu clicar na opcao de servicos", () => {
    cy.get('#main-navigation > .list-navigation > :nth-child(1) > .plain').click();
});

Then("deve redirecionar para a página {string}", (urlEsperada) => {
    cy.url().should("eq", urlEsperada); 
  });