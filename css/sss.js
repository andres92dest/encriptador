const textoOriginal = document.getElementById('texto-original');
const textoEncriptado = document.getElementById('texto-encriptado');
const btnEncriptar = document.getElementById('btn-encriptar');

btnEncriptar.addEventListener('click', () => {
    const texto = textoOriginal.value;
    const textoInvertido = texto.split('').reverse().join('');
    textoEncriptado.value = textoInvertido;
});