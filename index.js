var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor((Math.random() * 100))});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0){
    console.log('Your shopping cart is empty.');
    return;
  }
  //Message Builder //note: I used regular for loop and Object.keys() below for total() to show I understand and meet..
  //..the lesson objectives but I wanted to explore new methods so applied them here including for ..in and for...of
  var items = []
  var cartMessage;
  //The loop below grabs every property of cart(array) & stores EACH in "target"
  //in this case the objects in cart (target = {obj}{obj}{obj}..)
  for(let target of cart) {
      //Now that objects live on their own inside of "target"
      //The Loop below allows a new variable to grab properties of "target" (those objects)
      for(let prop in target) {
        //Note: Now whenever called prop will return whatver index in "target" you set
        //without index default is first level
        // (prop = 'key' 'key' 'key'...) in "target(objects)"
        // (target[prop] = 'value' 'value' 'value'...) in "target(objects)"
        items.push(`${prop} at $${target[prop]}`);
      }
  }
  ///  (if 2 or more)       items[last item]    = "and [last item]"             //
  if (items.length > 1) items[items.length - 1] = 'and ' + items[items.length - 1];
  // (if 3 or more)
  if (items.length > 2) {
      // (join with , last item still = "and last item")
      cartMessage = items.join(', ');
  } else {
      cartMessage = items.join(' ');
  }
  console.log(`In your cart, you have ${cartMessage}.`);
}

function total() {
  var total = 0;
  for(var i = 0; i < cart.length; i++){
    total =  total + cart[i][Object.keys(cart[i])];
    }
  return total;
}

function removeFromCart(item) {
  for(var i=0; i<cart.length; i++){
    //Loops through & checks every index in cart for "item" match
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
      return cart;
    }
  }
  console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) return console.log("Sorry, we don't have a credit card on file for you.");
  let _total = total();
  cart = [];
  console.log(`Your total cost is \$${_total}, which will be charged to the card ${cardNumber}.`);
}
