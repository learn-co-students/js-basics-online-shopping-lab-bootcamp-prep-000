var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const itemP = Math.floor(Math.random() * Math.floor(100));
  var objitem = {itemName: item, itemPrice: itemP};
  cart.push(objitem);
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length < 1){
    return "Your shopping cart is empty."
  } else if (cart.length === 1){
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  } else if (cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var cartstring = "In your cart, you have";
    for (let i = 0; i < cart.length - 1; i++){
    cartstring = `${cartstring} ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    cartstring = `${cartstring} and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
    return cartstring;
    
  }
}

function total() {
  // write your code here
  let carttotal = 0;
  for (let i = 0; i < cart.length; i++){
    carttotal = carttotal + cart[i].itemPrice;
  }
  return carttotal;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
  
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalprice = total();
    cart.splice(0);
    return `Your total cost is $${totalprice}, which will be charged to the card ${cardNumber}.`
  }
}
