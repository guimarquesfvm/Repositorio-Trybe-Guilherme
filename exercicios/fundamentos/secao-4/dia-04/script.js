// let car = {
//   type: 'celta',
//   year: '2009',
//   color: 'azul calcinha',
//   suspention: 'rebaixado arranha lombada',
// };

// console.log(car.type + ' ' + car.year + ' ' + car.color + ' ' + car.suspention);

// let diasDaSemana = {
//   1: 'segunda',
//   2: 'terca',
//   3: 'quarta',
//   4: 'quinta',
//   5: 'sexta',
//   6: 'sabado',
//   7: 'domingo',
// };

// console.log(diasDaSemana[1]);

// let moradores = [
//   {
//     nome: 'Luiza',
//     sobrenome: 'Guimarães',
//     andar: 10,
//     apartamento: 1005,
//   },
//   {
//     nome: 'William',
//     sobrenome: 'Albuquerque',
//     andar: 5,
//     apartamento: 502,
//   },
//   {
//     nome: 'Murilo',
//     sobrenome: 'Ferraz',
//     andar: 8,
//     apartamento: 804,
//   },
//   {
//     nome: 'Zoey',
//     sobrenome: 'Brooks',
//     andar: 1,
//     apartamento: 101,
//   },
// ];
// for (i in car){
//   console.log(i + ' ' + car[i]);
// }

// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   recorrente: 'Sim',
// };

// // console.log(info.personagem);
// // console.log(info.origem);
// // console.log(info.nota);

// for (const key in info) {
//   console.log(info[key]);
// }

// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
//     },
//   ],
// };
// let livro = leitor[0];
// console.log(leitor.livrosFavoritos['titulo']);

// let=

// function name(lista) {

//   for (i of name){
    
//   }

// }


function verificaPalindrome(word) {
  for(index in word) {
    if(word[index] != word[(word.length - 1) - index]) {
      return false;
    }
  }
  return true;
}

console.log(verificaPalindrome('arara'));