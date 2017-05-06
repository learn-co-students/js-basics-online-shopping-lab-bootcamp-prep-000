var cart = [];

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart = cart.concat({[item]: price});
  console.log(item + " has been added to your cart.");
  return cart;
}

addToCart("pizza");

function viewCart() {
      if (cart.length === 0) {
      console.log("Your shopping cart is empty.");
      }
      else {
      let cartStr = cart.map((obj) => {
        let item = Object.keys(obj).join("");
        return item + " at $" + obj[item];
      });
      console.log("In your cart, you have "  + cartStr.join(", ") + ".");
      }
}

function removeFromCart(item) {
  let newCart = cart, remove = false;
  newCart = newCart.filter((obj) => {
    if (obj.hasOwnProperty(item)) {
      remove = true;
      return false;
    }
    else {
      return true;
    }
  });
  if(remove === false) {
    console.log("That item is not in your cart.")
  }
  else {
    cart = newCart;
    return cart;
  }
}

function placeOrder(creditcard) {
  if(!creditcard) {
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + creditcard + ".");
  }
  cart = [];
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
