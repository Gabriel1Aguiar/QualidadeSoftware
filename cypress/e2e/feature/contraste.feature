Feature: Teste Modo Escuro

Background: Abrir site Gov
  Given que eu acesse a página inicial do gov.br

Scenario: Ativar o modo de contraste alto
  When eu clicar no botão de acessibilidade "Contraste"
  Then a página deve ser exibida em modo de alto contraste