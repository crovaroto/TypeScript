// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var saldo = 0;
limparSaldo();
function somarAoSaldo(soma) {
    saldo += soma;
    campoSaldo.innerHTML = saldo.toString();
    limpaCampoSoma();
}
function limpaCampoSoma() {
    soma.value = '';
}
function limparSaldo() {
    saldo = 0;
    campoSaldo.innerHTML = saldo.toString();
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
