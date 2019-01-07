var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let newItem = {};
 let price = Math.floor(Math.random()*99 + 1);

 newItem[item] = price;
 cart.push(newItem);

 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  console.log(cart);
  let cartList = [];
  let item = '';
  if (cart.length === 0) {
    console.log(`Your shopping cart is empty.`);
    return `Your shopping cart is empty.`;
  } else if (cart.length === 1) {
    let item0 = Object.keys(cart[0])[0];
    console.log(`In your cart, you have ${item0} at $${cart[0][item0]}.`);
    return `In your cart, you have ${item0} at $${cart[0][item0]}.`;
  } else if (cart.length === 2) {
    let item0 = Object.keys(cart[0])[0];
    let item1 = Object.keys(cart[1])[0];
    console.log(`In your cart, you have ${item0} at $${cart[0][item0]} and ${item1} at $${cart[1][item1]}.`);
    return `In your cart, you have ${item0} at $${cart[0][item0]} and ${item1} at $${cart[1][item1]}.`;
  } else {
    for (let i = 0; i < cart.length; i++) {
      item = Object.keys(cart[i])[0];
      if (i !== cart.length - 1) {
        cartList.push(` ${item} at $${cart[i][item]}`);
      } else {
        cartList.push(` and ${item} at $${cart[i][item]}.`);
      }
    }
  }

  console.log(`In your cart, you have${cartList}`);
  return `In your cart, you have ${cartList}`;
}

function total() {
  let total = 0;
  let item = '';
  let price = 0;

  for (let i = 0; i < cart.length; i++) {
    item = Object.keys(cart[i])[0];
    price = cart[i][item];
    total = total + price;
  }

  console.log(total);
  return total;
}

function removeFromCart(item) {
  let removedItem = false;
  for (let i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i,1);
      removedItem = true;
    }
  }
  if (removedItem) {
    console.log(cart);
    return cart;
  } else {
    console.log(`That item is not in your cart.`);
    return cart;
  }

}

function placeOrder(cardNumber) {
  if (cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }
}
