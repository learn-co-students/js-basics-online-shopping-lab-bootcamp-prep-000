var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var product = {};
  var cost = Math.floor((Math.random() * 100))
  product.itemName = item;
  product.itemPrice = cost;
  cart.push(product);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var s1 = "Your shopping cart is empty.";
  var s2 = "In your cart, you have ";
  if(cart.length > 0){
    if(cart.length > 1) {
        for(var i = 0; i < cart.length;i++){
          if(i === cart.length - 1) {
            s2 += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
          }
          else {
            s2 += `${cart[i].itemName} at $${cart[i].itemPrice}, `;
          }
        }
    }
    else {
      s2 += `${cart[0].itemName} at $${cart[0].itemPrice}.`;
    }
    
    return s2;
  }
  else {
    return s1;
  }
}

function total() {
  var tot = 0;
  for(var i = 0; i < cart.length; i++) {
    tot += cart[i].itemPrice;
  }
  return tot;
}

function removeFromCart(item) {
  var flag = false;
  var updCart = [];
  for(var i = 0;i<cart.length; i++) {
    if(cart[i].itemName === item) {
      flag = true;
      cart.splice((i) , 1)
    }
  }
  if(flag === true) {
    return cart;
  }
  else {
    return `That item is not in your cart.`;
  }
}

function placeOrder(cardNumber) {
  var tot = total();
  cart = [];
  if(cardNumber > 0) {
    return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`;
  }
  return `Sorry, we don't have a credit card on file for you.`;
}
