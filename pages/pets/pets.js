function loadingMenu() {
  const menuHTML = `
    <div class="menu-container">
      <div class="menu-logo">
        <span class="paw-icon">🐾</span>
        <span class="menu-logo_span">PetLove</span>
      </div>
      <div class="menu-link_container">
         <a id="tela1" class="menu-link_home" href="../../index.html">Home</a>
          <a id="tela2" class="menu-link_pets" href="pets.html">Pets</a>
      </div>
    </div>`;

  document
    .getElementById("container-principal")
    .insertAdjacentHTML("afterbegin", menuHTML);

  deixarMenuAtivo();
}
function deixarMenuAtivo() {
  const pagina = window.location.pathname;

  if (pagina.includes("index.html")) {
    document.getElementById("tela1").classList.add("ativo");
  }

  if (pagina.includes("pets.html")) {
    document.getElementById("tela2").classList.add("ativo");
  }
}
loadingMenu();
