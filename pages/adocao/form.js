async function enviarCadastro(event) {
  event.preventDefault();

  const termos = document.getElementById("termos_aceitos");
  if (!termos || !termos.checked) {
    alert("Marque o checkbox para aceitar os termos antes de enviar.");
    return;
  }

  validarCampos();
}
function validarCampos() {
  let input_nome_valor = document.getElementById("input_nome").value;
  let input_telefone_valor = document.getElementById("input_telefone").value;
  let tipo_moradia_valor = document.getElementById("tipo_moradia").value;
  let condicao_moradia_valor =
    document.getElementById("condicao_moradia").value;
  let qtd_pessoas_valor = document.getElementById("pessoas_casa").value;
  let textarea_motivo_valor =
    document.getElementById("textarea-motivacao").value;
  let input_nome = document.getElementById("input_nome");
  let input_telefone = document.getElementById("input_telefone");
  let tipo_moradia = document.getElementById("tipo_moradia");
  let condicao_moradia = document.getElementById("condicao_moradia");
  let qtd_pessoas = document.getElementById("pessoas_casa");
  let textarea_motivo = document.getElementById("textarea-motivacao");
  if (input_nome_valor === "") {
    input_nome.style.backgroundColor = "#f31a1a36";
  }
  if (input_telefone_valor === "") {
    input_telefone.style.backgroundColor = "#f31a1a36";
  }
  if (tipo_moradia_valor === "Selecione..." || tipo_moradia_valor === "") {
    tipo_moradia.style.backgroundColor = "#f31a1a36";
  }
  if (
    condicao_moradia_valor === "Selecione..." ||
    condicao_moradia_valor === ""
  ) {
    condicao_moradia.style.backgroundColor = "#f31a1a36";
  }
  if (qtd_pessoas_valor === "") {
    qtd_pessoas.style.backgroundColor = "#f31a1a36";
  }
  if (textarea_motivo_valor === "") {
    textarea_motivo.style.backgroundColor = "#f31a1a36";
  }
  input_nome.addEventListener("change", function () {
    input_nome.style.backgroundColor = "white";
  });
  input_telefone.addEventListener("change", function () {
    input_telefone.style.backgroundColor = "white";
  });
  tipo_moradia.addEventListener("change", function () {
    tipo_moradia.style.backgroundColor = "white";
  });
  condicao_moradia.addEventListener("change", function () {
    condicao_moradia.style.backgroundColor = "white";
  });
  qtd_pessoas.addEventListener("change", function () {
    qtd_pessoas.style.backgroundColor = "white";
  });
  textarea_motivo.addEventListener("change", function () {
    textarea_motivo.style.backgroundColor = "white";
  });
}
function inicializarBotaoTermos() {
  const termos = document.getElementById("termos_aceitos");
  const botao = document.querySelector(".btn-enviar");
  if (!termos || !botao) return;

  botao.disabled = !termos.checked;

  termos.addEventListener("change", function () {
    botao.disabled = !termos.checked;
  });
}
function capturaUrl() {
  var dadosDaUrl = new URLSearchParams(window.location.search);
  var imagemDaUrl = dadosDaUrl.get("imagem");

  const foto = document.getElementById("foto_do_pet");
  if (foto) {
    if (imagemDaUrl) {
      foto.setAttribute("src", imagemDaUrl);
      document.title = "Adoção de Pet";
    } else {
      foto.setAttribute("src", "../../assets/adoption-pets.webp");
      document.title = "Adoção de Pet";
    }
  }
}

inicializarBotaoTermos();
capturaUrl();
