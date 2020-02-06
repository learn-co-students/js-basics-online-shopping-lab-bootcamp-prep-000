var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function addToCart(item) {
  let randInt = Math.floor(Math.random() * 100) + 1;
  let newObj = {
    itemName: item,
    itemPrice: randInt
  }
  cart.push(newObj)
  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }
  let str = "In your cart, you have "
  for (let i = 0; i < cart.length; i++){
    if (cart.length === 1){
      str += `${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
    else if (i === cart.length - 1){
      str += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`

    }
    else{
      str += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
  }
  return str
}

function total() {
  let sum = 0;
  for(let i = 0; i < cart.length; i++){
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  let index = -1;
  for(let i = 0; i < cart.length; i++){
    if (cart[i].itemName == item){
      index = i;
    }
  }
  if (index === -1){
    return "That item is not in your cart."
  }
  cart.splice(index, 1)
}

function placeOrder(cardNumber) {
  if (cardNumber){
    var totalCost = total();
        cart = [];
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
  else{
    return "Sorry, we don't have a credit card on file for you."
  }
}
