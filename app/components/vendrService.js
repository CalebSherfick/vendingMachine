//PRIVATE
import VendingMachine from '../models/vendingMachine.js';



//DATA HERE
let _vm = new VendingMachine('Caleb')



//PUBLIC
export default class VendrService {
  constructor() {
    //5
  }

  get Balance() {
    console.log(5)
    console.log('someone got the balance')
    return _vm.balance
  }

  addQuarter() {
    console.log(2)
    _vm.balance += .25
  }
  withdrawQuarter() {
    _vm.balance -= .25
    if (_vm.balance < 0) {
      _vm.balance -= 25
    }
  }
}