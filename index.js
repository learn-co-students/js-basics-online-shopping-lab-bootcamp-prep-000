var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var toCart = {[item]: Math.floor(Math.random()*100)}
 cart.push(toCart);
 console.log(item  + " has been added to your cart.");
 return cart;
}

function viewCart() {
  if (cart.length<1){
    console.log("Your shopping cart is empty.")
  }
  var virtualCart = ["In your cart, you have"];
  for(var i = 0; i < cart.length; i++){
    var scannedItem = cart[i], itemName = Object.keys(scannedItem), itemPrice = scannedItem[itemName];
    if(cart.length === 1){
      virtualCart.push(itemName + " at $" + itemPrice + ".");
      console.log(virtualCart.join(" "));
    }
    if(cart.length === 2 && i === 0){
      virtualCart.push(itemName + " at $" + itemPrice + " and");
      console.log(virtualCart.join(" "));
    } else if (cart.length === 2 && i === 1){
      virtualCart.push(itemName + " at $" + itemPrice + ".");
      console.log(virtualCart.join(" "));
    }
    if(i < cart.length-1 && cart.length > 2){
      virtualCart.push(itemName + " at $" + itemPrice + ",");
    } else if (i === cart.length-1 && cart.length > 2) {
      virtualCart.push("and " + itemName + " at $" + itemPrice + ".");
    }
  }
  console.log(virtualCart.join(" "));
}

function total() {
  var virtualCart = [];
  for(var i = 0; i < cart.length; i++){
    var scannedItem = cart[i], itemPrice = scannedItem[Object.keys(scannedItem)];
    virtualCart.push(itemPrice);
  }
  var totalPrice = 0;
  for(var j = 0; j<virtualCart.length; j++){
  	totalPrice += virtualCart[j]
  }
  return totalPrice;
}

function removeFromCart(item) {
  var inCart = false;
  for(var i = 0; i<cart.length; i++){
      if (cart[i].hasOwnProperty(item)){
        inCart = true;
        cart.splice(i, 1);
        return cart;
      }
  }
  if (inCart === false){
    console.log("That item is not in your cart.");
    return cart;
  }

}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}
