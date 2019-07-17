let cart = []; 

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let randNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const itemInfo = {
     itemName: item,
     itemPrice: randNum 
   };
   cart.push(itemInfo);
   return `${item} has been added to your cart.`;
}

function viewCart() {
  const array = [];
  if (cart.length === 0) {
    array.push("Your shopping cart is empty.");
  return array;
  }
  else {
  for (let i = 0; i < cart.length; i++){
    if (cart.length === 1)
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
    else if (cart.length === 2)
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`;
    else (cart.length === 3);
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, ${getCart()[1].itemName} at $${getCart()[1].itemPrice}, and ${getCart()[2].itemName} at $${getCart()[2].itemPrice}.`;
  }
 }
} 

function total() {
  let t = 0;

  for (var i = 0; i < cart.length; i++){
      t += cart[i].itemPrice;
  }

  return t;
}

function removeFromCart(item) {

  for (var i = 0; i < cart.length; i++){
    if (item === cart[i].itemName) {
      cart.splice(i, 1); 
      return cart;
    }
  }

  if (item != cart[item]) {
    return "That item is not in your cart.";
  }

}
function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
  return"Sorry, we don't have a credit card on file for you.";
  }
  else {
    let cardTotal = total();
    setCart([]);
    return `Your total cost is $${cardTotal}, which will be charged to the card ${cardNumber}.`;
  }
}