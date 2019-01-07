var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemPrice = Math.floor(Math.random()*100)+1;
 var wook = { [item]: itemPrice };
 cart.push(wook);
 console.log (`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length === 0) console.log("Your shopping cart is empty.")
  let itemsAndPrices = []
  for(let i = 0; i < cart.length; i++){

    let item = Object.keys(cart[i])[0]
    let price = cart[i][item]
    itemsAndPrices.push(`${item} at \$${price}`);
  }


  if (cart.length === 1) {
  console.log(`In your cart, you have ${itemsAndPrices[0]}.`)
} else if (cart.length === 2) {
  console.log(`In your cart, you have ${itemsAndPrices[0]} and ${itemsAndPrices[1]}.`)
} else {
  var newvar = itemsAndPrices.pop()
  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}, and ${newvar}.`)
}
}

function total() {

  const reducer = (accumulator, currentValue) => {
    let item = Object.keys(currentValue)[0]
    let price = currentValue[item]
    return accumulator + price
}

    return cart.reduce(reducer, 0);
}

function removeFromCart(item) {
  let itemInCart = false;

  for(var i = 0; i<cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
      itemInCart = true;
    }
  }

  if (itemInCart === false){
    console.log('That item is not in your cart.');
  }
return cart;

}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`)
  cart = [];
}
}
