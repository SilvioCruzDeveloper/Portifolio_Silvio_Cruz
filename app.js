function doPost(e) {
  var nome = e.parameter.nome;
  var email = e.parameter.email;
  var mensagem = e.parameter.mensagem;

  var recipient = "silviocruzdeveloper@gmail.com";
  var subject = "Nova mensagem do formulário de contato";
  var body = "Nome: " + nome + "\nEmail: " + email + "\nMensagem: " + mensagem;

  MailApp.sendEmail(recipient, subject, body);

  return HtmlService.createHtmlOutput("<p>Mensagem enviada com sucesso!</p>");
}
