import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que eu acesse a página inicial do gov.br", () => {
  cy.visit("https://www.gov.br/pt-br");
});

When('eu clicar no botão de acessibilidade "Contraste"', () => {
  cy.get('.link-contraste > .fas').click(); 
});

Then("a página deve ser exibida em modo de alto contraste", () => {
  cy.get("body").should("have.class", "default-header-template portal-govbr cover-layout-layout-vazio template-view portaltype-collective-cover-content site-pt-br section-pagina-inicial userrole-anonymous contraste"); // Confirme a classe usada pelo site
});