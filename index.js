var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var cartItem = {};
 var itemPrice = Math.floor(Math.random() * 100 + 1);
 cartItem[item] = itemPrice;
 cart.push(cartItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

//The code for viewCart() technically works but is clumsy, not efficient, hardcodes a lot
function viewCart(){
    var cartStatus = "In your cart, you have"
    if (cart.length === 0){
      console.log ("Your shopping cart is empty.");
      }
      else if (cart.length === 1){
        console.log (cartStatus += ` ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
      }
      else if (cart.length === 2){
        console.log (cartStatus += ` ${Object.keys(cart[0])} at $${Object.values(cart[0])} and ${Object.keys(cart[1])} at $${Object.values(cart[1])}.`)
      }
      else {
        for (let i = 0; i < cart.length; i++){
          if (i != cart.length - 1){
            cartStatus +=  ` ${Object.keys(cart[i])} at $${Object.values(cart[i])},`
        } else if (i === cart.length - 1){
            cartStatus += ` and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`
        } 
      }
      console.log(cartStatus)
      ;
  }
}

//The below is test code that didn't work but that I'm unwilling to discard
/*
function viewCart(){
    var cartStatus = "In your cart, you have"
    if (cart.length === 0){
      console.log ("Your shopping cart is empty.");
      }
      else if (cart.length === 1){
        console.log (cartStatus += ` ${Object.keys(cart[0])} at $${Object.values(cart[0])}.`)
      }
      else {
        for (let i = 0; i < cart.length; i++){
          if (i != cart.length - 1){
            cartStatus +=  ` ${Object.keys(cart[i])} at $${Object.values(cart[i])},`
        } else if (i === cart.length - 1){
            cartStatus += ` and ${Object.keys(cart[i])} at $${Object.values(cart[i])}.`
        } 
      }
      console.log(cartStatus)
      ;
  }
}
*/

function total() {
  var cartTotal = 0;
  for (let i = 0; i < cart.length; i++){
    cartTotal += parseInt(Object.values(cart[i]))
  }
  return(cartTotal)
}

function removeFromCart(item) {
for (let i=0; i < cart.length;i++){
    if (cart[i].hasOwnProperty(item)){
        cart.splice(i,1);
        return cart;
           }
         }
    console.log(`That item is not in your cart.`);
    return cart;
  }

function placeOrder(cardNumber) {
  if (!cardNumber){
    console.log (`Sorry, we don't have a credit card on file for you.`);
    return cart
    } 
  
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  
  cart = [];
}
