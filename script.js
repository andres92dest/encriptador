const menUser = document.querySelector(".texto-user");
const mens = document.querySelector(".mensaje");
const btnEncript = document.querySelector(".btn__encriptar");

function cifrarCesarMinusculas(texto, desplazamiento) {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    let textoCifrado = "";
  
    for (let i = 0; i < texto.length; i++) {
      const letra = texto[i];
      const indice = alfabeto.indexOf(letra);
  
      if (indice !== -1) {
        // Si la letra es minúscula y está en el alfabeto, la ciframos
        const nuevoIndice = (indice + desplazamiento) % alfabeto.length;
        textoCifrado += alfabeto[nuevoIndice];
      } else {
        // Si no es una letra minúscula en el alfabeto, la dejamos sin cifrar
        textoCifrado += letra;
      }
    }
  
    return textoCifrado;
  }
  function desencriptarCesarMinusculas(textoCifrado, desplazamiento) {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    let textoPlano = "";
  
    for (let i = 0; i < textoCifrado.length; i++) {
      const letra = textoCifrado[i];
      const indice = alfabeto.indexOf(letra);
  
      if (indice !== -1) {
        // Si la letra es minúscula y está en el alfabeto, la desencriptamos
        const nuevoIndice = (indice - desplazamiento + alfabeto.length) % alfabeto.length; // Ajustamos para evitar índices negativos
        textoPlano += alfabeto[nuevoIndice];
      } else {
        // Si no es una letra minúscula en el alfabeto, la dejamos sin desencriptar
        textoPlano += letra;
      }
    }
  
    return textoPlano;
  }
  function encriptar(){

    const texto = menUser.value;
    const textoEcriptado = cifrarCesarMinusculas(texto,4);
    mens.value = "";
    mens.style.backgroundImage = "none";
    mens.value = textoEcriptado;
    console.log(textoEcriptado);
    const des = desencriptarCesarMinusculas(textoEcriptado,4);
    console.log(des);
  }