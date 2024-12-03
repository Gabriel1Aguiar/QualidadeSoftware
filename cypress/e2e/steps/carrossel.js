import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que eu acesse a página inicial do gov.br", () => {
  cy.visit("https://www.gov.br/pt-br");
});

When("eu clicar na seta para a direita no carrossel", () => {
  cy.get('.swiper-button-next').click();
});

Then("o próximo slide deve ser exibido com a mensagem {string}", (mensagem) => {
  cy.contains(mensagem).should("be.visible");
});
