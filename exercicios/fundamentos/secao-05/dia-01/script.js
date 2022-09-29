function changeText(){
  const p = document.getElementsByTagName('p');
  p[1].innerText = "brabo.";
}
changeText();

function changeColor(color1,color2) {
  let yellowSquare = document.getElementsByClassName('main-content')[0];
  yellowSquare.style.background = color1;
  
  let redSquare = document.getElementsByClassName('center-content')[0];
  redSquare.style.background = color2;
}
changeColor('rgb(76,164,109)','white');

function correctText(texto){
  texto.innerText = 'Exercício - JavaScript';
}
correctText(document.getElementsByClassName('title')[0]);

function upperCaseP(text) {
  text.innerHTML = text.innerHTML.toUpperCase();
}

upperCaseP(document.getElementsByTagName('p')[0]);

function consoleP() {
  let conteudo = document.getElementsByTagName('p');

  for (i in conteudo){
    console.log(conteudo[i].innerHTML);
  }
}

consoleP();



/*
      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
      - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName()
      1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
      2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
      3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
      4. Crie e execute uma função que corrija o texto da tag <h1>.
      5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
      6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
      */