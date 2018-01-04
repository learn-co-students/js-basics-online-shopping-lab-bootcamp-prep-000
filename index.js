var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  let itemPrice = Math.floor(Math.random()*99);
  cart.push(new Object({[itemName]: itemPrice}));
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}



function viewCart() {
  var itemAndPrices = [];
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
    return cart;
  }
for (let i = 0; i < cart.length; i++){
  var key = Object.keys(cart[i])[0];
  var price = cart[i][key];
    itemAndPrices.push(key +" at $" + price);
    // console.log(itemAndPrices);
  }
  if(cart.length === 1 ){
    // console.log(`In your cart, you have ${itemAndPrices.slice(0,-1)}, and ${itemAndPrices[itemAndPrices.length-1]}.`);
  console.log(`In your cart, you have ${itemAndPrices[0]}.`);
  } else if (cart.length === 2){
    console.log(`In your cart, you have ${itemAndPrices[0]} and ${itemAndPrices[1]}.`);
  } else if (cart.length === 3){
    console.log(`In your cart, you have ${itemAndPrices[0]}, ${itemAndPrices[1]}, and ${itemAndPrices[2]}.`);
  } else if (cart.length >= 4){
  	console.log(`In your cart, you have ${itemAndPrices.slice(0,-1)}, and ${itemAndPrices[itemAndPrices.length-1]}.`);
  }

}
console.log(viewCart());
function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
function removeFromCart(removeitem) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(removeitem)) {
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }
    console.log("That item is not in your cart.")


  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
      console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
      cart = []
  }

}
