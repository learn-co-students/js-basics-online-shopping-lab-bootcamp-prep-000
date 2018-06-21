var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
//  var thePrice = Math.floor(Math.random()*10000)/100;

  var newObj = Object.assign({itemName: `${itemName}`, itemPrice: Math.floor(Math.random()*100)});
  cart.push(newObj);
  return  `${itemName} has been added to your cart.`;

}

function viewCart() {
  if (cart.length < 1) return "Your shopping cart is empty.";

  var outString = "In your cart, you have ";
  for (var i = 0; i < cart.length; i++){
//    console.log(`Loop ${i} - length is ${cart.length}`);
    if (i > 0 && i <= cart.length-1) outString += ", ";
    if (cart.length > 1 && i === cart.length-1) outString += "and ";
    outString += `${cart[i].itemName} at $${cart[i].itemPrice}`;
  }
  outString += ".";
  return outString;
}

function total() {
  var myTotal=0;
  for (var i = 0; i < cart.length; i++){
    myTotal += cart[i].itemPrice;
  }
  return myTotal;
}

function removeFromCart(item) {
  // get an array of indexes to remove
  var foundCtr = 0;
  for (var i = cart.length-1; i >= 0; i--){
    if (cart[i].itemName === item) {
      cart.splice(i,1);
      foundCtr++;
    }
  }
  if (foundCtr === 0) {
    return "That item is not in your cart.";
  } else {
    return cart;
  }
}

function placeOrder(cardNumber) {
  if(!cardNumber) return "Sorry, we don't have a credit card on file for you.";

  var outString = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  cart.length = 0;
  return outString;
}


console.log(addToCart("Almond Milk"));
console.log(addToCart("Razors"));
console.log(addToCart("Eggs"));
console.log(addToCart("Razors"));
console.log(addToCart("Almond Milk"));
console.log(addToCart("Eggs"));
console.log(addToCart("Razors"));
console.log(addToCart("Eggs"));
//console.log(JSON.stringify(cart));
console.log(viewCart());
console.log(total());
removeFromCart("Eggs");
console.log(viewCart());
console.log(placeOrder(5));
