var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100) + 1
  cart.push({itemName: item, itemPrice: price});
  return `${item} has been added to your cart.`;
}

function viewCart(){
  let arr = [];
  if (cart.length === 0){
    return "Your shopping cart is empty."
  } else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else  {
     for (let i=0; i<cart.length; i++){
        arr.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
      let middle = arr.splice(0,cart.length-1);
      let end = arr.splice(-1)
      return `In your cart, you have ${middle.join(", ")}, and ${end}.`;
  }
}

function total(){
  let sum = 0;
  for (let i=0; i<cart.length; i++){
      sum += cart[i].itemPrice
  }
  return sum;
}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      cart.splice(i, 1)
      return cart;
    }
  } return "That item is not in your cart."
}


function placeOrder(cardNumber) {
  let newTotal = total();
  if (cardNumber){
    cart = [];
    return `Your total cost is $${newTotal}, which will be charged to the card ${cardNumber}.`
  } return "Sorry, we don't have a credit card on file for you."
}
