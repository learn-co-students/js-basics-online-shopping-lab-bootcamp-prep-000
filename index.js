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
 const price = (Math.floor(Math.random()*100))+1
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart

function viewCart() {
  // write your code here
  const l = cart.length

     if (l ===0) {
       return console.log('Your shopping cart is empty.')
     }

     let itemPrices = [];

    for (let i = 0; i < l; i++) {
      let itemPrice = cart[i];
      let item = Object.keys(itemPrice)[0];
     let price = itemPrice[item];

itemPrices.push(`${item} at \$${price}`);
  }
 switch(itemPrices.length) {
case 1:
break;
case 2:
itemPrices = itemPrices.join(' and ');
break;
default:
itemPrices[l-1] = 'and '.concat(itemPrices[l-1]);
itemPrices = itemPrices.join(', ');
  }
 console.log(`In your cart, you have ${itemPrices}.`)

function total() {
  // write your code here
  var total = 0
  for (var i=0; i< cart.length; i++){
 for (var value in cart[i])
 {
 total +=cart[i][value]
 }
 }
 return total
  }
}

function removeFromCart(item) {
  // write your code here
  var itemInCart = false
 for(var i = 0; i < cart.length; i++){
 if (cart[i].hasOwnProperty(item)) {
 itemInCart = true;
 cart.splice(i, 1);
 }
 }
 if (!itemInCart) {
 console.log("That item is not in your cart.");
 }
 return cart

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber == null || cardNumber== undefined){
 console.log("Sorry, we don\'t have a credit card on file for you.")
 } else {
 console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardNumber + ".")

 cart = []
 }
  }
