Feature: Acesso à Seção de Serviços

Background: Abrir site Gov
  Given que eu acesse a página inicial do gov.br

Scenario: Redirecionar para a página de serviços
  When eu clicar no botao de servicos
  And eu clicar na opcao de servicos
  Then deve redirecionar para a página "https://www.gov.br/pt-br/servicos"