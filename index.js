var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random()*10);
  let newObj = {
    'itemName': item,
    'itemPrice': price
  };

  cart.push(newObj);
  return `${item} has been added to your cart.`

}


function viewCart() {

  let finalString = 'In your cart, you have ';

  if (cart.length === 0){
    return 'Your shopping cart is empty.';
  }
  if (cart.length === 1){
    return  finalString + `${cart[0].itemName} at $${cart[0].itemPrice}.`
  }

  for (let i = 0; i < cart.length; i++){
    if (i === cart.length-1){
      finalString += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    } else {
      finalString += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
  }
  return finalString;
}


function total() {
  let totalSale = 0;
  for (let i = 0; i < cart.length; i++){
    totalSale += cart[i].itemPrice;
  }
  return totalSale;
}

function removeFromCart(item) {

  for(let i = 0; i < cart.length; i++){

    let currentItem = cart[i].itemName;

    if(currentItem === item){

      cart.splice(i, 1);
      return cart;
    }
  }
  return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){

    return `Sorry, we don't have a credit card on file for you.`;
  }

  let finalString = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart = [];
  return finalString;
}
