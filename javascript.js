
/* script.js */
const kvadraticka = {
  a: 0,
  b: 0,
  c: 0,

  nastav(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  },

  vypocet() {
    if (this.a === 0) {
      if (this.b === 0) {
        return this.c === 0
          ? "Rovnice má nekonečně mnoho řešení."
          : "Rovnice nemá žádné řešení.";
      } else {
        const x = -this.c / this.b;
        return `Lineární rovnice: x = ${x.toFixed(2)}`;
      }
    }

    const D = Math.pow(this.b, 2) - 4 * this.a * this.c;

    if (D > 0) {
      const x1 = (-this.b + Math.sqrt(D)) / (2 * this.a);
      const x2 = (-this.b - Math.sqrt(D)) / (2 * this.a);
      return `Dvě reálná řešení: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;
    } else if (D === 0) {
      const x = -this.b / (2 * this.a);
      return `Jedno dvojnásobné řešení: x = ${x.toFixed(2)}`;
    } else {
      const re = (-this.b / (2 * this.a)).toFixed(2);
      const im = (Math.sqrt(-D) / (2 * this.a)).toFixed(2);
      return `Komplexní řešení: x₁ = ${re} + ${im}i, x₂ = ${re} - ${im}i`;
    }
  }
};

document.getElementById("spocitat").addEventListener("click", function () {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById("vysledek").textContent = "Zadej všechna čísla!";
    document.getElementById("vysledek").className = "alert alert-danger mt-3 text-center";
    return;
  }

  kvadraticka.nastav(a, b, c);
  const vysledek = kvadraticka.vypocet();

  document.getElementById("vysledek").textContent = vysledek;
  document.getElementById("vysledek").className = "alert alert-success mt-3 text-center";
});
