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
  const price = Math.floor(Math.random() * 100) + 1;
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  // write your code here
  if(cart.length === 0) console.log('Your shopping cart is empty.');
  else {
     let str = 'In your cart, you have';
      if(cart.length === 1) {
          let key = Object.keys(cart[0])[0];
          console.log(`${str} ${key} at $${cart[0][key]}.`);
      }
      else if(cart.length === 2) {
         let key1 =  Object.keys(cart[0])[0], key2 = Object.keys(cart[1])[0];
        console.log(`${str} ${key1} at $${cart[0][key1]} and ${key2} at $${cart[1][key2]}.`);
    } else {
        let result = [];
        for(let i = 0; i < cart.length - 1; i++){
            let key = Object.keys(cart[i])[0];
            result.push(`${key} at $${cart[i][key]}`);
        }
        let lastKey = Object.keys(cart[cart.length - 1])[0];
        console.log(`${str} ${result.join(', ')}, and ${lastKey} at $${cart[cart.length - 1][lastKey]}.`);
    }
  }
}

function total() {
  // write your code here
  let sum = 0;
  for(let i = 0; i < cart.length; i++){
      let key = Object.keys(cart[i])[0];
      sum += cart[i][key];
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  let items = [];
  for(let i = 0; i < cart.length; i++){
      let key = Object.keys(cart[i])[0];
      items.push(key);
  }
  for(let i = 0; i < items.length; i++){
      if(items[i] === item) {
          cart.splice(i, 1);
          return cart;
      }
  }
  console.log(`That item is not in your cart.`);
}

function placeOrder(cardNumber) {
  // write your code here
  if(arguments.length === 0) return console.log('Sorry, we don\'t have a credit card on file for you.');
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
}
