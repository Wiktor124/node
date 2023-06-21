class Operaciones {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  validarNumeros() {
    return new Promise((resolve, reject) => {
      isNaN(this.a) || isNaN(this.b) ? reject('a y b deben ser números!') : resolve();
    });
  }

  async sumar() {
    return await this.validarNumeros().then(() => Promise.resolve(this.a + this.b));
  }

  async resta() {
    return await this.validarNumeros().then(() => Promise.resolve(this.a - this.b));
  }

  async multiplicacion() {
    return await this.validarNumeros().then(() => Promise.resolve(this.a * this.b));
  }

  async division() {
    return await this.validarNumeros().then(() => {

     return this.b === 0 
        ? Promise.reject('Error, no se puede dividir entre cero')
        : Promise.resolve(this.a / this.b);
    });
  }
}


module.exports = { Operaciones };