var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var i = {itemName:item, itemPrice:Math.floor(Math.random() * 100)}
  cart.push(i)
  return `${item} has been added to your cart.`
 // write your code here
}

function viewCart() {
  if (cart.length===0)
    {
      return `Your shopping cart is empty.`
    }
  if (cart.length===1)
    {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }
    var r = `In your cart, you have`
  for (var i = 0; i<cart.length ; i++){
    if(i===cart.length-1)
    {
      r = r + ` and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }else{
      r = r + ` ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
  }
  return r;
  // write your code here
}

function total() {
  var total = 0;
  for (var i = 0; i<cart.length ; i++){
    total += cart[i].itemPrice;
    
  }
  return total;
  // write your code here
}

function removeFromCart(item) {
  
  var ok= false
  for (var i = 0; i<cart.length ; i++){
    if(cart[i].itemName===item){
      ok = true
    }
  }
  if (ok === false){
      return "That item is not in your cart."
    }else{
      var x = cart.indexOf(item);
      if(x===0) {
        cart.shift();
      }else{
        cart.splice(x-1, 1);
      }
    
    }
  
}

function placeOrder(cardNumber) {
  
  if (cardNumber===undefined){
    return "Sorry, we don't have a credit card on file for you."
  }else{
    var str =`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return str;
  }
  // write your code here
}
