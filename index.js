var cart = [];
function getCart () {
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random()*100);
cart.push({[item]:price});
console.log(`${item} has been added to your cart.`);
return cart;
}

function viewCart() {
  var itemsInCart = `In your cart, you have `;
  if (cart.length > 0) {
    for (let i = 0; i < cart.length; i++) {
      for (var item in cart[i]) {
        itemsInCart += `${item} at $${cart[i][item]}`;
      }
      if (i < cart.length - 1){
        itemsInCart += `, `;
      } else {
        itemsInCart += `.`;
      }
    }
    console.log(itemsInCart);
  } else {
    console.log("Your shopping cart is empty.");
  }
}
function removeFromCart(itemName) {
  for (let i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(itemName)) {
        cart.splice([i],1)
        return cart
      }
    }
    console.log("That item is not in your cart.")
  }

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  } else {
    console.log(`We don't have a credit card on file for you to place your order.`);
  }
    cart.splice(0, cart.length);
}
function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += parseInt(cart[i][item])
    }
  }

  return t
}
