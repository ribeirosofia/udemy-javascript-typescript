// 705.484.450-52 070.987.720-03

/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0  = 237

11 - (237 % 11) = 5 (First digit)
If the first digit is bigger than 9, it is considered 0 value

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (First digit)
If the first digit is bigger than 9, it is considered 0 value
*/

function ValidatorCPF(sentCPF) {
  Object.defineProperty(this, "cleanCPF", {
    enumerable: true,
    get: function () {
      return sentCPF.replace(/\D+/g, "");
    },
  });
}

ValidatorCPF.prototype.validate = function () {
  if (typeof this.cleanCPF === "undefined") return false;
  if (this.cleanCPF.length !== 11) return false;
  if (this.isSequence()) return false;

  const partialCPF = this.cleanCPF.slice(0, -2);
  const digit1 = this.createDigits(partialCPF);
  const digit2 = this.createDigits(partialCPF + digit1);

  const newCPF = partialCPF + digit1 + digit2;
  return newCPF === this.cleanCPF;

  console.log(newCPF);
};

ValidatorCPF.prototype.createDigits = function (partialCPF) {
  const cpfArray = Array.from(partialCPF);
  let regressive = cpfArray.length + 1;
  const total = cpfArray.reduce((ac, val) => {
    ac += regressive * Number(val);
    regressive--;
    return ac;
  }, 0);

  const digit = 11 - (total % 11);
  return digit > 9 ? "0" : String(digit);
};

ValidatorCPF.prototype.isSequence = function () {
  const sequence = this.cleanCPF[0].repeat(this.cleanCPF.length);
  return sequence === this.cleanCPF;
};

const cpf = new ValidatorCPF("070.987.720-03");

cpf.validate() ? console.log("CPF válido") : console.log("CPF inválido");
