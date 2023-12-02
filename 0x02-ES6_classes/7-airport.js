export default class Airport {
  constructor(name, string) {
    this._name = name;
    this._string = string;
  }

  Airport.prototype.toString = function airportToString() {
    return `[object ${this._code}]`;
  };
}
