Feature: Busca de Conteúdo

Background: Abrir site Gov
  Given que eu acesse a página inicial do gov.br

Scenario: Buscar por um termo válido
  When eu digitar "Imposto de Renda" no campo de busca
  And clicar no botão de busca
  Then deve exibir uma lista de resultados relacionados ao "Imposto de Renda"