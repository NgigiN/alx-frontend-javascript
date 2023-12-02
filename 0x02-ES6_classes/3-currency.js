export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set code(cd) {
    this._code = cd;
  }

  get code() {
    return this._code;
  }

  set name(nm) {
    this._name = nm;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
