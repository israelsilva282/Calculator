function Calculadora() {
  this.display = document.querySelector(".display");
  this.start = () => {
    this.captureClick();
    this.captureEnter();
  };
  this.captureEnter = () => {
    if (
      this.display.addEventListener("keypress", (e) => {
        if (e.keyCode === 13) {
          this.equal();
        }
      })
    );
  };
  this.captureClick = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear(el);
      if (el.classList.contains("btn-del")) this.delete(el);
      if (el.classList.contains("btn-eq")) this.equal();
    });
  };
  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };
  this.clear = (el) => (this.display.value = "");
  this.delete = (el) => (this.display.value = this.display.value.slice(0, -1));
  this.equal = () => {
    try {
      const resultado = eval(this.display.value);
      if (!resultado) {
        alert("Valores inválidos");
        return;
      }
      this.display.value = resultado;
    } catch (e) {
      alert("Resultado inválido");
      return;
    }
  };
}

const calculadora = new Calculadora();
calculadora.start();
