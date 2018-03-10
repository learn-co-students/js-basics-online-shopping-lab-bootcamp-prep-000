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
      console.log("hello")
      var newArray = array.slice(0, -1)
      console.log(newArray);
      console.log(`In your cart, you have ${newArray.join(", ")}, and ${array[length-1]}.`)
      }
    }
  }



function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
