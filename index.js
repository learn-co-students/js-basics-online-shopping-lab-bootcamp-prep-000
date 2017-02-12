//create global Cart variable, this is our shopping cart
 var cart = [];

//function getCart() returns whatever is currently stored in cart
function getCart() {
  return cart;
}

//function setCart() has argument newCart that is passed to set cart to equal newCart as a global variable
function setCart(newCart) {
  cart = newCart;
}

//add items to our cart
function addToCart(item) {
  //pick a random numbers but then turn it into a full value integar
  const price = Math.floor(Math.random() * 100);
  cart.push({ [item]: price });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  //set the cart size variable
  const cartSize = cart.length;
  //if no items in cart then return empty
  if(!cartSize){
    return console.log("Your shopping cart is empty.");
  }
  //create a cart array
  const cartContents = [];

  for (let i = 0; i < cartSize; i++){
    let itemAndPrice = cart[i];
    let item = Object.keys(itemAndPrice)[0];
    let price = itemAndPrice[item];

    cartContents.push(`${item} at \$${price}`);
  }
console.log(`In your cart, you have ${cartContents.join(', ')}.`);
  }
  
//remove an item from the cart
function removeFromCart(item) {
  let itemInCart = false;

  for (let i = 0, l = cart.length; i < l; i++) {
   if (cart[i].hasOwnProperty(item)) {
     itemInCart = true
     cart = cart.slice(0, i).concat(cart.slice(i + 1))
   }
 }
 
  if (!itemInCart) {
     console.log("That item is not in your cart.")
   }
 
   return cart;
 }

  


//checkout all items in cost and then empty the cart array
function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
}

// returns the $$ total of items in Cart
function total() {
  let t = 0;
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }
  return t;
}
