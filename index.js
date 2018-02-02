var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
const price = Math.floor(Math.random()*100)
 cart.push({[item]:price});
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length=== 0) return console.log("Your shopping cart is empty.")

     if (cart.length===1) return console.log(`In your cart, you have ${Object.keys(cart[0])} at $${ cart[0][Object.keys(cart[0])] }.`);

    if (cart.length===2) return console.log(`In your cart, you have ${Object.keys(cart[0])} at $${ cart[0][Object.keys(cart[0])] } and ${Object.keys(cart[1])} at $${ cart[1][Object.keys(cart[1])] }.`)



     if(cart.length >= 3){

       var stringArray = [];

       for(let i = 0; i < cart.length; i++){

         stringArray.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}` )
       }

     let lastArrayElement = stringArray.slice(-1)[0]
     let finalString = stringArray.pop()

      return console.log(`In your cart, you have ${stringArray.join(", ")}, and ${lastArrayElement}.` );

    }
    }


function total() {

  let  total = 0
   for(let i = 0; i<cart.length; i++){

   let price = cart[i][Object.keys(cart[i])];

      total= total + price;
      }
   return total;

}

function removeFromCart(item) {
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);

  } }} else {
  console.log("That item is not in your cart.");
  }
  }

function placeOrder(cardNumber) {
  if(cardNumber===undefined)
    return console.log("Sorry, we don't have a credit card on file for you.")

  if(cardNumber===cardNumber){
       console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  return cart = []
     }
}
