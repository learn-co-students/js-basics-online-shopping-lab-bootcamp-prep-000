var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randPrice = Math.floor(Math.random() * 101);
  var itemObj = {"itemName": item,"itemPrice": randPrice };
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}


function viewCart() {
  var len = cart.length,
  midStatement = "";
  
  if (len === 0){
    return `Your shopping cart is empty.`;
  }
  else if (len === 1){
    return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`
  }
  
  for (var i = 0; i < len; i++){
    
    var item = cart[i],
    name = item["itemName"],
    price = item["itemPrice"],
    lastStatement = "";
    
    // if (len === 1){
    //   statement = `${name} at $${price}`;
    //   return `In your cart, you have $${statement}.`
    // }
    
    if (i + 1 === len){
      lastStatement =` and ${name} at $${price}`;
      console.log(lastStatement);
    }
    
    else{
      var str =` ${name} at $${price},`;
      console.log(str)
      midStatement += str;
      console.log(midStatement);
      }
    }
  return `In your cart, you have${midStatement}${lastStatement}.`
}


function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++){
    var item = cart[i],
    price = item["itemPrice"];
    total += price
  }
  return total
}


function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    var curItem = cart[i];

    if (curItem["itemName"] === item){
      cart.splice(i,1)
      return cart
    }
  }
  return "That item is not in your cart."
}




function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  var cost = total()
  cart = []
  return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
}



