// Função para criptografar o texto
let titulo = document.querySelector(".apresentacao__conteudo2__texto__titulo");
let imagem = document.querySelector(".apresentacao__conteudo2__imagem");

// Função para copiar o texto criptografado ou descriptografado
function copiarTexto() {
  // Seleciona o elemento que contém o texto criptografado ou descriptografado
  let textoParagrafo = document.querySelector(
    ".apresentacao__conteudo2__texto__paragrafo"
  );

  // Cria um elemento de texto oculto para copiar o conteúdo
  let textoOculto = document.createElement("textarea");
  textoOculto.value = textoParagrafo.textContent;
  document.body.appendChild(textoOculto);

  // Seleciona e copia o texto do elemento oculto
  textoOculto.select();
  document.execCommand("copy");

  // Remove o elemento de texto oculto
  document.body.removeChild(textoOculto);

  // Exibe uma mensagem de confirmação para o usuário
  alert("Texto copiado para a área de transferência!");
}

function criptografar() {
  let textoInput = document.querySelector(
    ".apresentacao__conteudo__input__input"
  );
  let titulo = document.querySelector(
    ".apresentacao__conteudo2__texto__titulo"
  );
  let imagem = document.querySelector(".apresentacao__conteudo2__imagem");

  // Obtém o texto inserido pelo usuário
  let texto = textoInput.value;

  // Verifica se o textarea está vazio
  if (texto.trim() !== "") {
    // Verifica se o texto contém apenas letras minúsculas, espaços e caracteres específicos
    if (!/^[a-z\s.,áàãâéêíóôõúç""'']+$/.test(texto)) {
      alert(
        "Apenas letras minúsculas, espaços e caracteres específicos são permitidos."
      );
      return; // Encerra a função se o texto contiver caracteres inválidos
    }

    // Realiza a substituição das letras de acordo com as chaves de criptografia
    let textoCriptografado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    // Exibe o texto criptografado na tela
    document.querySelector(
      ".apresentacao__conteudo2__texto__paragrafo"
    ).textContent = textoCriptografado;

    titulo.remove();
    imagem.remove();
    document.getElementById("copiarTexto").style.display = "inline-block";
  } else {
    alert("Texto não identificado");
    var textarea = document.querySelector(
      ".apresentacao__conteudo__input__input"
    );
    textarea.value = "";
    textarea.placeholder = "Digite seu texto";
    textarea.focus();
    return;
  }
}

// Função para descriptografar o texto
function descriptografar() {
  // Obtém o texto inserido pelo usuário
  let textoCriptografado = document.querySelector(
    ".apresentacao__conteudo__input__input"
  ).value;

  if (textoCriptografado.trim() !== "") {
    if (!/^[a-z\s.,áàãâéêíóôõúç""'']+$/.test(textoCriptografado)) {
      alert(
        "Apenas letras minúsculas, espaços e caracteres específicos são permitidos."
      );
      return; // Encerra a função se o texto contiver caracteres inválidos
    }

    // Realiza a inversão da substituição das letras de acordo com as chaves de criptografia
    let textoDescriptografado = textoCriptografado
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    // Exibe o texto descriptografado na tela
    document.querySelector(
      ".apresentacao__conteudo2__texto__paragrafo"
    ).textContent = textoDescriptografado;
    titulo.remove();
    imagem.remove();
    document.getElementById("copiarTexto").style.display = "inline-block";
  } else {
    alert("texto não identificado");
    var textarea = document.querySelector(
      ".apresentacao__conteudo__input__input"
    );
    textarea.value = "";
    textarea.placeholder = "Digite seu texto";
    textarea.focus();
    return;
  }
}
