import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency; 
  }

  // Method
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // Static method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  // Amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') throw new TypeError('amount must be a number');
    this._amount = value;
  }

  // Currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) throw new TypeError('currency must be a Currency instance');
    this._currency = value;
  }
}
