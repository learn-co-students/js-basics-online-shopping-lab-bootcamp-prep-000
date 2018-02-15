var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random() * 100);
 cart.push({ [item]: price });
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  //I don't know why the test only works with console.log and not return.
  let print = [];
  if(cart.length === 0){
    console.log("Your shopping cart is empty.");
  }
  //loop through cart array
  for(let i = 0; i < cart.length; i++){
    print.push( `${ i === cart.length - 1 && cart.length >= 3 ? 'and ' : ''}${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}` );
  }
 console.log(`In your cart, you have ${print.join( cart.length < 3 ? ' and ' : ', ')}.`);
}

function total() {
  let total = 0;
  for(let i = 0; i < cart.length; i++){
    total += parseInt(cart[i][Object.keys(cart[i])]);
  }
  return total;
}

function removeFromCart(item) {
    for(let i = 0; i < cart.length; i++){
      if(cart[i].hasOwnProperty(item)){
        cart.splice(i, 1);
		    return cart;
      }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if(cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
