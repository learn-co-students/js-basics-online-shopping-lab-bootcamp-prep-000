var cart = [];

function addToCart(item) {
  cart.push({[item]: Math.floor(Math.random() * 100)});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

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
  return cart
}



function viewCart() {
  if (cart[0]) {
    var cartList = [];
    for (var i = 0; i < cart.length; i++) {
        for (var x in cart[i]) {
          cartList.push(` ${x} at $${cart[i][x]}`)
        }
    }
    var cartList = cartList.toString();
    console.log("In your cart, you have" + cartList + ".");
  } else {
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(item){
  var count = 0;
   for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
        count +=1;
        cart.pop(cart[i]);
        return cart;
      }
   }
  if (count === 0) {
    console.log("That item is not in your cart.")
  }
}

function placeOrder(credit) {
  if (credit) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${credit}.`)
    cart = [];
    return cart;
  } else {
    console.log("We don't have a credit card on file for you to place your order.") 
  }
}
