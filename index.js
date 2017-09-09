var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getItemName(idx){
  return Object.keys(getCart()[idx])[0];
}

function getItemPrice(idx){
  return getCart()[idx][getItemName(idx)];
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * (100) + 1);
 var toAdd = {};
 toAdd[item] = price;

 setCart([...cart, toAdd]);

 console.log(`${item} has been added to your cart.`)

 return cart;

}

function viewCart() {
  // write your code here
  if (getCart().length == 0){
    console.log("Your shopping cart is empty.");
  }

  else if (getCart().length == 1){
    console.log(`In your cart, you have ${getItemName(0)} at $${getCart()[0][getItemName(0)]}.`)
  }

  else if (getCart().length == 2){
    console.log(`In your cart, you have ${getItemName(0)} at $${getCart()[0][getItemName(0)]} and ${getItemName(1)} at $${getCart()[1][getItemName(1)]}.`);
  }

  else {
    var msg = "In your cart, you have ";

    for(var i = 0; i < getCart().length - 1; i++){
      msg += `${getItemName(i)} at $${getItemPrice(i)}, `;
    }
    console.log(`${msg}and ${getItemName(getCart().length - 1)} at $${getItemPrice(getCart().length - 1)}.`);
  }
}


function total() {
  var sum = 0;

  for(var i in getCart()){
    sum += getItemPrice(i);
  }

  return sum;
}

function removeFromCart(item) {
  var idx = getCart().findIndex(e=>{return e.hasOwnProperty(item)});

  if (idx == -1) console.log("That item is not in your cart.");

  else cart.splice(idx, 1);

  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) console.log("Sorry, we don't have a credit card on file for you.");

  else console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  setCart([]);
}
