var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
//treat item like an array and create a function
//var price = Math.ceil(Math.random());


 
  cart = [...cart, {itemName: `${item}`, itemPrice: Math.floor((Math.random() * 100+1))}];
 
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length > 0) {
    var statement = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++) {
      if (i + 1 < cart.length) {
        statement = statement + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      } else {
          
        if (cart.length > 1) {
          statement = statement + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`;
        } else {
          statement = statement + `${cart[i].itemName} at $${cart[i].itemPrice}.`;
          
        }
           
      }
    }
    return statement;
  } else {
    return "Your shopping cart is empty.";
  }
}

function total() {
  if (cart.length > 0) {
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
      total = total + cart[i].itemPrice;
    }
    return total;
  } else return 0;
}

function removeFromCart(item) {
  var i = 0;
  while (i < cart.length) {
    if (item === cart[i].itemName) {
    cart.splice(i,1);
    return cart;
  } else {
    i = i + 1;
  } 
  } 
  return "That item is not in your cart.";
}
  
  


function placeOrder(cardNumber) {

  

  if (cardNumber === false || cardNumber === isNaN || cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    var totalPrice = total();
    cart = [];
    return `Your total cost is $${totalPrice}, which will be charged to the card ${parseInt(cardNumber)}.`;
    
  }
}
