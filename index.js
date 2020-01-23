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
 var randomPrice = Math.floor(Math.random() * 100 ) +  1;
  var item = {
    itemName: item,
    itemPrice: randomPrice
  };
  cart.push(item);
  return `${item.itemName} has been added to your cart.`
}



//
function viewCart() {
  var myList = [];
  var lastItemOfCart = cart[cart.length - 1];
    if (!cart.length) {
      return `Your shopping cart is empty.`;
    }
    for (let i = 0; i < (cart.length - 1) ; i++){
            myList.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
    }
    if (cart.length === 1){
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
    } else {
      return `In your cart, you have ${myList.join(`, `)}, and ${lastItemOfCart.itemName} at $${lastItemOfCart.itemPrice}.`
    }
}

function total() {
  var totalSum = 0;
  // write your code here
  for (let i = 0; i < cart.length ; i++ ){
    totalSum += cart[i].itemPrice;
  }
  return totalSum;
}

function removeFromCart(item) {
  // write your code here
  var itemIndex = [];
  function returnIndex(item){
    itemIndex = cart.findIndex(x => x.itemName === item);
    return itemIndex;
  }
  if (returnIndex(item) === -1){
    return `That item is not in your cart.`;
  } else {
    cart.splice(itemIndex,1);
  }

}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    var message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return message;
  }
}
