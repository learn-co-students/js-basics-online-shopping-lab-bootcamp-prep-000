var cart = []

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var newObj={itemName:item,itemPrice:Math.floor((Math.random() * 100) + 1)}
 cart.push(newObj)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here

    if (cart.length===0)
    return `Your shopping cart is empty.`
  if (cart.length===1)
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  if (cart.length===2)
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`  
    if (cart.length>2)
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}.`
}

function total() {
  // write your code here
  var total=0
  for (let i=0;i<cart.length;i++)
  {
    total+=cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  // write your code here
 var cartLength=cart.length
 for(let i=0;i<cart.length;i++)
 {
   if(cart[i].itemName===item)
    {
      cart.splice(i,1)
    }
 }
 if(cartLength===cart.length)
 return "That item is not in your cart."
 else 
 return cart
  
}

function placeOrder(cardNumber) {
  // write your code here
  var t=total();
  if (!cardNumber)
  return "Sorry, we don't have a credit card on file for you."
  else 
  cart="";
  return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`
}