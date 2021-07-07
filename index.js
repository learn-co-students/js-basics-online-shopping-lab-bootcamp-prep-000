var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push(new Object({[item]: price}));
  
  console.log(`${item} has been added to your cart.`);
  return cart;
}


function viewCart() {
  if (cart.length == 0){
    console.log("Your shopping cart is empty.");
  }
  var array = [];
  for (let i=0; i < cart.length; i++){
  
  var cartItem = Object.keys(cart[i])[0];
  var itemPrice = cart[i][cartItem];
  
  array.push(`${cartItem} at $${itemPrice}`);
    
  if (cart.length == 1){
    console.log(`In your cart, you have ${array}.`);
  } else if (cart.length == 2){
    console.log(`In your cart, you have ${array.join(" and ")}.`)
  } else {
      cart.length >= 3
      var newArray = array.slice(0, -1)
      console.log(newArray);
      console.log(`In your cart, you have ${newArray.join(", ")}, and ${array[array.length-1]}.`)
      }
    }
  }



function total() {
  total = 0;
  for (let i = 0; i < cart.length; i++){
  
  total += parseInt(Object.values(cart[i]))
  } return total 
}


function removeFromCart(item) {
for (var i = 0; i < cart.length; i++) {
  if (cart[i].hasOwnProperty(item)) {
    cart.splice(i, 1);
    return cart;
    }
  }
 console.log("That item is not in your cart.");
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else { 
    console.log(`Your total cost is $${total}, which will be charged to the card ${cardNumber}.`)
    cart = []
}
}
