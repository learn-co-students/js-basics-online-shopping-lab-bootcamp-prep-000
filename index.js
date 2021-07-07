var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random() * 100);
 var itemInventory = {itemName: item, itemPrice: price};
 cart.push(itemInventory);
 return `${item} has been added to your cart.`;
 }

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  } else if (cart.length === 1){
    var oneItem = cart[0];
    return `In your cart, you have ${oneItem.itemName} at $${oneItem.itemPrice}.`;
  } else if (cart.length > 1){
    var lastItem = cart[cart.length - 1];
    var itemsList = [];
    for (var i = 0; i <= cart.length - 2; i++){
      var multipleItems = cart[i];
      itemsList.push(` ${multipleItems.itemName} at $${multipleItems.itemPrice}`);
      }
      return `In your cart, you have${itemsList.toString()}, and ${lastItem.itemName} at $${lastItem.itemPrice}.`;
  }
}

function total() {
   var allPrices = [];
   for (var i = 0; i <= cart.length -1; i++){
    var eachPrice = cart[i];
    allPrices.push(eachPrice['itemPrice']);
    allPrices;
  }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return allPrices.reduce(reducer);
}

function removeFromCart(item) {
  function getItems(cart){
    var i = 0;
    var justItems = [];
    while (i <= cart.length -1){
      var eachItem = cart[i];
      justItems.push(eachItem.itemName);
      i++;
    } return justItems;
  }
  if ((getItems(cart)).includes(item) === false){
    return "That item is not in your cart.";
  } else if ((getItems(cart)).includes(item) === true){
    var newCart = [];
    for (var i = 0; i <= cart.length - 1; i++){
      var eachItem = cart[i];
    if (eachItem.itemName === item){
      cart.splice(i, 1);
      newCart.push(cart);
      return newCart;
  }
} 
}
}
 

function placeOrder(cardNumber){
  var checkForNumber = Boolean(cardNumber);
  if (checkForNumber === false){
    return "Sorry, we don't have a credit card on file for you.";
  } else if (checkForNumber === true){
    var bill = [];
    bill.push(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
    return bill[0];
  }
}