var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor (Math.random() *100) +1; 
  var cartItem = {itemName : item, itemPrice: price}
  cart.push(cartItem);
  for (var i=0; i < cart.length -1; i++){
    if (cart[i] > cart[i+1]){
      break;
    }
  }
  return (`${item} has been added to your cart.`)
}

function viewCart() {
  if (cart.length === 0) {
    return (`Your shopping cart is empty.`);
  }
  else {
    var viewArray = [];
    for (var i=0; i < cart.length; i++){
      viewArray.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
      if (cart.length === 1) {
        return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`)
      }
      if (cart.length === 2){
        return (`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
      }
      else {
        var last = viewArray.pop();
        return (`In your cart, you have ${viewArray.join(", ")}, and ${last}.`)
    }
  }
}

function total() {
  var prices = []
  for (var i=0; i < cart.length; i++){
    var price = getCart()[i].itemPrice;
    prices.push(+price);
  }
  //Not the most elegant way
  var reducer = (accumulator, currentValue) => accumulator + currentValue;
  return parseFloat(prices.reduce(reducer))
}

function removeFromCart(item) {
  for (var i=0; i < cart.length; i++){
    if (cart[i].itemName === item){
      return cart.splice(i,1)
    }
  }
  return (`That item is not in your cart.`)
}

function placeOrder(cardNumber) {
  if (cardNumber) {
    var totalcost = total();
    cart = [];
    return (`Your total cost is $${totalcost}, which will be charged to the card ${cardNumber}.`)
  }
  else {
    return (`Sorry, we don't have a credit card on file for you.`)
  }
}
