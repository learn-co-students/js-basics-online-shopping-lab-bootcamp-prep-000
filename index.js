var cart = [];

function getRandomInt(min,max) {
  // 1-100 --> [0-1) * (100) + 1
  return Math.floor(Math.random() * (max-min+1)) + min;
}

function generateCartItem(itemName) {
  // generates the two key value pairs with itemname and itemprice in front
  return {
    itemName:itemName,
    itemPrice:getRandomInt(1, 100)
  }
}

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var item1 = generateCartItem(item);
/* var price = Math.floor(Math.random()*100);
 var itemObject = {};
 var name = `itemName: ${item}`;
 function listPrice(price) {
   return `itemPrice: ${price}`
 }
 itemObject[name] = listPrice(price);
 */
 cart.push(item1);
 console.log(`${item} has been added to your cart.`);
 return (`${item} has been added to your cart.`);
}

function viewCart() {
  // write your code here
  var cartItems = [];
  var inCart = 'In your cart, you have'
  if (cart.length === 0 ) {
    console.log('Your shopping cart is empty.');
    return('Your shopping cart is empty.');
  } else if (cart.length === 1){
    console.log(inCart + ` ${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`);
    //https://stackoverflow.com/questions/11922383/access-process-nested-objects-arrays-or-json
    // accessing nested data structures
    return(inCart + ` ${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`);
  } else {
    for (var i = 0; i < cart.length-1; i++) {
      cartItems.push(` ${cart[i]['itemName']} at $${cart[i]['itemPrice']}`)
    }
      var printMessage = inCart + `${cartItems}, and ${cart[cart.length-1]['itemName']} at $${cart[cart.length-1]['itemPrice']}.`
      console.log(printMessage)
      return(printMessage)
  }
}
  
function total() {
  // write your code here
  var pricePerItem = [];
  var totalPrice = 0;
  
  for (var i = 0; i < cart.length; i++){
  var eachPrice = cart[i]['itemPrice']
    pricePerItem.push(eachPrice)
  }
  for (var j = 0; j < cart.length; j++) {
    totalPrice = pricePerItem[j]+=totalPrice
  }
  console.log(totalPrice)
  return(totalPrice)
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++){
    if(cart[i]['itemName'] === item){
      cart.splice(i,1);
      return cart;
    }
  }
  console.log('That item is not in your cart.')
  return('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    var x = (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    for (var i = cart.length; i >= 0; i--) {
      cart.pop();
    return x
    }
  } else {
    //https://www.w3schools.com/js/js_strings.asp
    // backslash escape character turns special characters into string
    console.log('Sorry, we don\'t have a credit card on file for you.');
    return('Sorry, we don\'t have a credit card on file for you.');
  }
}
