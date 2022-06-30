// Como podemos melhorar o esse código usando TS? 

// let pessoa1 = {};
// pessoa1.nome = "maria";
// pessoa1.idade = 29;
// pessoa1.profissao = "atriz"

// let pessoa2 = {}
// pessoa2.nome = "roberto";
// pessoa2.idade = 19;
// pessoa2.profissao = "Padeiro";

// let pessoa3 = {
//     nome: "laura",
//     idade: "32",
//     profissao: "Atriz"
// };

// let pessoa4 = {
//     nome = "carlos",
//     idade = 19,
//     profissao = "padeiro"
//}

//Resposta
enum Profissao {
  'Atriz',
  'Padeiro'
}

interface Pessoa {
  nome: string,
  idade: number,
  profissao: Profissao
};
const pessoa1 = {} as Pessoa;
  pessoa1.nome =  'Maria';
  pessoa1.idade = 29;
  pessoa1.profissao = Profissao.Atriz;

const pessoa2: Pessoa = {
  nome: 'Roberto',
  idade: 19,
  profissao: Profissao.Padeiro
} 

const pessoa3 = {} as Pessoa;
  pessoa1.nome =  'Laura';
  pessoa1.idade = 32;
  pessoa1.profissao = Profissao.Atriz;

  const pessoa4 = {} as Pessoa;
  pessoa1.nome =  'Carlos';
  pessoa1.idade = 19;
  pessoa1.profissao = Profissao.Padeiro;
