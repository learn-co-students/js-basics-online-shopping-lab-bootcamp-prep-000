var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

 
function addToCart(item) {
 // write your code here
 var obj = {itemName:item,itemPrice:Math.floor((Math.random() * 100) + 1)}
 cart.push(obj)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length===0)
  {
    return "Your shopping cart is empty."
  }
  var string = "In your cart, you have "
  var l = cart.length
  for(var i=0;i<l;i++){
    string+=`${cart[i].itemName} at $${cart[i].itemPrice}`
    if(i===(l-1))
    {
      break
    }
    if(i!==(l-2))
    {
      string+=", "
    }
    else if(i===(l-2))
    {
      string+=", and "
    }
  }
  string+= "."
  return string
}

function total() {
  // write your code here
  var sum =0
  var l= cart.length
  for(var i=0;i<l;i++){
    sum+= parseInt(cart[i].itemPrice)
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  var l = cart.length
  var a=0
  for(var i=0;i<l;i++)
  {
    if(cart[i].itemName===item)
    {
      cart.splice(i,1)
      a++
      break
    }
  }
  if(a!==1)
  {
    return "That item is not in your cart."
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber===undefined)
  {
    return "Sorry, we don't have a credit card on file for you."
  }
  var sum = total()
  cart = []
  return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
}






