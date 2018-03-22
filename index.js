var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 const price = Math.floor(Math.random()*100+1);
 cart.push({ itemName: item,itemPrice: price});
 return (`${item} has been added to your cart.`)
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }
  else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else if (cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else { 
      var cartString = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, `
        for(var i = 1; i < cart.length; i++) {
         cartString+=`${cart[i].itemName} at $${[cart[i].itemPrice]}`
            if (i!==cart.length-1){
              cartString+= ", and "
            }
            else {
              cartString+= "."
            }
        } 
        
return cartString
  }
}

function total() {
  let total = 0
  for(let j = 0;  j < cart.length; j++) {
    total += cart[j].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i <cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart
    } 
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
  else { 
    var x = total()
    cart = []
    return `Your total cost is $${x}, which will be charged to the card ${cardNumber}.`
  }
}
