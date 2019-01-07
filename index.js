var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var x = Math.floor((Math.random() * 100) + 1)
  var item1 = {itemName:item , itemPrice:x}
  cart.push(item1)
   return item1.itemName + " has been added to your cart."
}

function viewCart() {
  var x = []
  var y = []
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  if (cart.length === 1) {
  for(var i = 0 ; i < cart.length ; i++)
  {
    x.push(cart[i].itemName)
    y.push(cart[i].itemPrice)
  }
  return `In your cart, you have ${ x } at $${ y }.`
  }
  if (cart.length === 2) {
  for(var c = 0 ; c < cart.length ; c++)
  {
    x.push(` ${cart[c].itemName} at $${cart[c].itemPrice}`)
  }
  return `In your cart, you have${ x.join(", and") }.`
  
  }
  if (cart.length > 2) {
  for(var v = 0 ; v < cart.length - 1  ; v++)
  {
    x.push(` ${cart[v].itemName} at $${cart[v].itemPrice}`)
  }
  return `In your cart, you have${ x.join(",") }, and ${cart[cart.length -1].itemName} at $${cart[cart.length -1].itemPrice}.`
  }

}

function total() {
  var total = 0 
  for(var i = 0 ; i < cart.length ; i++)
  {
    total += cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for(var i = 0 ; i < cart.length ; i++)
  {
    if (cart[i].itemName === item)
    {
      cart.splice(i,1)
      return viewCart()
    }
    else 
    {
      return "That item is not in your cart."
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber){
    var x = total()
    cart.length = 0
    return "Your total cost is " + x + "," +" which will be charged to the card " + cardNumber 
  }
  else {
    return "Sorry, we don't have a credit card on file for you."
  }
    
  
}
