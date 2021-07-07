var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item_object = {};
  item_object['itemName'] = item;
  item_object['itemPrice'] = Math.floor(Math.random() * 100);
  cart.push(item_object);
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  } else {
    var cart_list = "In your cart, you have ";
    if (cart.length === 1) {
      var item = cart[0];
      return cart_list + `${item['itemName']} at $${item['itemPrice']}.`;
    } else {
      for (var i = 0; i < cart.length - 1; i++) {
        item = cart[i];
        cart_list = cart_list + `${item['itemName']} at $${item['itemPrice']}, `;
      }
      var last_item = cart[cart.length - 1];
      cart_list = cart_list + `and ${last_item['itemName']} at $${last_item['itemPrice']}.`;
      return cart_list;
    }
  }
}

function total() {
  var total_value = 0;
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    total_value = total_value + item['itemPrice'];
  }
  return total_value;
}

function removeFromCart(item) {
  var present = false;
  for (var i = 0; i < cart.length; i++) {
    var cart_item = cart[i];
    if (cart_item.itemName === item) {
      cart.splice(i, 1);
      present = true;
    }
  }
  if (present === false) {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var total_cost = total()
    cart = []
    return `Your total cost is $${total_cost}, which will be charged to the card ${cardNumber}.`
  }
}
