var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  item = {Name:"" , Price:""}
 cart.push(item)
}

function viewCart() {
  // write your code here
}

function total() {
  var total = 0 
  for(var i = 0 ; i < cart.length ; i++)
  {
    total += cart[i].Price
  }
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0 ; i < cart.length ; i++)
  {
    if (cart[i].Name === item.Name)
    {
      cart.splice(i,1)
      return cart
    }
    else {
      return "That item is not in your cart."
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber){
    var x = total()
    cart.length = 0
    return "Your total cost is " + x + "which will be charged to the card " + cardNumber
  }
  else {
    return "Sorry, we don't have a credit card on file for you."
  }
    
  
}
