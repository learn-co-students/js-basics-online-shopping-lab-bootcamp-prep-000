var cart;

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}

function getCart(){
  return cart;
}

function addToCart(item){
  const price = Math.floor(Math.random() * 100);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  const l = cart.length;
  if (l !== 0){
    var printCart = "In your cart, you have ";
    for (var i = 0; i < l; i++){
      if (i > 0) printCart += ", ";
      for (var item in cart[i])
        printCart +=`${item} at $${cart[i][item]}`;
    }
    printCart += ".";
    console.log(printCart);
  } else {
    console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(item){
  for (var i = 0, l = cart.length; i < l; i++) {
      if (cart[i].hasOwnProperty(item)){
        //delete cart[i][item];
        cart.splice(i,1);
        return cart;
      }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber){
  if (cardNumber !== undefined){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
}

placeOrder();
