export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
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

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
