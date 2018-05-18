var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {
  "itemName": item,
  "itemPrice": Math.floor(Math.random() * 100) + 1
  };
  cart.push(newItem);
  return (`${item} has been added to your cart.`)
}

function viewCart() {
  var list = [];
  if(cart.length === 0) {
    return ('Your shopping cart is empty.')
  } else if(cart.length === 1) {
  list.push(` ${cart[0].itemName} at $${cart[0].itemPrice}.`);
      return(`In your cart, you have${list}`)
  } else{
    for (var i = 0; i < cart.length; i++) {
      if (i < cart.length - 1) {
        list.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
      } else {
        list.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}.`);
      }
    }
    return(`In your cart, you have${list}`)
}
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += parseInt(cart[i].itemPrice );
  } 
  return total
}

function removeFromCart(item) {
  var index = -1;
  for (var i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      index = i
    }
  }
  if(index != -1) {
    cart.splice(index,1)
  } else {
    return('That item is not in your cart.')
  }
}

function placeOrder(cardNumber) {
  if(isFinite(cardNumber) === true) {
    var newTotal = total();
    cart = [];
    return(`Your total cost is $${newTotal}, which will be charged to the card ${cardNumber}.`)
  } else {
    return('Sorry, we don\'t have a credit card on file for you.')
  }
}
