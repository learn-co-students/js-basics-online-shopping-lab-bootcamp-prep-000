var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  cart.push(Object.assign({itemName:item, itemPrice:price}))
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length === 0) {
    return "Your shopping cart is empty."
  }
  else {
    var sentence = "In your cart, you have "
    for (var i = 0, l = cart.length; i <l; i++) {
      sentence += `${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`
      if (cart.length > 1 && i!==cart.length-1) {
        sentence += ", "
      }
      if (i===cart.length-2) {
         sentence += "and "
      }
    }
    return sentence+="."
  }
}

function total() {
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++){
    totalCost += cart[i].itemPrice;
  }
  return totalCost;
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
  if (cardNumber){
    let totalCost = total();
    cart =[];
    return`Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  } else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}

