Feature: Botão Voltar ao topo

Background: Abrir site Gov
  Given que eu acesse a página inicial do gov.br

Scenario: Usar o botão de voltar ao topo
  When eu rolar a página inicial do gov.br para o final
  And eu clicar no botão Voltar ao topo
  Then a página deve rolar para o início