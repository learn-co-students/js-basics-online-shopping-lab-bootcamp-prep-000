var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
  let myItem = item.toString();
  var shoppingObject = {
    itemName:  myItem,
    itemPrice: Math.floor(Math.random() * 101)  // needs to be between 1 & 100; key should be 'price' ?
  }
 cart.push(shoppingObject);
 return (`${item} has been added to your cart.`);
}

function viewCart(itemName, price) {
  var a = "In your cart, you have ";
  var j = cart.length-1;
  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }
  if (cart.length === 1) {
    return a + (`${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`)
  }
  if (cart.length > 1) {
   for (let i = 0; i<cart.length-1; i++) {
     a += (`${cart[i]['itemName']} at $${cart[i]['itemPrice']}, `)
   } return a + (`and ${cart[j]['itemName']} at $${cart[j]['itemPrice']}.`);
  }
};


function total() {
  var mySum = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  for (var i=0;i<cart.length; i++) {
    mySum.push(cart[i]['itemPrice']);
    }
   return mySum.reduce(reducer);
};


function removeFromCart(item) {
  for (let i=0; i<cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart."
};

function placeOrder(cardNumber) {
  for (var i=0; i<cart.length; i++) {
    var theTotal = cart[i].itemPrice;
    for (let j=0;j<theTotal.length; j++) {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
    }
  }
  if (cardNumber === undefined) {
  return "Sorry, we don't have a credit card on file for you."
  } else {
    cart = [];
    return (`Your total cost is $${theTotal}, which will be charged to the card ${cardNumber}.`)
   } return cart;
}
