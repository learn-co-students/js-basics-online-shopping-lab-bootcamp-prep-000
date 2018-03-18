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
 var myObject = {};
 myObject[item] = Math.floor(Math.random() * Math.floor(101));
 cart.push(myObject);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  // if(getCart().length === 0) {
  //   let message = 'Your shopping cart is empty.';
  //   console.log('Your shopping cart is empty.');
  // } 
  // else {
  //   if(getCart().length === 1) {
  //     console.log(`In your cart, you have ${Object.keys(getCart()[0])[0]} at $${getCart()[0][Object.keys(getCart()[0])[0]]}.`);
  //   } else if(getCart().length === 2) {
  //     console.log(`In your cart, you have ${Object.keys(getCart()[0])[0]} at $${getCart()[0][Object.keys(getCart()[0])[0]]}, and ${Object.keys(getCart()[1])[0]} at $${getCart()[1][Object.keys(getCart()[1])[0]]}.`);
  //   } else {
  //     let message = `In your cart, you have `;
  //       for(let i=0; i < getCart().length; i++) {
  //         if(i != (getCart().length - 1)) {
  //         message += `${Object.keys(getCart()[i])[0]} at $${getCart()[i][Object.keys(getCart()[i])[0]]},`;
  //       } else {
  //         message += ` and ${Object.keys(getCart()[i])[0]} at $${getCart()[i][Object.keys(getCart()[i])[0]]}.`;
  //       }
  //     }
  //     console.log(message);
  //   }
  // }
  if(getCart().length === 0) {
    console.log('Your shopping cart is empty.');
  } else if(getCart().length === 1) {
    console.log(`In your cart, you have ${Object.keys(getCart()[0])[0]} at $${getCart()[0][Object.keys(getCart()[0])[0]]}.`);
  } else {
    let message = `In your cart, you have `;
    for(let i = 0; i < getCart().length; i++) {
          if(i != (getCart().length - 1)) {
          message += `${Object.keys(getCart()[i])[0]} at $${getCart()[i][Object.keys(getCart()[i])[0]]},`;
        } else {
          message += ` and ${Object.keys(getCart()[i])[0]} at $${getCart()[i][Object.keys(getCart()[i])[0]]}.`;
        }
      }
      console.log(message);
  }
}

function total() {
  // write your code here
  let somme = 0;
  for(let i = 0; i < cart.length; i++) {
    somme += cart[i][Object.keys(cart[i])[0]];
  }
  return somme;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
  if(!isNaN(parseInt(cardNumber, 10))) {
    cart.length = 0;
    let number = total();
    return `Your total cost is $${number}, which will be charged to the card ${cardNumber}.`
  } else {
    return `Sorry, we don't have a credit card on file for you.`;
  }
}
