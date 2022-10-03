// const firstLi = document.getElementById('first-li');
// const secondLi = document.getElementById('second-li');
// const thirdLi = document.getElementById('third-li');
// const input = document.getElementById('input');
// const myWebpage = document.getElementById('my-spotrybefy');


// // - Copie esse arquivo e edite apenas ele;
// //  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// // - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// //  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?


// function techToLi (event){
//   const techElement = document.querySelector('.tech');
//   techElement.classList.remove('tech');
//   event.target.classList.add('tech')
//   input.value = '';
// }

// firstLi.addEventListener('click', techToLi);
// secondLi.addEventListener('click', techToLi);
// thirdLi.addEventListener('click', techToLi);


// // - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// // com a classe 'tech';

// input.addEventListener('input', function(event){
//   const techElement = document.querySelector('.tech');
//   techElement.innerText = event.target.value;
// });

// // - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// // redirecione para alguma página;
// //  - Que tal redirecionar para seu portfólio?

// myWebpage.addEventListener('dblclick', function(event){
//   window.location.replace('https://blog.betrybe.com/');
// });

// // - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// // a cor do mesmo;

// myWebpage.addEventListener('mouseenter', function (event) {
//   event.target.style.color = 'red';
// });

// myWebpage.addEventListener('mouseleave', function (event) {
//   event.target.style.backgroundColor = 'white';
// });

// // Segue abaixo um exemplo do uso de event.target:


// function resetText(event) {
//   // O Event é passado como um parâmetro para a função.
//   event.target.innerText = 'Opção reiniciada';
//   // O event possui várias propriedades, porém a mais usada é o event.target,
//   // que retorna o objeto que disparou o evento.
// }

// firstLi.addEventListener('dblclick', resetText);

// // Não precisa passar o parâmetro dentro da callback resetText. O próprio
// // navegador fará esse trabalho por você, não é legal? Desse jeito, o
// // event.target na nossa função retornará o objeto 'firstLi'.

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth(){
  let getDaysList = document.querySelector('#days');
  for ( index = 0; index < decemberDaysList.length; index += 1){
    let day = decemberDaysList[index];
    let dayItem = document.createElement('li');
    dayItem.innetHTML = day;

    if (day === 24 || day === 31){
      dayItem.className = 'day holiday';
      getDaysList.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = 'day friday';
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      getDaysList.appendChild(dayItem);
    } else {

    }
  }
}