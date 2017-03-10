var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(item + " has been added to your cart.");
  return cart;
}

//working viewCart using For In Loop...not the best per TA since it iterates through everything in object.
function viewCart() {
  if (cart.length === 0)
    console.log("Your shopping cart is empty.");
  else {
    let cartString = 'In your cart, you have ';
    for (var i = 0; i < cart.length; i++){
      for (var purchaseName in cart[i]){
        cartString += `${purchaseName} at $${cart[i][purchaseName]}`;
      }
      if (i === cart.length - 1)
        cartString += '.';
      else {
        cartString += ', ';
      }
    }
    console.log(cartString);
  }
}


//working viewCart without For In Loop after discussion with TA..Dakota? Uses beta Object.values function
/*function viewCart() {
  if (cart.length === 0)
    console.log("Your shopping cart is empty.");
  else {
    //declare string to build full response and array to put each object key: value into to later use join
    let cartString = 'In your cart, you have ';
    let middleArray = [];

    for (var i = 0; i < cart.length; i++){
      middleArray.push(`${Object.keys(cart[i])} at $${Object.values(cart[i])}`)
    }
    cartString += middleArray.join(', ') + '.';
    console.log(cartString);
  }
}*/

//working viewCart with no For In loop, without Object.values.
/*function viewCart() {
  if (cart.length === 0)
    console.log("Your shopping cart is empty.");
  else {
    //declare string to build full response and array to put each object key: value into to later use join
    let cartString = 'In your cart, you have ';
    let middleArray = [];

    for (var i = 0; i < cart.length; i++){
      middleArray.push(`${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`)
    }
    cartString += middleArray.join(', ') + '.';
    console.log(cartString);
  }
}*/

function removeFromCart(itemName) {
  let counter = 0;
  for (var storeObjects in cart)
    cart[storeObjects].hasOwnProperty(itemName) ? cart.splice(storeObjects, 1) : counter++;
  if (counter === cart.length)
    console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(ccNumber) {
  ccNumber ? console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`) : console.log("We don't have a credit card on file for you to place your order.");
  //this clears cart regardless of card being on file. May want to change in future.
  cart = [];
}
