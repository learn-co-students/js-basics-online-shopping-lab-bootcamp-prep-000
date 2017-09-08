var cart = [];

function getCart() {
return cart;
}

function setCart(c) {
  cart = c; //gets reassigned!
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  cart.push(new Object({[itemName]: itemPrice}));
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
  } else {
    var statement = "In your cart, you have ";

    if(cart.length == 1){
      var itemName = Object.keys(cart[0])[0] ;
      var cost = cart[0][itemName];

      statement += `${itemName} at $${cost}.`;
      // [{bananas: 66}]
    } else if (cart.length === 2) {
      var itemName = Object.keys(cart[0])[0] ;
      var cost = cart[0][itemName];
      var secondItem = Object.keys(cart[1])[0];
      var secondCost = cart[1][secondItem];
      statement += `${itemName} at $${cost} and ${secondItem} at $${secondCost}.`;
    } else if (cart.length >= 3) {
      var item = Object.keys(cart[cart.length -1])[0];
      var cost = cart[cart.length - 1][item];

      for (var i = 0; i < cart.length - 1; i++) {
          var currentItem = cart[i];

          for (var itemName in currentItem) {
            statement += `${itemName} at $${currentItem[itemName]}, `;
          }
      }

      statement += `and ${item} at $${cost}.`;

    }
    console.log(statement);
  }
}

function total() {
  var totalValue = 0;
  for (var i = 0; i < cart.length; i++) {
    var currentItem = cart[i];

    for (var name in currentItem) {
      totalValue += currentItem[name];
    }
  }
  return totalValue;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var currentItem = cart[i]; //{banana: 44}

    for (var itemName in currentItem) {
      if (item === itemName) {
        cart.splice(i, 1)
       return cart;
      }
    }
  }
  console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
    return cart;
  }
}
