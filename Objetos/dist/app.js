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
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
})(Profissao || (Profissao = {}));
;
var pessoa1 = {};
pessoa1.nome = 'Maria';
pessoa1.idade = 29;
pessoa1.profissao = Profissao.Atriz;
var pessoa2 = {
    nome: 'Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
};
var pessoa3 = {};
pessoa1.nome = 'Laura';
pessoa1.idade = 32;
pessoa1.profissao = Profissao.Atriz;
var pessoa4 = {};
pessoa1.nome = 'Carlos';
pessoa1.idade = 19;
pessoa1.profissao = Profissao.Padeiro;
