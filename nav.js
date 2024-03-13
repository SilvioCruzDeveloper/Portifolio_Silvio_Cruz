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
