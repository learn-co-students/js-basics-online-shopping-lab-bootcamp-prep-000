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
 var newItem = new Object({[item] : Math.floor(Math.random()*101)});
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  // write your code here
  var sentence = "In your cart, you have ";
  for (let i = 0; i < cart.length; i++) {
    var cartObj = cart[i];
    var items = Object.getOwnPropertyNames(cartObj);
    var prices = Object.values(cartObj);
    
    if (i === 0) {
      sentence += `${items} at $${prices}`;
      if (i == cart.length-1) {
        sentence += '.';
      }
      console.log(sentence);
    }
    else if (i === 1 && i == cart.length-1) {
      sentence += ` and ${items} at $${prices}.`;
      console.log(sentence);
    }
    else if (i == cart.length-1) {
      sentence += `, and ${items} at $${prices}.`;
      console.log(sentence);
    }
    else {
      sentence += `, ${items} at $${prices}`;
    }
  }
  console.log("Your shopping cart is empty.");
}

function total() {
  // write your code here
  var total = 0;
  for (let i = 0; i < cart.length; i++) {
    var cartObj = cart[i];
    total += parseInt(Object.values(cartObj));
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var indexToBeRemoved = null;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty([item])) {
      indexToBeRemoved = i;
    }
  }
  
  if (indexToBeRemoved === null) {
    console.log("That item is not in your cart.");
  } else {
    cart.splice(indexToBeRemoved,1);
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    var cost = total();
    console.log(`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`)
    
    cart = [];
    return cart;
  }
}
