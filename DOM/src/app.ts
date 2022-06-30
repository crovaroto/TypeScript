// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

let saldo = 0;

limparSaldo();

function somarAoSaldo(soma: number) {
    saldo += soma;
    campoSaldo.innerHTML = saldo.toString();
    limpaCampoSoma();
}

function limpaCampoSoma() {
  soma.value = ''
}

function limparSaldo() {
    saldo = 0;
    campoSaldo.innerHTML = saldo.toString();
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});