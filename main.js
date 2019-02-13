// Our bakery

// a balance to track the money we have
let balance = 0;

// We want to sell different items
function Item(name, price, stock, calorieCount, type) {
  // Items will all have:
  // Price
  // Name
  // Stock
  // Calorie count
  // Type
  this.name = name;
  this.price = price;
  this.stock = stock;
  this.calorieCount = calorieCount;
  this.type = type;
  // we want a function to give an item description
  // the name, the cost, the calorie count, the type and the amount in stock
  this.describe = function() {
    const description = `${this.name}: £${this.price.toFixed(2)} ${
      this.calorieCount
    }kCal ${this.type} - ${this.stock}`;
    console.log(description);
  };

  // we want a function to be able to sell an item
  //      check the stock levels are enough for the quantity
  //      if we don't have enough, handle that situation
  //      give away stock
  //      take in money = price * quantity
  this.sell = function(quantity) {
    if (this.stock < quantity) {
      console.log(
        `We dont have ${quantity} of ${this.name} right now. Choose less.`
      );
      return;
    }
    this.stock -= quantity;
    const cost = this.price * quantity;
    balance += cost;
  };
}

const bread = new Item("Tiger Bread", 2.5, 10, 500, "Hot");
const doughnut = new Item("Jam Doughnut", 0.5, 20, 800, "Cold");
const croissant = new Item("Plain Croissant", 1.75, 5, 600, "Hot");
