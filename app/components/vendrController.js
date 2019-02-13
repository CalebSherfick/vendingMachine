//PRIVATE
import VendrService from "./vendrService.js";

let vendrService = new VendrService()



function draw() {
  console.log(4)
  let b = vendrService.Balance
  document.getElementById('bal').innerText = b.toFixed(2)
  console.log(6)


  let template = ''
  for (let key in vendrService.Snacks) {
    if (vendrService.Snacks.hasOwnProperty(key)) {
      const snack = vendrService.Snacks[key];
      template += snack.getCard();
    }
  }
  document.getElementById('cards').innerHTML = template
}




//PUBLIC
export default class VendrController {
  constructor() {
    //8
    console.log('Building Controller')
    draw()
  }
  addQuarter() {
    console.log(1)
    vendrService.addQuarter()
    console.log(3)
    draw()
  }
  purchase(itemNum) {
    let x = vendrService.purchase(itemNum)
    //CALL DRAW PURCHASED ITEM

    draw()
  }
}


// document.getElementById('deposit').innerHTML = `<img src="${}">`