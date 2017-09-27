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
 var newItem = { [item]: Math.floor(Math.random(1, 101)*100) };
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if(!cart.length){
    return console.log("Your shopping cart is empty.");
  }
  var arrNameAndPrice =[];//store the objects in cart to later print them
  for(let i =0; i <cart.length;i++){//divide the information
    var iName = Object.keys(cart[i]);
    var productName = iName[0];
    var iPrice = cart[i][iName];
    arrNameAndPrice.push(`${iName} at $${iPrice}`);
  }
  if(arrNameAndPrice.length === 1){
    return console.log(`In your cart, you have ${arrNameAndPrice.join()}.`);
  } else if(arrNameAndPrice.length === 2) {
    return console.log(`In your cart, you have ${arrNameAndPrice[0]} and ${arrNameAndPrice.slice(-1)}.`);
  } else {
    return console.log(`In your cart, you have ${arrNameAndPrice.slice(0,-1).join(', ')}, and ${arrNameAndPrice.slice(-1)}.`);
  }
}

function total() {
  // write your code here
  var total = 0;
  for(let i = 0; i < cart.length; i++){
    var iName = Object.keys(cart[i]);
    var productName = iName[0];
    total += parseInt(cart[i][productName], 10);// convert to an integer using a 2d array
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  for(let i =0; i<cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      return cart.splice(i,1); //This will remove at index i element
    }
  }
  return console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    return console.log("Sorry, we don't have a credit card on file for you.");
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart =[];//empty cart
    return cart;
  }
}
