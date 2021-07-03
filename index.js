var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cartObject = {};
  cartObject.itemName = item;
  cartObject.itemPrice = Math.floor((Math.random()*100)+1);
  cart.push(cartObject);
  return `${cartObject.itemName} has been added to your cart.`;
}

function viewCart() {
  var items = `In your cart, you have `;
  if (cart.length === 0){
      return `Your shopping cart is empty.`;
  } else if (cart.length === 1) {
    items += `${cart[0].itemName} at $${cart[0].itemPrice}.`;
    return items;
  } else {
    for(var i = 0; i < cart.length; i++){
        if (i < (cart.length-1)) {
          items += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
          console.log(items);
        } else {
        items += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
        }
        console.log(items);
    }
  }
  return items
}

function total() {
  var totalCost = 0;
  for(var i = 0; i<cart.length; i++){
    totalCost += cart[i].itemPrice;
    console.log(totalCost);
  }
  return totalCost;
}
  
function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    if(item === cart[i].itemName){
      cart.splice(i, 1);
      console.log(cart);
      return cart;
    }
  }
    if(cart.indexOf(item) === -1){
      return `That item is not in your cart.`
    }
}


function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    return `Sorry, we don't have a credit card on file for you.`
  } else {
    var receipt = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
    return receipt;
  }
}
