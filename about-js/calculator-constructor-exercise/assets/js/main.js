function Calc() {
  this.display = document.querySelector(".display");

  this.start = () => {
    this.captureClicks();
    this.captureEnter();
  };

  this.captureEnter = () => {
    document.addEventListener("keypress", (e) => {
      if (e.keyCode === 13) {
        this.doMath();
      }
    });
  };

  this.captureClicks = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) {
        this.addDisplayNum(el);
      }
      if (el.classList.contains("btn-div")) {
        this.operationDiv(el);
      }
      if (el.classList.contains("btn-sum")) {
        this.operationSum(el);
      }
      if (el.classList.contains("btn-tim")) {
        this.operationTimes(el);
      }
      if (el.classList.contains("btn-min")) {
        this.operationMin(el);
      }
      if (el.classList.contains("btn-clear")) {
        this.clear();
      }
      if (el.classList.contains("btn-del")) {
        this.del();
      }
      if (el.classList.contains("btn-eq")) {
        this.doMath();
      }
    });
  };

  this.doMath = () => {
    try {
      const calc = eval.this.display.value;
      if (!calc) {
        alert("Conta inválida");
        return;
      }
      this.display.value = calc;
    } catch (e) {
      alert("Conta inválida");
      return;
    }
  };

  this.addDisplayNum = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.operationDiv = (el) => {};
  
  this.clear = () => {
    this.display.value = "";
  };
  this.del = () => {
    this.display.value = this.display.value.slice(0, -1);
  };
}

const calculator = new Calc();
calculator.start();
