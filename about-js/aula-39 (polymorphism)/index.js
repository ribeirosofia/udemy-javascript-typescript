function Account(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Account.prototype.sacar = function (val) {
  if (this.saldo > val) {
    this.verSaldo();
    return;
  } else {
    console.log(`Saldo insuficiente: ${this.saldo}`);
  }
  this.saldo -= val;
  this.verSaldo();
};
Account.prototype.depositar = function (val) {
  this.saldo += val;
  this.verSaldo();
};
Account.prototype.verSaldo = function () {
  console.log(
    `Ag/C:${this.agencia}/${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}`
  );
};

function CC(agencia, conta, saldo, limite) {
  Account.call(this, agencia, conta, saldo);
  this.limite = limite;
}

CC.prototype.sacar = function (val) {
  if (val > this.saldo + this.limite) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }
  this.saldo -= val;
  this.verSaldo();
};

function CP(agencia, conta, saldo) {
  Account.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Account.prototype);
CP.prototype.constructor = CP;

const cc = new CC(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);

console.log("********");

const cp = new CP(12, 33, 0);
cc.depositar(10);
cc.sacar(110);
