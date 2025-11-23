import Pessoa from "./Pessoa.mjs";
import IE from "./IE.mjs";

export default class PJ extends Pessoa {
  #cnpj;
  #dataRegistro;
  #ie;

  setCNPJ(cnpj) {
    if (cnpj && cnpj.length >= 14) {
      this.#cnpj = cnpj;
      return true;
    }
    return false;
  }

  getCNPJ() {
    return this.#cnpj;
  }

  setDataRegistro(dataRegistro) {
    if (dataRegistro) {
      this.#dataRegistro = dataRegistro;
      return true;
    }
    return false;
  }

  getDataRegistro() {
    return this.#dataRegistro;
  }

  setIE(ie) {
    if (ie instanceof IE) {
      this.#ie = ie;
      ie.setPJ(this);
      return true;
    }
    return false;
  }

  getIE() {
    return this.#ie;
  }
}
