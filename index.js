var cart = [];

var price = Math.floor(Math.random() * (100)) + 1;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * (100)) + 1;
  var items = { itemName: `${item}` , itemPrice: price};
  cart.push(items);
  return (`${item} has been added to your cart.`);
}

function viewCart() {
  var myCart = [];

  for (var i = 0; i < cart.length; i++) {
      var item = cart[i].itemName;
      var price = cart[i].itemPrice;
      myCart.push(` ${item} at $${price}`);
    }
    
  if (myCart.length === 0){
    return ('Your shopping cart is empty.');
  } else if (myCart.length === 1) {
    return ('In your cart, you have' + myCart + '.');
  } else {
    var myCartAnd = myCart.slice(0 , myCart.length - 1);
    myCartAnd.push(' and' + myCart.pop());
    return ('In your cart, you have' + myCartAnd + '.');
  }
}

function total() {
  var tot = 0;
  
  for (var i = 0; i < cart.length; i++){
    tot += (cart[i].itemPrice); 
    }  
    
  return tot;
}

function removeFromCart(item) {
  let itemInCart = false;
  for (var i = 0; i < cart.length; i++){
    if (cart[i].itemName == item){
      itemInCart = true;
      cart.splice(i, 1);
      return cart;
    }
  } 
   if (!itemInCart){
      return ('That item is not in your cart.');
   }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return ("Sorry, we don't have a credit card on file for you.")
  } else {
    var sumTotal = total();
    cart.splice(0, cart.length);
    return (`Your total cost is $${sumTotal}, which will be charged to the card ${cardNumber}.`);
  }
  
}