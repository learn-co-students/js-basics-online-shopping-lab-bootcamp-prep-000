var cart = [];

function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 const itemLabel = { [item] : getRandomInt(100) };

 cart.push(itemLabel);

 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if(!cart.length){
    console.log("Your shopping cart is empty.");
    return;
  }

  let str = `In your cart, you have ${Object.keys(cart[0])[0]} at $${Object.values(cart[0])[0]}`;
  if(cart.length > 1){
    if(cart.length > 2){
        for(let i = 1; i < cart.length - 1; ++i){
          str += `, ${Object.keys(cart[i])[0]} at $${Object.values(cart[i])[0]}`;
        }

        str += `, and ${Object.keys(cart[cart.length - 1])[0]} at $${Object.values(cart[cart.length - 1])[0]}.`;
    }
    else{
      str += ` and ${Object.keys(cart[1])[0]} at $${Object.values(cart[1])[0]}.`;
    }
  }
  else{
    str += ".";
  }

  console.log(str);
}

function total() {
  // write your code here
  let sum = 0;

  for(let i = 0; i < cart.length; ++i)
    sum += Object.values(cart[i])[0];

  return sum;
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; ++i){
    if(Object.keys(cart[i])[0] == item){
      cart.splice(i, 1);
      return cart;
    }
  }

  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }

  return cart;
}
