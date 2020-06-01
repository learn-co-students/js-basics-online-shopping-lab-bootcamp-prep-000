var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
let randomNum = Math.floor(Math.random() * 100);
 let newItem = {
   itemName: item,
   itemPrice: randomNum
 }
 cart.push(newItem)
 return `${newItem['itemName']} has been added to your cart.`;
}

function viewCart() {
  let str = `In your cart, you have `
  if (cart.length === 0) {
    return `Your shopping cart is empty.`
  }
  if (cart.length === 1) {
    return str += `${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`
  }
  for (let i = 0; i < cart.length; i++) {
    if (cart.length > 1 && i === cart.length - 1) {
      return str += `and ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}.`
    }
    str += `${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}, `
  }
  return str
}

function total() {
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCost += cart[i]['itemPrice']
  }
  return totalCost
}

function removeFromCart(item) {
  let index = cart.findIndex(x => x.itemName === item);
  if (index === -1) {
    return 'That item is not in your cart.'
  } else {
  cart.splice(index, 1)
  }
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    const finalTotal = total();
    const saleStr = `Your total cost is $${finalTotal}, which will be charged to the card ${cardNumber}.`
    cart = [];
    return saleStr;

  }
}

addToCart('bananas')
addToCart('pancake batter')
addToCart('eggs')
addToCart('jam')
addToCart('stuff')
