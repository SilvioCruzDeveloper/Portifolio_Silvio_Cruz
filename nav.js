// Função para rolar até a seção desejada
function goToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Adicionando evento de clique aos links
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute("href").substring(1);
      goToSection(sectionId);
    });
  });

  // Adicionando evento de clique para a navegação entre projetos e skills
  const projetosLink = document.querySelector('a[href="#projetos"]');
  const skillsLink = document.querySelector('a[href="#skills"]');

  projetosLink.addEventListener("click", function (e) {
    e.preventDefault();
    goToSection("projetos");
  });

  skillsLink.addEventListener("click", function (e) {
    e.preventDefault();
    goToSection("skills");
  });
});
function slider() {
  // Seleciona o elemento com o ID "meuElemento"
  var meuElemento = document.getElementById("meuElemento");

  // Verifica o estado atual da margem superior
  var marginTopAtual = parseInt(meuElemento.style.marginTop, 10) || 0;

  // Se a margem superior for 0, define como 170px
  if (marginTopAtual === 0) {
    meuElemento.style.marginTop = "170px"; // Adiciona a margem superior de 170px
  } else {
    meuElemento.style.marginTop = "0"; // Define a margem superior como 0
  }
}

// Chamada da função slider quando necessário
// Por exemplo, quando um botão é clicado
document.getElementById("botaoSlider").addEventListener("click", slider);
