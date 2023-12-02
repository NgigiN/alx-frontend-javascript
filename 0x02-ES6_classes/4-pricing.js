import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(amt) {
    this._amount = amt;
  }

  get amount() {
    return this._amount;
  }

  set currency(crc) {
    this._currency = crc;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
