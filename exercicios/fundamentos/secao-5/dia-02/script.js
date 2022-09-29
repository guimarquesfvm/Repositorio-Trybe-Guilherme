// Adicione a tag `h1` com o texto `Exercício - JavaScript DOM` como filho da tag `body`;

const elementH1 = document.createElement('h1');
elementH1.innerText = 'Exercício - JavaScript DOM';

document.body.appendChild(elementH1);

 // Adicione a tag `main` com a classe `main-content` como filho da tag `body`;

 const mainTag = document.createElement('main')
mainTag.className = 'main-content';

document.body.appendChild(mainTag);

// Adicione a tag `section` com a classe `center-content` como filho da tag `main` criada no passo 2;

const sectionTag = document.createElement('section');
sectionTag.className = 'center-content';

mainTag.appendChild(sectionTag);

// Adicione a tag `p` como filho do `section` criado no passo 3 e coloque algum texto;

const pTag = document.createElement('p')
pTag.innerText = 'No seu mar de raio.'

sectionTag.appendChild(pTag);

 // Adicione a tag `section` com a classe `left-content` como filho da tag `main` criada no passo 2;

let sectionTag2 = document.createElement('section')
sectionTag2.className = 'left-content';

mainTag.appendChild(sectionTag2);

 // Adicione a tag `section` com a classe `right-content` como filho da tag `main` criada no passo 2;

let sectionTag3 = document.createElement('section')
sectionTag2.className = 'right-content';

mainTag.appendChild(sectionTag3);

 // Adicione uma imagem com `src` configurado para o valor `https://picsum.photos/200` e classe `small-image`. Esse elemento deve ser filho do `section` criado no passo 5;
     
let imageAddon = document.createElement('img');
imageAddon.src = `https://picsum.photos/200`;
imageAddon.className = 'small-image';

sectionTag2.appendChild(imageAddon);

 // Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, `um`, `dois`, `três`, ... como valores da lista. Essa lista deve ser filha do `section` criado no passo 6;

let unorderedList = document.createElement('ul');
sectionTag3.appendChild(unorderedList);

let numeros = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
'Sete', 'Oito', 'Nove', 'Dez']

for (let num in numeros){
  const elementLi = document.createElement('li');
  elementLi.innerHTML = numeros[num];
  unorderedList.appendChild(elementLi)
}

// Adicione 3 tags `h3`, todas sendo filhas do `main` criado no passo 2.
      
for (index = 0; index <= 3; index += 1){
  let elementH3 = document.createElement('h3');
  elementH3.innerHTML = 'eita' + index;
  mainTag.appendChild(elementH3);
}


 


// let filho = 'nSeiOqEscrever';

// let pai = document.getElementById('primeiroFilhoDoFilho');

// let filhoElement = document.createElement('h2')
// filhoElement.innerText = filho;

// pai.appendChild(filhoElement);

// ////////////////////////////////////////////

// let terceiroFilho = pai
//   .parentElement
//   .parentElement
//   .nextElementSibling;
// console.log(terceiroFilho);

// const pai = document.querySelectorAll('#pai');
// const todosOsFilhos = pai.childNodes;

// for (let index = todosOsFilhos.length -1; index >= 0; index -= 1){
//   const filhoAtual = todosOsFilhos[index];
  
//   if (filhoAtual !== 'elementoOndeVoceEsta'){
//     filhoAtual.remove();
//   }
// }

// const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
// segundoEUltimoFilhoDoFilho.remove();


