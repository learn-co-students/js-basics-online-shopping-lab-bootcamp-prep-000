var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemObj = {itemName: item, itemPrice: Math.floor(Math.random() * 100)}
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0){
    return 'Your shopping cart is empty.'
  }
  else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else{
      let str = 'In your cart, you have ';
      for (let i = 0; i < cart.length; i++){
          if (i+1 !== cart.length){
              str += `${cart[i].itemName} at $${cart[i].itemPrice}, `
          }
          else{
              str += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`     
          }
      }
      return str;
  }
}

function total() {
  let sum = 0;
  for (let i = 0; i < cart.length; i++){
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
     if (item === cart[i]['itemName']){
        cart.splice(i,1);
        return cart;
     }
  }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return ('Sorry, we don\'t have a credit card on file for you.');
  }
  else{
    let sum = total();
    cart = [];
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`;
  }
}
