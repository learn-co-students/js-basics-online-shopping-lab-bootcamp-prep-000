var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

//ADD TO CART FUNCTION
function addToCart(item) {
  var itemName = {[item]: Math.floor(Math.random() * 10)};

cart.push(itemName);
console.log(`${item} has been added to your cart.`)
return cart;
}


//VIEW CART FUNCTION
function viewCart() {
 var beginSentence = "In your cart, you have"
 var itemPriceSentence = [];

// 3 ITEMS AND UP
 if(cart.length > 2){

 for (let i = 0; i < cart.length - 1; i++){

   var keyValuePair = cart[i];
   var item = Object.keys(keyValuePair);
   var price = keyValuePair[item];

   itemPriceSentence.push(` ${item} at $${price}`);
   console.log("1st loop")
   }

 var keyValuePair = cart[cart.length-1];
 var item = Object.keys(keyValuePair);
 var price = keyValuePair[item];

 itemPriceSentence.push(` and ${item} at $${price}.`)

 var endSentence = itemPriceSentence.join();

 console.log(beginSentence + endSentence);
 }

// 2 ITEMS
 else if(cart.length === 2){
   var keyValuePair = cart[0];
   var item = Object.keys(keyValuePair);
   var price = keyValuePair[item];

   itemPriceSentence.push(` ${item} at $${price}`);

   var keyValuePair = cart[1];
   var item = Object.keys(keyValuePair);
   var price = keyValuePair[item];

   itemPriceSentence.push(`and ${item} at $${price}.`);

   var endSentence = itemPriceSentence.join(" ");

   console.log(beginSentence + endSentence);
 }

// 1 ITEM
 else if(cart.length === 1){

   var keyValuePair = cart[0];
   var item = Object.keys(keyValuePair);
   var price = keyValuePair[item];

   console.log(beginSentence + ` ${item} at $${price}.`);
 }

// 0 ITEMS
 else {
   console.log("Your shopping cart is empty.");
 }
}


//TOTAL FUNCTION
function total() {
  var totalCost = [];

  for (let i = 0; i < cart.length; i++){

    var keyValuePair = cart[i];
    var item = Object.keys(keyValuePair);
    var price = keyValuePair[item];

    totalCost.push(price);
    }

  console.log(totalCost)

  var sum = 0;

  for (let i = 0; i < totalCost.length; i++)
    {
      sum = sum + totalCost[i];
  }

return sum;
}


//REMOVE FROM CART FUNCTION
function removeFromCart(item) {
  var empty = [];

for (let i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return `${item} were deleted.`;
    }
    else {
      empty.push('x');
    }
  }

if(empty.length === cart.length){
  //console.log("TRUE")
  console.log("That item is not in your cart.");
}
else {
  //console.log("FALSE")
}

return cart
}


//PLACE ORDER FUNCTION
function placeOrder(cardNumber) {
  if(cardNumber == null){
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else {

    var answer = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = [];
    console.log(answer);
}
}
