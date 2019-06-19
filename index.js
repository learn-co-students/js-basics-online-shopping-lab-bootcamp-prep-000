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
 var itemNew = {itemName:`${item}`, itemPrice: Math.floor(Math.random()*100)};
 cart.push(itemNew);
 return `${itemNew.itemName} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length===1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length===2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var str = "In your cart, you have "
    var i = 0
    for (i =0; i < cart.length-1; i+=1) {
      str = str += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
  }
  str += `and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
 return str
}
    


function total() {
  // write your code 

 total = 0;
  for (var i = 0; i<cart.length; i++){
  total += cart[i].itemPrice;
  }
  return total
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0;i<cart.length;i++) {
    if (item === cart[i].itemName) {
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    cart = []
    return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`
  }
}
