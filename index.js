var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item){
  const price = Math.floor(Math.random()*100);
  var newItem = {itemName: item, itemPrice: price}
  cart.push(newItem);
  return(`${newItem.itemName} has been added to your cart.`)
}

function viewCart() {
  var info = ["In your cart, you have"];
  
  if (getCart().length === 0) {
    return "Your shopping cart is empty."
    
  } else if (getCart().length === 1) {
      info.push(`${cart[0].itemName} at $${cart[0].itemPrice}.`);
    
  } else if (getCart().length === 2) {
      info.push(`${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`)
    
  } else {
      for(let i = 0; i< getCart().length; i++){
        if (i === getCart().length - 1){
          info.push(`and ${cart[i].itemName} at $${cart[i].itemPrice}.`)
      
        } else {
          info.push(`${cart[i].itemName} at $${cart[i].itemPrice},`)
        }
      }
    
}
    let cartString = info.join(" ");
    return cartString
}

function total() {
  let sumItems = 0
  for(let i = 0; i< cart.length; i++) {
    sumItems += cart[i].itemPrice;
  }
  return sumItems
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i,1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
 let cartTotal = total()
 if (cardNumber) {
  cart.length = 0
  return (`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
 } else {
   return "Sorry, we don't have a credit card on file for you."
 }

}
