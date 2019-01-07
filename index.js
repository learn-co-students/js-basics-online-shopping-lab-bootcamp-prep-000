var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
 
function addToCart(item) {
  var itemObject = {[item]: Math.floor(Math.random()*100)};
  cart.push(itemObject);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var newArray = [];
  for (let i = 0; i < cart.length; i++){
  newArray.push(`${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}`);
  }
  newArray[newArray.length - 1] = (`and ${newArray.slice(-1)[0]}`);
  if(cart.length === 0){
    console.log (`Your shopping cart is empty.`);
  } else if (cart.length === 1){
    console.log (`In your cart, you have ${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]}.`);
  } else if (cart.length === 2){
    console.log(`In your cart, you have ${newArray.join(" ")}.`);
  } else {
    console.log(`In your cart, you have ${newArray.join(", ")}.`);
  }
}

function total() {
  var newSum = [0];
  for (let i = 0; i < cart.length; i++){
    newSum.push(parseFloat(`${Object.values(cart[i])}`));
  }
  const add = (a, b) => a + b;
  const sum = newSum.reduce(add);
  return sum;
}

function removeFromCart (itemName){
  for (let i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(itemName) === true){
      cart.splice(i, 1);
      return cart;
    } 
  }
  console.log (`That item is not in your cart.`);
  return cart;
}

function placeOrder(cardNumber) {
  var orderTotal = total();
  if (cardNumber !== null && cart.length !== 0){
    console.log(`Your total cost is $${orderTotal}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }
}