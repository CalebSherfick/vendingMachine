import Snack from "./snack.js";

export default class VendingMachine {
  constructor(user) {
    this.snacks = {
      a1: new Snack('Cheetos', 'a1', 1.00, 'assets/cheetos.png'),
      a2: new Snack('Snickers', 'a2', 1.50, 'assets/snickers.png'),
      a3: new Snack('Mountain Dew', 'a3', 2.00, 'assets/soda.png')
    }
    this.user = user
    this.balance = 0
  }
}