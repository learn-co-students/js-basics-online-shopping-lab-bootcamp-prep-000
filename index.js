var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObject = {};
  itemObject["itemName"] = item;
  itemObject["itemPrice"] = Math.floor(Math.random()*100)+1;
  cart.push(itemObject);
  console.log(`${item} has been added to your cart.`);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var array = [];
  if (cart.length<1){
    return `Your shopping cart is empty.`;
  }else if(cart.length==1){
    return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`;
  }else{
    for(var i=0;i<cart.length-1;i++){
      array = array + ` ${cart[i]["itemName"]} at $${cart[i]["itemPrice"]},`;
    }
    return `In your cart, you have${array} and ${cart[cart.length-1]["itemName"]} at $${cart[cart.length-1]["itemPrice"]}.` 
  }
}

function total() {
  var value = 0;
  for(var i=0;i<cart.length;i++){
    value = value + cart[i]["itemPrice"];
  }
  return value;
}

function removeFromCart(item) {
  for(var i=0;i<cart.length;i++){
    if(cart[i]["itemName"] === item){
      cart.splice(i,1)
      return cart;
    }else{}
  }
  return "That item is not in your cart."
}


function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }else{
    var sum = total();
    cart = [];
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
    
  }
}
