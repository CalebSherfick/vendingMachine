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

  get Snacks() {
    return _vm.snacks
  }

  addQuarter() {
    console.log(2)
    _vm.balance += .25
  }

  purchase(itemNum) {
    console.log('what?')
    let targetSnack = _vm.snacks[itemNum]
    if (targetSnack.price <= _vm.balance) {
      _vm.balance -= targetSnack.price
      itemImg(itemNum)
    }
  }

  itemImg(itemNum) {
    return _vm.snacks[itemNum].img
  }



}