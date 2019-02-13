export default class Snack {
  constructor(name, location, price, img) {
    this.name = name
    this.location = location
    this.price = price
    this.img = img
  }
  getCard() {
    return `
    <div class="col-md-4">
      <div class="card">
        <img class="card-img-top" src="${this.img}">
          <div class="card-body d-flex justify-content-center align-items-center flex-column">
            <h4 class="card-title">${this.location.toUpperCase()}</h4>
            <h1 class="card-text">
              $${this.price.toFixed(2)}
          </h1>
            <a onclick="app.controllers.vendrController.purchase('${this.location}')" class="btn btn-primary w-100">Purchase</a>
          </div>
      </div>
      </div>`
  }
}