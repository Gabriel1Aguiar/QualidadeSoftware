Feature: Busca Inexistente

Background: Abrir site Gov
  Given que eu acesse a página inicial do gov.br

Scenario: Buscar por termo inexistente
  When eu digitar "XYZ123" no campo de busca
  And clicar no botão de busca
  Then deve ser exibida a mensagem "Nenhum resultado encontrado em todo o GOV.BR"