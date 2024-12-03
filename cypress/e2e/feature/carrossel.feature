Feature: Teste Carrossel Notícias

Background: Abrir site Gov
  Given que eu acesse a página inicial do gov.br

Scenario: Navegar pelo carrossel de notícias
  When eu clicar na seta para a direita no carrossel
  Then o próximo slide deve ser exibido com a mensagem "Empreendedor"