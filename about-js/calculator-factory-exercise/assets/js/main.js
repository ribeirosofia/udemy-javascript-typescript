const calc = () => {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),

    start() {
      this.btnClick();
      this.pressEnter();
    },

    pressEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.doMath();
        }
      });
    },

    doMath() {
      const calc = this.display.value;
      try {
        calc = eval(calc);
        if (!calc) {
          alert("Conta inválida");
        }
        this.display.value = String(calc);
      } catch (e) {
        alert("Conta inválida");
      }
    },

    clearDisplay() {
      this.display.value = "";
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    doMath() {},

    btnClick() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.deleteOne();
        }

        if (el.classList.contains("btn-eq")) {
          this.doMath();
        }
      });
    },

    btnDisplay(value) {
      this.display.value += value;
    },
  };
};

const calculate = calc();
calculate.start();
