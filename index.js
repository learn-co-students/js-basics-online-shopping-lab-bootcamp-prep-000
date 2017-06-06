var cart= [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  cart.push({[item]:generatePrice(0,100)});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  var viewMessage = "In your cart, you have";

  if (cart.length == 0) {
    console.log('Your shopping cart is empty.');
  } else {
    for (var item of cart) {
      for (var name in item) {
        viewMessage += ` ${name} at $${item[name]},`;
      }
    }
    viewMessage = viewMessage.replace(/,$/,".");
    console.log(viewMessage);
  }
}

function removeFromCart(item) {
  var itemsList = getListOfItems(cart);
  var index = itemsList.indexOf(item); // not supported in IE

  if (index == -1) {
    console.log("That item is not in your cart.")
  } else {
    cart.splice(index,1);
    return cart;
  }

}

function placeOrder(card) {
  if (card) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`);
    cart = [];
  } else {
    console.log("We don\'t have a credit card on file for you to place your order.");
  }
}

//extra little utility functions
var generatePrice = (min, max)=> Math.round((Math.random() * (max - min) + min));

function getListOfItems(cart) {
  var list = [];
  for (var product of cart) {
    for (var label in product) {
      list.push(label);
    }
  }
  return list;
}
