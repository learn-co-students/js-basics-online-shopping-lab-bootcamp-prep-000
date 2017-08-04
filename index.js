var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var obj = {}
 obj[item] = 1 + Math.floor(Math.random()*100)

 cart.push(obj)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  const l = cart.length;

  if (!l) {
    return console.log("Your shopping cart is empty.");
  }

  let itemsAndPrices = [];

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    itemsAndPrices.push(`${item} at \$${price}`);
  }

  switch(itemsAndPrices.length) {
    case 1:
      break;
    case 2:
      itemsAndPrices = itemsAndPrices.join(" and ");
      break;
    default:
      itemsAndPrices[l-1] = "and ".concat(itemsAndPrices[l-1]);
      itemsAndPrices = itemsAndPrices.join(", ");
  }

  console.log(`In your cart, you have ${itemsAndPrices}.`);
}

function total() {
  // write your code here
  var t = 0
  for (var i=0,l=cart.length;i<l;i++){
    for (var item in cart[i]){
      t += cart[i][item]
    }
  }
  return t
}

function removeFromCart(item) {
  // write your code here
  var g = 0
  for(var i=0,l=cart.length;i<l;i++){
    var key = Object.keys(cart[i])[0];
    if(key===item){
      cart.splice(i,1)
      l--;
      g++;
    }
  }
  if(g===0){
    console.log('That item is not in your cart.')
  }
  return cart
}

function placeOrder(cardNumber) {
  var sum = total()
  // write your code here
  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.")
    }
  console.log(`Your total cost is \$${sum}, which will be charged to the card ${cardNumber}.`)
  cart = []
}
