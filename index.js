var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var p = Math.random() *100
  const price = Math.floor(p)
  
  cart.push({itemName: `${item}`, itemPrice: price})
  return `${item} has been added to your cart.`
  // write your code here
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var cartList = []
  for (var i = 0; i < cart.length; i++) {
   
    cartList.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
  var intro = "In your cart, you have "
  if (cartList.length === 1) {
    return intro += (cartList[0]  + ".")
  } 
  else if (cartList.length === 2) {
    return intro += (cartList[0] +", and " + cartList[1] + ".")
   } 
  else if (cartList.length > 2) {
      var last = cartList.pop()
      var allothers = cartList.join(", ")
      return intro +=(allothers +", and " + last +".")
    }
    } 
  
  
 


function total() {
  var t = 0
  for (var i = 0; i < cart.length; i++) {
  t += cart[i].itemPrice
  }
  return t
}

function removeFromCart(item) {
  for ( var i= 0; i < cart.length; i++)
  if ( cart[i].itemName === item) {
    cart = [...cart.slice(0,i), ...cart.slice(i+1)];
    return cart;
  }
  return "That item is not in your cart."
  return cart
}

function placeOrder(cardNumber) {
 const Total = total()
 if (cardNumber !== undefined) {
         cart.splice(0, cart.length);
     return `Your total cost is $${Total}, which will be charged to the card ${cardNumber}.`
  ;

 } else {
   return "Sorry, we don't have a credit card on file for you."

}
}

