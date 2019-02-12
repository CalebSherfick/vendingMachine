//PRIVATE
import VendrService from "./vendrService.js";

let vendrService = new VendrService()



function draw() {
  console.log(4)
  let b = vendrService.Balance
  document.getElementById('bal').innerText = b.toFixed(2)
  console.log(6)
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
}