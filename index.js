var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
let addItem= {
  itemName :item,
  itemPrice : Math.floor(Math.random()*100)
}
  cart.push(addItem)
  return `${item} has been added to your cart.`
}

function viewCart() {
  let view= '';
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  } else {
    view +=`In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
    for ( let i=1; i<cart.length; i++){
      if(i===cart.length-1){
        view +=`, and ${cart[i].itemName} at $${cart[i].itemPrice}`
      } else{
        view +=`, ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
    }
  }
  return `${view}.`;
}



function total() {
  let sum= 0;
  for (let i=0; i< cart.length; i++){
   sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  for (let i=0; i<cart.length; i++){
  if (cart[i].itemName===item){
    cart.splice(i, 1);
    return cart;
  }
  }
  return 'That item is not in your cart.'

}

function placeOrder(cardNumber) {
  let totalBeforeEmpty= total();
  if (cardNumber===undefined){
    return "Sorry, we don't have a credit card on file for you."
  } else{
    for (let i=0; i<cart.length; i++){
      cart.splice(i);
    return `Your total cost is $${totalBeforeEmpty}, which will be charged to the card ${cardNumber}.`
  }
}
}
