var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
function getCart(){
  return (cart);
}

function addToCart(item){
   var price = Math.floor(Math.random()*100) + 1;
   // {pizza: 35}
   cart.push({[item]: price});
   console.log(`${item} has been added to your cart.`);
   return cart;
}

function viewCart(){
  // google array join(how you want to divide the elements in the string) - javascript
  if (cart.length>0){

 var tmp = [];
for (var i = 0, l = cart.length; i < l; i++) {
  var mealNames = Object.keys(cart[i])
  tmp.push(` ${mealNames[0]} at $${cart[i][mealNames[0]]}`)
      }//end of for loop
    console.log(`In your cart, you have${tmp}.`);
  }//End of if
  else{
    console.log ('Your shopping cart is empty.');
  }//End of else
}//end of viewCart
function removeFromCart(item) {

  for(let i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      return cart
    }
  }
    console.log("That item is not in your cart.")
}
function add(cart){
  cost = Object.values(cart)
  var total = 0;
  for (var i = 0; i<cost.length; i++){
      total += cost[i];
  }
  return payment = total;
}
function placeOrder(cardNumber){
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }//end of if
  else{
    console.log(`We don't have a credit card on file for you to place your order.`)
  }
}
