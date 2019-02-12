import Snack from "./snack.js";

export default class VendingMachine {
  constructor(user) {
    this.snacks = {
      a1: new Snack('Cheetos', 'A1', 1),
      a2: new Snack('Snickers', 'A2', 1.5),
      a3: new Snack('Mountain Dew', 'A3', 2)
    }
    this.user = user
    this.balance = 0
  }
}