//eviar e-mail
function handleFormSubmit(event) {
  event.preventDefault();
  var form = event.target;
  google.script.run.handleFormSubmit(form);
  form.reset();
}

function openUrl(url) {
  window.open(url, "_blank");
}
