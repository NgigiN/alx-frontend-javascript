export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set code(cd) {
    if (typeof cd !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = cd;
  }

  get code() {
    return this._code;
  }

  set name(nm) {
    if (typeof nm !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = nm;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
