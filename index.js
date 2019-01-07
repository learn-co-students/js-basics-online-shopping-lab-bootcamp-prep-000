var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor((Math.random() * 10)) - 1;
 var newItem = {[item]: price};
 cart.push(newItem);
 console.log(cart);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

// addToCart('ice cream');

function viewCart() {

  var itemsInCart = "In your cart, you have";
  for (var i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i]).join("");
      var price = cart[i][item];
      if (i == 0) {
          itemsInCart += ` ${item} at $${price}`;
      } else if ((i == 1) && (cart.length == 2)) {  // for 2-item cart
          itemsInCart += ` and ${item} at $${price}`;
      } else if ((i != 0) && (i == cart.length - 1)) { // last item
          itemsInCart += `, and ${item} at $${price}`;
      } else if ((i >= 1) && (cart.length > 2)) { // all other items
          itemsInCart += `, ${item} at $${price}`;
      }
  }
  itemsInCart += ".";
  if (cart.length == 0) {
      console.log("Your shopping cart is empty.");
  } else {
      console.log(itemsInCart);
  };
};


function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
      var item = Object.keys(cart[i]).join("");
      var price = cart[i][item];
      total += price;
  }
  return total;
}

// cart = [ { "bananas": 17 }, { "pancake batter": 5 }, { "eggs": 49 }];

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
        cart.splice(i, 1);
        // console.log(cart);
        return cart;
    }
  }
  console.log("That item is not in your cart.");
}

// removeFromCart("yams");
// removeFromCart("bananas");

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
      console.log("Sorry, we don't have a credit card on file for you.");
  } else {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
      cart = [];
  }
}
