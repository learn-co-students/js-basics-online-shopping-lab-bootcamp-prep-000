var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 var itemPrice = (Math.floor(Math.random() * 100) + 1);
 var items = { [itemName]: itemPrice };
 cart.push(items);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}


function viewCart() {
  // write your code here
  if (cart.length == 0) {
    var currentCartList = [];
    for (var i = 0, i < cart.length, i++) {
      var currentObj = cart[i];
      var keys = Object.keys(currentObj);
      var key = keys[0];
      var price = currentObj[key];
      currentCartList.push(`${ key } at $${ price }`);
      }
    if (currentCartList.length === 1) {
      return (`In your cart, you have ${currentCartList}.`);
    } else if (currentCartList.length === 2) {
      return (`In your cart, you have ${currentCartList.join( and )}`);
    } else {
      return (``)
    }
    }

  } else {
    return ("Your shopping cart is empty.")
  }
}


//------------------------------------------------
function ToddsViewCart(){
  // First, make an empty array to hold all the "product at prices" snippets,
  // for example "bananas at $17".
  var productsAtPrices = [];
  // Next, loop over all the items in the cart. Notice that I'm not doing
  // any "if/else" logic here, because if the cart is empty, there simply
  // won't be anything in your productsAtPrices array.
  for (var i = 0; i < cart.length; i++){
    var currentObj = cart[i];
    var keys = Object.keys(currentObj);
    var key = keys[0];
    var price = currentObj[key];
    productsAtPrices.push(`${ key } at $${ price }`);
  }
  // Now we should have an array of "products at prices". It could have any
  // length, so we'll start to account for that. But first, make your
  // string that's common to all cases.
  var answerString = "In your cart, you have ";
  // If there was a single item in the cart...
  if (productsAtPrices.length == 1){
    answerString += productsAtPrices[0];
  }
  // If there were two...
  else if (productsAtPrices.length == 2){
    answerString += productsAtPrices[0];
    answerString += " and ";
    answerString += productsAtPrices[1];
  }
  // Here's the tricky one. If there were three or more items...
  else if (productsAtPrices.length >= 3){
    // First, iterate through all the productsAtprices *except* for
    // the last one, because we know that one looks a bit different.
    for (var i = 0; i < (productsAtPrices.length - 1); i++){
      answerString += productsAtPrices[i];
      answerString += ", ";
    }
    //now we handle the last one.
    answerString += "and ";
    answerString += productsAtPrices[productsAtPrices.length - 1];
  }
  // If your cart was empty, replace the answer string with the custom one.
  else{
    answerString = "Your shopping cart is empty"
  }
  // Outside of all logic, put your period, since you always need it.
  answerString += ".";
  // And print to console, of course.
  console.log(answerString);
}






function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
