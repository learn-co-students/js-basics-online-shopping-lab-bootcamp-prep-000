var cart = [];

function addToCart(item) {
  
//Create a function that produces a random number between 1 - 100 for each new item added to the cart.

function randomGenerator() {
  return Math.floor(Math.random()*100);
}

//Create a new object for each new item added to the cart, consisting of itemName and itemPrice (using randomGenerator).

  var addedItem = {
      itemName: `${item}`,
      itemPrice: randomGenerator()
  };
  
//Add the new item and return the successful message.

  cart.push(addedItem);
  return `${item} has been added to your cart.`;
}

////
////Next function, viewCart()
////
  
function viewCart() {
  
  var cartList = "";
  //Print empty cart message, 
  
  if (cart.length === 0) {return "Your shopping cart is empty."}
  
  //If just one item, then return the interpolated sentence: 
  
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  
  //Otherwise create concatenation string via for loop.
  
  else {
      for (var i = 0; i < cart.length - 1; i++) {
      cartList = cartList + `${cart[i].itemName} at $${cart[i].itemPrice}, `
            }
          cartList = cartList + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
          return `In your cart, you have ${cartList}`
        }

  }
  
////
////Next function, total()
////
  
  
function total() {
  var totalValue = 0;
  for (var i = 0; i < cart.length; i++) {
      totalValue = totalValue + cart[i].itemPrice
  }
  return totalValue;
}

////
////Next function, removeFromCart()
////

function removeFromCart(item) {
    var cartLength = cart.length;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].itemName === item) {
            cart.splice(i, 1);
        }
    }
    if (cart.length === cartLength) {
        return "That item is not in your cart.";
    } getCart();

}

////
////Next function, placeOrder()
////

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    let totalValue = total();
    cart = [];
    return `Your total cost is $${totalValue}, which will be charged to the card ${cardNumber}.`;
  }
}



  function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart; 
  
}


