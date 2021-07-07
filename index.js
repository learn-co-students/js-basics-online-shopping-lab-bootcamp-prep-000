var cart = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var food = { itemName: item, itemPrice : getRandomInt(1, 100) };
  cart.push(food);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var countup = 0;
  var sentence = '';
  if (cart.length > 1) {
    while(countup < (cart.length - 1)) {
      sentence = sentence + `${cart[countup].itemName} at $${cart[countup].itemPrice}, `;
      countup++;
    }
    var lastItem = `${cart[countup].itemName} at $${cart[countup].itemPrice}.`;
    return `In your cart, you have ${sentence}and ${lastItem}`;
  } else if(cart.length === 1){
    sentence = `${cart[countup].itemName} at $${cart[countup].itemPrice}`;
    return `In your cart, you have ${sentence}.`;
  } else if(cart.length === 0){
    return 'Your shopping cart is empty.';
  }
}

function total() {
  var countup = 0;
  var totalPrice = 0;
  if (cart.length > 1) {
    while (countup < cart.length) {
      totalPrice = totalPrice + cart[countup].itemPrice;
      countup++;
    }
    return totalPrice;
  } else {
    return 'Your shopping cart is empty.';
  }
}

//addToCart('banana');
//addToCart('sushi');
//addToCart('rice');
//console.log(cart);

function removeFromCart(item) {
  var countup = 0;
  var itemFails = 0;
  while (countup < cart.length) {
    if(cart[countup].itemName === item) {
      cart.splice(countup, countup);
      countup++;
    } else {
      itemFails++;
      countup++;
    }
  }
  if(itemFails === cart.length){
    console.log(cart);
    return 'That item is not in your cart.';
  } else {
    console.log(cart);
    return cart;
  }
}

function placeOrder(cardNumber) {
  const totalCost = total();
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    cart = [];
    return `Your total cost is ${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}
