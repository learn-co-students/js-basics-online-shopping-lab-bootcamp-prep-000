var cart = [{bananas: 15}, {avocados: 12}, {lettuce:  5}];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.ceil(Math.random() * 100);
  var obj = new Object({});
  obj[item] = itemPrice;
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}


function viewCart() {
  var string = `In your cart, you have `;

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else {
      for (var i = 0, n = cart.length; i < n; i++) {
        for (var key in cart[i]) {
          if (cart.length === 1) {
            string += `${key} at $${cart[i][key]}.`;
          } else if (cart.length === 2) {
              string += `${key} at $${cart[i][key]}`;
            if (i == cart.length - 2 ) {
              string += ` and `;
            } else if (i == cart.length - 1) {
              string += "."            }
          } else {
              string += `${key} at $${cart[i][key]}`;
              if (i !== cart.length - 2 && i !==cart.length - 1) {
                string += ", ";
              } else if (i == cart.length - 2){
                  string += ", and ";
              } else {
                string += "."
              }
            }

        }
      }
    }
      console.log(string);
}

viewCart();

function total() {
  var totalCost = 0;
  for (var i = 0; i < cart.length; i++) {
    for (var key in cart[i]) {
      var value = cart[i][key];
      totalCost += value ;
    }
  }
  return totalCost;
}

function removeFromCart(item) {

  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      var itemInCart = true;
      return cart;
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber > 1000000) {
    var cartTotal = total();
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
    for (var i = 0; i < cart.length; i++) {
      cart = [];
    }
    return cart;
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
