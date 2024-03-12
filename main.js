const visualizacaoPrimaria = document.getElementsByClassName("visualizacaoPrimaria");
const textoEntrada = document.getElementById('textoEntrada');
const textoSaida = document.getElementById('textoSaida');
const botaoCriptografar = document.getElementById('botaoCriptografar');
const botaoDescriptografar = document.getElementById('botaoDescriptografar');
const botaoCopiar = document.getElementById('botaoCopiar');
const botaoLimpar = document.getElementById('botaoLimpar');
const criptografia = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
}

textoEntrada.addEventListener("input", validarTexto);
botaoCriptografar.onclick = criptografar;
botaoDescriptografar.onclick = descriptografar;
botaoCopiar.onclick = copiarResultado;
botaoLimpar.onclick = LimparResultado;

function modoVisualizacao(visualizacao1, visualizacao2) {
    for (let i = 0; i < visualizacaoPrimaria.length; i++) {
        visualizacaoPrimaria[i].style.display = visualizacao1;
    }
    mensagemSaida.style.display = visualizacao2;
    textoSaida.style.display = visualizacao2;
    botaoCopiar.style.display = visualizacao2;
    botaoLimpar.style.display = visualizacao2;
}

verificarVisualizacao()
function verificarVisualizacao() {
    if (textoEntrada.value === "")
        modoVisualizacao("block", "none");
}

function validarTexto() {
    const regex = /[^a-z0-9\s]/g;
    const textoValido = textoEntrada.value.replace(regex, "");
    textoEntrada.value = textoValido;
}

function criptografar() {
    if (textoEntrada.value !== "") {
        let textoCriptografado = textoEntrada.value;
        for (const caractere in criptografia) {
            const regex = new RegExp(caractere, "g");
            textoCriptografado = textoCriptografado.replace(regex, criptografia[caractere]);
        }
        writeResult(textoCriptografado);
    }
}

function descriptografar() {
    if (textoEntrada.value !== "") {
        let textoDescriptografado = textoEntrada.value;
        for (const caractere in criptografia) {
            const regex = new RegExp(criptografia[caractere], "g");
            textoDescriptografado = textoDescriptografado.replace(regex, caractere);
        }
        writeResult(textoDescriptografado);
    }
}

function writeResult(criptografado) {
    textoSaida.value = criptografado;
    modoVisualizacao("none", "block");
}

function copiarResultado() {
    textoSaida.select();
    navigator.clipboard.writeText(textoSaida.value);
}

function LimparResultado() {
    textoEntrada.value = "";
    textoSaida.value = "";
    modoVisualizacao("block", "none");
}