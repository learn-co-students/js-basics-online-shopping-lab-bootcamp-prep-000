var cart = [];

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

function addToCart(item){
  console.log(`${item} has been added to your cart.`)
  cart.push({[item] : Math.floor(Math.random()*100)})
  return cart
}

function viewCart(){
  var varstr = 'In your cart, you have ';
  var itemName = "";
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      itemName = Object.keys(cart[i])[0];
      varstr = varstr + `${itemName} at $${cart[i][itemName]}`;
      if (i == cart.length - 1) {
        varstr = varstr + ".";
      }
      else {
        varstr = varstr + ", ";
      }
    }
    console.log(varstr);
  }
  else {
    console.log('Your shopping cart is empty.');
  }
}

function removeFromCart(itemName){
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(`${itemName}`)) {
      cart.splice(i, 1);
      return(cart);
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    setCart([]);
  }
}
