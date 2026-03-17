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

async function carregarTodos() {
  document
    .querySelectorAll(".filtros button")
    .forEach((btn) => btn.classList.remove("active"));
  document.querySelector(".filter-all").classList.add("active");

  let requisicao = await fetch("http://localhost:3000/api/pets");
  let pets = await requisicao.json();

  const container = document.getElementById("pets-cards_container");
  if (container) container.innerHTML = "";

  pets.forEach((pet) => {
    const petITEM = `
    <div class="pet-card">
              <div class="pet-img">
                <img src="${pet.imagem}" />
              </div>
                <div class="information-pet">
                  <h3 class="nome-pet">${pet.nome}</h3>
                  <p class="pet-breed">${pet.raca} • ${pet.idade} • ${pet.sexo}</p>
                  <p class="descricao-pet">
                    ${pet.descricao}
                  </p>
                  <div class="pet-detalhes">
                    <span class="detalhe-item">📏 ${pet.porte}</span>
                    <span class="detalhe-item">🎨 ${pet.cor}</span>
                    <span class="detalhe-item">💉 Vacinado</span>
                    <span class="detalhe-item">✂️ Castrado</span>
                  </div>
                  <a href=""?imagem=${pet.imagem} class="btn-ver-pet"
                    >Quero Adotar</a
                  >
                </div>
            </div>`;

    container.insertAdjacentHTML("afterbegin", petITEM);
  });
}

async function carregarPets(tipo) {
  let url = `http://localhost:3000/api/pets?tipo=${tipo}`;
  let requisicao = await fetch(url);
  let pets = await requisicao.json();

  const container = document.getElementById("pets-cards_container");
  if (container) container.innerHTML = "";

  pets.forEach((pet) => {
    const petITEM = `
    <div class="pet-card">
              <div class="pet-img">
                <img src="${pet.imagem}" />
              </div>
                <div class="information-pet">
                  <h3 class="nome-pet">${pet.nome}</h3>
                  <p class="pet-breed">${pet.raca} • ${pet.idade} • ${pet.sexo}</p>
                  <p class="descricao-pet">
                    ${pet.descricao}
                  </p>
                  <div class="pet-detalhes">
                    <span class="detalhe-item">📏 ${pet.porte}</span>
                    <span class="detalhe-item">🎨 ${pet.cor}</span>
                    <span class="detalhe-item">💉 Vacinado</span>
                    <span class="detalhe-item">✂️ Castrado</span>
                  </div>
                  <a href=""?imagem=${pet.imagem} class="btn-ver-pet"
                    >Quero Adotar</a
                  >
                </div>
            </div>`;

    container.insertAdjacentHTML("afterbegin", petITEM);
  });
}

async function carregarCachorros() {
  document
    .querySelectorAll(".filtros button")
    .forEach((btn) => btn.classList.remove("active"));
  document.querySelector(".filter-cachorros").classList.add("active");

  await carregarPets("cachorro");
}

async function carregarGatos() {

  document
    .querySelectorAll(".filtros button")
    .forEach((btn) => btn.classList.remove("active"));

  document.querySelector(".filter-gatos").classList.add("active");

  await carregarPets("gato");
}
loadingMenu();
carregarTodos();
