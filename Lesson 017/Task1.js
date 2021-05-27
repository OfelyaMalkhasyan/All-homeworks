class CoffeeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
  }

  addOrder(order) {
    let menuList = this.menu.map((element) => element.name);

    if (menuList.includes(order)) {
      this.orders.push(order);
      console.log("Order Added!");
    } else {
      console.log("This item is currently unavailable!");
    }
  }

  fulfillOrder() {
    if (this.orders.length !== 0) {
      let readyOrder = this.orders.shift();
      console.log(`The ${readyOrder} is readyOrder!`);
    } else {
      console.log("All orders have been fulfilled!");
    }
  }

  listOrders() {
    return this.orders;
  }

  dueAmount() {
    let sum = this.orders.reduce((acc, current) => {
      this.menu.forEach((element) => {
        if (element.name === current) {
          acc += element.price;
        }
      });

      return acc;
    }, 0);

    return sum;
  }

  cheapestItem() {
    let cheapest = this.menu[0];

    this.menu.forEach(
      (element) =>
        (cheapest = cheapest.price > element.price ? element : cheapest)
    );

    return cheapest.name;
  }

  drinksOnly() {
    return this.menu
      .filter((element) => element.type === "drink")
      .map((element) => element.name);
  }

  foodOnly() {
    return this.menu
      .filter((element) => element.type === "food")
      .map((element) => element.name);
  }
}

let menu = [
  { name: "iced coffee", type: "drink", price: 2000 },
  { name: "cinnamon roll", type: "food", price: 1500 },
  { name: "cake", type: "food", price: 1800 },
  { name: "ice-cream", type: "food", price: 1200 },
  { name: "milk shake", type: "drink", price: 1300 },
  { name: "coffee", type: "drink", price: 1000 },
  { name: "tea", type: "drink", price: 800 },
];

let tcs = new CoffeeShop("tcs", menu);

tcs.addOrder("hot cocoa");
tcs.addOrder("iced tea");
tcs.addOrder("cinnamon roll");
tcs.addOrder("iced coffee");
tcs.listOrders;
tcs.dueAmount();
tcs.fulfillOrder();
tcs.fulfillOrder();
tcs.fulfillOrder();
tcs.listOrders();

tcs.dueAmount();

tcs.cheapestItem();
tcs.drinksOnly();
tcs.foodOnly();
