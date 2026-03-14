async function carregarIndicadores() {
  let requisicao = await fetch("http://localhost:3000/api/info");
  let valor_requisicao = await requisicao.json();
  const itemHTML = `
    <div class="status-about_item">
              <div class="status-about_number">${valor_requisicao.adotados}</div>
              <div class="status-about_label">Pets Adotados</div>
            </div>
            <div class="status-about_item">
              <div class="status-about_number">${valor_requisicao.disponiveis}</div>
              <div class="status-about_label">Pets Disponiveis</div>
            </div>
            <div class="status-about_item">
              <div class="status-about_number">${valor_requisicao.familias_felizes}</div>
              <div class="status-about_label">Familias Felizes</div>
            </div>
            <div class="status-about_item">
              <div class="status-about_number">${valor_requisicao.parceiros}+</div>
              <div class="status-about_label">Parceiros</div>
              `;
  document
    .getElementById("status-content")
    .insertAdjacentHTML("afterbegin", itemHTML);
}
carregarIndicadores();
