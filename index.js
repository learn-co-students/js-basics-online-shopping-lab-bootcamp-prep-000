var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var nameAndPrice = { itemName: `${item}`, itemPrice: Math.floor(Math.random() * 100) };
 cart.push(nameAndPrice);
 return `${item} has been added to your cart.`
}

function viewCart() {
  var l = cart.length - 1;
  const arr = [];
  const newArray = [];
  if (cart.length < 1) {
    return 'Your shopping cart is empty.'
    }
  else if (cart.length === 1) {
    arr.push(` ${cart[0].itemName} at $${cart[0].itemPrice}`);
    return `In your cart, you have${arr}.`
  }
  else 
  for (let i = 0; i < l; i++) {
    arr.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
    } 
  newArray.push(`and ${cart[l].itemName} at $${cart[l].itemPrice}.`)
  return `In your cart, you have${arr}, ${newArray}`
  }
  


function total() {
  var sum = [];
  function getSum(total, num) {
    return total + num;
  }
  for (let i = 0; i < cart.length; i++) {
    sum.push(cart[i].itemPrice)
  }
  if (cart.length === 0) {
    return `Sorry, we don't have a credit card on file for you.`
  }
  else
  return sum.reduce(getSum)
}


function removeFromCart(item) {
  const arr = [];
  for (let i = 0; i < cart.length; i++) {
    arr.push(cart[i].itemName)
  }
    if (arr.includes(`${item}`) === true) {
      cart.splice(arr.indexOf(`${item}`), 1)
      return cart
    }
    else
    return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  var t = total();
  if (cardNumber === null) {
    return `Sorry, we don't have a credit card on file for you.`
  }
  else if (cart.length < 1) {
    return `Sorry, we don't have a credit card on file for you.`
  }
  else
    cart.splice(0, cart.length-1);
    cart.pop()
  return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`
}

  
  

