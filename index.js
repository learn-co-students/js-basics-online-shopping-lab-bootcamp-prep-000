var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor((Math.random()*100)+1);
  cart.push({[item]: itemPrice});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var fullCart = [];
  if(cart.length === 0){
    console.log('Your shopping cart is empty.');
  } else{
    for(var x = 0; x<cart.length; x++){
      var object = cart[x];
      var itemName = Object.keys(object);
      var itemPrice = object[itemName];
        if(cart.length === 1){
          console.log('In your cart, you have ' + itemName + ' at $' + itemPrice + '.');
        }
        if ((cart.length - 1 === x)){
          fullCart.push(`and ${itemName} at $${itemPrice}`);
        }
        else {
          fullCart.push(`${itemName} at $${itemPrice}`);
        }
    }
    if (cart.length === 2){
      console.log(`In your cart, you have ${fullCart.join(' ')}.`)
}
  else{
    console.log(`In your cart, you have ${fullCart.join(', ')}.`)
  }
  }

}

function total() {
  var total = 0
  for(var a = 0; cart.length>a; a++){
    var object = cart[a];
    var itemName = Object.keys(object);
    var itemPrice = object[itemName];
    total = total + itemPrice;
  }
  return total;
}

function removeFromCart(item) {
    for(var f = 0; f < cart.length; f++){
      if(cart[f].hasOwnProperty(item)){
        cart.splice(f,1);
        return viewCart();
      }
    }
    console.log('That item is not in your cart.');
    return viewCart();
  }


function placeOrder(cardNumber) {
  if(Number.isInteger(cardNumber)){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart.splice(0)

  }
  else{
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
