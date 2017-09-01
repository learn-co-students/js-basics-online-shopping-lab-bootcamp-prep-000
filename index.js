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
 //random num from 1 to 100
 let itemPrice = Math.floor((Math.random()*100)+1)
 // create new object and set key/value
 var newObj = {[item]:itemPrice};
 // put the new object in the cart
 cart.push(newObj);
 // let the user know it has been done
 console.log(`${item} has been added to your cart.`);
 //return the cart
 return cart;
}

function viewCart() {
  // write your code here
  let message = '';

  if (cart.length == 0) {
    console.log('Your shopping cart is empty.');
  } else {
    if (cart.length == 1) { // cart has 1 item
      //each item of the array is an Object, so we can call Object.keys on it,
      //but NOT on the cart array as a whole.
      let key0 = Object.keys(cart[0])[0];
      message += `In your cart, you have ${key0} at $${cart[0][key0]}.`;
    } else if (cart.length == 2) { // cart has 2 items
      let key0 = Object.keys(cart[0])[0];
      let key1 = Object.keys(cart[1])[0];
      message += `In your cart, you have ${key0} at $${cart[0][key0]} and ${key1} at $${cart[1][key1]}.`;
    } else {
      message += 'In your cart, you have ';
      for (let i=0; i < cart.length; i++) {
        let currentKey = Object.keys(cart[i])[0];

        if (i < cart.length-1) {
          message += `${currentKey} at $${cart[i][currentKey]}, `
        } else {
          message += `and ${currentKey} at $${cart[i][currentKey]}.`
        }
      }
    } // end multiitem cart
  } // end else cart not empty
  console.log(message);
  return cart;
}

function total() {
  // write your code here
  let total=0;
  for(let i=0;i<cart.length;i++) {
    let currentKey = Object.keys(cart[i])[0];
    total+=cart[i][currentKey];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  // find the item in the cart and remove it
  for(let i=0;i<cart.length;i++) {
    // get the key, i.e. the 'name of the fruit'
    let currentKey = Object.keys(cart[i])[0];
    // if the fruit's name and the item name are the same
    // then remove it.
    if (currentKey === item) {
      let index = cart.indexOf(cart[i])
      if (index > -1) {
        cart.splice(i,1);
        return cart;
      }
    }
  } // end of FOR loop

  //if we execute this code, it means
  //we couldn't find the item in the cart
  console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here

  // no credit card provided?
  if (!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.');
  }
  else {
    // credit card provided
    // so print out the total
    // empty and return the emptied cart
    let message='';
    message = 'Your total cost is $';
    message += total();
    message += ', which will be charged to the card ';
    message += cardNumber+'.';
    console.log(message);
    cart=[];
    return cart;

  }
}
