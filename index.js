var cart = [];

function getCart(){
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}


function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if(cart.length === 0){
    console.log("Your shopping cart is empty.");
    return;
  }

  var pairs = []
  for(var i = 0; i < cart.length; i++){
    for(var item in cart[i]){
      let price = cart[i][item];
      pairs.push(`${item} at $${price}`);
    }
  }
  console.log("In your cart, you have " + pairs.join(", ") + ".");
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

function removeFromCart(itemToRemove){
  for(var i = 0; i < cart.length; i++){
      if(cart[i].hasOwnProperty(itemToRemove)) {
        cart.splice(i, 1);
        return cart;
      }
    }
  // Item not found!
  console.log("That item is not in your cart.");
}

function placeOrder(ccNumber){
  if(ccNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
    return;
  }

  let totalCost = total();
  console.log(`Your total cost is $${totalCost}, which will be charged to the card ${ccNumber}.`);
  setCart([]);
}
