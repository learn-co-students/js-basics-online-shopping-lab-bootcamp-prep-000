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
 cart.push({itemName:item,itemPrice:Math.floor(100*Math.random())});
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length==0){
    return "Your shopping cart is empty."
  }
  else if(cart.length==1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else if (cart.length==2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  }
  else {
    var view=""
    for(var i=0;i<cart.length-1;i++)  {
      view=view+`${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    view=view+`and ${cart[i].itemName} at $${cart[i].itemPrice}`
    return `In your cart, you have ${view}.`
  }
}

function total() {
  // write your code here
  var price=0
  for(var i=0;i<cart.length;i++)  {
    price=price+cart[i].itemPrice
  }
  return price
}

function removeFromCart(item) {
  // write your code here
  var i=0
  while(i<cart.length)  {
    if(item==cart[i].itemName)  {
      cart= [...cart.slice(0,i),...cart.slice(i+1)]
      return cart
    }
    i++
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {
    return "Sorry, we don\'t have a credit card on file for you."
  }
  else {
    var cost=total()
    cart=[]
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  }
}
