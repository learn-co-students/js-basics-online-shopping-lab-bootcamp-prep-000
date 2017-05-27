var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random()*100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart(){
  var message = "In your cart, you have";
  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
  } else{
    for (var i = 0, l = cart.length; i < l; i++){
      for (var item in cart[i]){
        message += ` ${item} at $${cart[i][item]}`
        if (i != cart.length - 1){
          message += ",";
        } else{
          message += ".";
        }
      }
    }
  }

  console.log(message);
}

function removeFromCart(item){
  var truth = false;
  for (var i = 0; i < cart.length; i++){
    for (var name in cart[i]){
      if (cart[i].hasOwnProperty(item)){
        cart.pop(item);
        truth = true;
        return cart;
      }
    }
  }

  if (truth === false){
    console.log("That item is not in your cart.");
  }
}

function placeOrder(number){
  if (number === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  } else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`);
    cart = [];
    return cart;
  }
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
