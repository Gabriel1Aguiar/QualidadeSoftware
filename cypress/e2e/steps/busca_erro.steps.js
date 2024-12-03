import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que eu acesse a página inicial do gov.br", () => {
  cy.visit("https://www.gov.br/pt-br");
});

When('eu digitar "{string}" no campo de busca', (termo) => {
  cy.get('#searchtext-input').type(termo);
});

When("clicar no botão de busca", () => {
  cy.get('.aa-SubmitButton').click();
});

Then("deve ser exibida a mensagem {string}", (mensagem) => {
  cy.contains(mensagem).should("be.visible"); 
});