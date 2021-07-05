var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}



function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  // var itemObj = {[item]: itemPrice};
  var itemObj = {"itemName": item, "itemPrice": price};
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}





// function viewCart() {
//   // write your code here
//   if (cart.length === 0){
//     return 'Your shopping cart is empty.';
//   } else if (cart.length === 1){
//     var oneItem = `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
//     return oneItem;
//   } else if (cart.length === 2){
//     var twoItems = `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`;
//     return twoItems;
//   } else {
//     var cartData = [];
//     for (var i = 0; i < cart.length; i++){
//       cartData.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`);

//     }
//     // var threePlusItems = `In your cart, you have ${cartData.join(', ')}, and ${Object.keys(cart[cart.length-1])} at $${Object.values(cart[cart.length-1])}.`;
//     var threePlusItems = `In your cart, you have ${getCart()[i].itemName}, and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}.`;
//     return threePlusItems;
//   }
// }


function viewCart() {
  var cartArray = [];
  for (let i = 0; i < cart.length; i++) {
    var itemName  = getCart()[i].itemName;
    var itemPrice = getCart()[i].itemPrice;
    cartArray.push(`${itemName} at $${itemPrice}`);
  }
  
  if (cart.length === 0){
    return `Your shopping cart is empty.`;
  } else if (cart.length <= 2){
    return `In your cart, you have ${cartArray.join(', and ')}.`;
  } else if (cart.length >= 3){
    return `In your cart, you have ${cartArray.slice(0, cartArray.length - 1).join(', ')}, and ${cartArray.slice(-1)}.`;
  }
}


function total() {
  var priceArray = [];
  var sumOfNums = 0;
  
  for (let i = 0; i < cart.length; i++) {
    let itemPrice = getCart()[i].itemPrice;
    priceArray.push(itemPrice);
  }
  
  for (var j = 0; j < priceArray.length; j++) {
    sumOfNums = sumOfNums += priceArray[j];
  }
  return sumOfNums;
}


function removeFromCart(item) {
  for (var i = 0; i < getCart().length; i++) {
    if (getCart()[i].itemName === item) {
      getCart().splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart.";
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    var orderTotal = total();
    cart.splice(0, cart.length);
    return `Your total cost is $${orderTotal}, which will be charged to the card ${cardNumber}.`;
  }
}

