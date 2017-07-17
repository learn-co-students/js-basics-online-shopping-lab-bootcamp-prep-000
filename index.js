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
var obj = {}

obj[item] = Math.floor(Math.random() * (100 - 1) + 1);
cart.push(obj);
console.log(`${item} has been added to your cart.` );
return cart;
}


function viewCart() {
  var message = ''
  var andMessage = ''

//if the cart is empty
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }
// empty

  else {
    //lets examine what to do if we have thing in the array
    if (cart.length === 1) {
    message = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`
  console.log(message);
                }
    else if (cart.length === 2) {
      message = `In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
      console.log(message);
    }

    else {
      message = ''
      for (var i = 0; i < cart.length; i++){


        if (i  === cart.length -1 ) {
          andMessage = `and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`
            console.log(`In your cart, you have ${message}${andMessage}`);
        }
        else {
           message = message + `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `
        }
      }

    }
                //examine how many thing are in the array

}
}



function total() {
  // write your code here
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
   totalPrice = totalPrice + cart[i][Object.keys(cart[i])];


  }
  return totalPrice;
}


function removeFromCart(item) {

  for(var i = 0; i < cart.length; i++) {

    if(cart[i].hasOwnProperty(item)){
       cart = [...cart.slice(0,i), ...cart.slice(i+1)]
        return cart;
    }
  }
    console.log('That item is not in your cart.');
    return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  var totalPrice = total();
  if (cardNumber === undefined) {
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }
  if (isNaN('cardNumber')){
    console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }

}
