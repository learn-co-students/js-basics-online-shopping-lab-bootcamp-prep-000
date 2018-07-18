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
  var newObj = {itemName: item, itemPrice: price};
  cart.push(newObj);
  return (`${item} has been added to your cart.`);
}

function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  } else {
    
    var myString = "In your cart, you have ";
    var myArray = [];
    
    for (var i = 0; i < cart.length; i++){
      var keys = (cart[i].itemName);
      myArray.push(`${keys} at $${cart[i].itemPrice}`);
    }
    
    if (myArray.length === 1) {
      myString += (`${myArray}.`);
    } else if (myArray.length === 2) {
      myString += (`${myArray[0]}, and ${myArray[1]}.`);
    } else if (myArray.length > 2) {
      var lastE = myArray.pop();
      var eachE = myArray.join(`, `);
      myString += (`${eachE}, and ${lastE}.`);
    } return myString;
  }
}
      
      

function total() {
  var priceArray = [];
  for (var i = 0; i < cart.length; i++) {
    priceArray.push(cart[i].itemPrice);
  }
  var total = priceArray.reduce(function(a,b) {
    return a+b;
    },0);
  return total;
}


function removeFromCart(item) {
  for ( var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
      return cart;
    }
  } return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    var newTotal = total();
    cart = [];
    return `Your total cost is $${newTotal}, which will be charged to the card ${cardNumber}.`;
    }
}
