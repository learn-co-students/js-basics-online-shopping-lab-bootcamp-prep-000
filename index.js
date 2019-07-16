var cart = [];
let in_cart = false;

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random()*100) + 1;
  const newItem = {itemName: item, itemPrice: price};

  cart.push(newItem)
  let msg = `${item} has been added to your cart.`
  return msg;
}

function viewCart() {
  let cart_size = cart.length
  let message = "In your cart, you have "

  if (cart_size < 1){
    return "Your shopping cart is empty.";
  }
  if (cart_size == 1){
    return `In your cart, you have ${cart[cart_size-1].itemName} at $${cart[cart_size-1].itemPrice}.`;
  }
  for (let i=0; i<cart.length-1; i++){
    message += `${cart[i].itemName} at $${cart[i].itemPrice}, `
  }
  message += `and ${cart[cart_size-1].itemName} at $${cart[cart_size-1].itemPrice}.`
  return message;
}

function total() {
  let sum = 0
  for (let item of cart){
    sum += item.itemPrice
  }
  return sum;
}

function removeFromCart(item) {
  console.log("HELLO!")
  in_cart = false;
  for (let i=0; i<=cart.length-1; i++){
    if (item === cart[i].itemName){
      in_cart = true;
    }
  }
  if (in_cart) {
    for (let i=0; i<=cart.length-1; i++) {
      if (cart[i].itemName === item) {
        cart.splice(i, 1);
        i--;
      }
    }
  } else {
    return "That item is not in your cart.";
  }
  }

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    const sum = total();
    cart = [];
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`;
  }
}
