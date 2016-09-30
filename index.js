var cart;

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
  return cart
}

function addToCart(item){
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var n = getRandomInt(1, 100)
  //cart[item] = n;
  cart.push({ [item]: n })
   console.log(`${item} has been added to your cart.`)
   return cart
}
/*
function viewCart(){
          var temp = Array()
          var n = cart.length
  if (!n){
        return console.log("Your shopping cart is empty.")
  }else{
for (var i = 0; i < n; i++){
  var pair = cart[i]
  var key = Object.keys(pair)[0]
  var value = pair[key]
      temp.push(`${key} at \$${value}`)
  }
      return console.log("In your cart you have" + temp + ".")
  }
}
*/

function viewCart() {
   var allItems = [];
   if(cart.length === 0) {
     console.log("Your shopping cart is empty.");
   }
   else {
     for(var i = 0; i < cart.length; i++) {
       var item = Object.keys(cart[i])
       allItems.push(` ${item} at $${cart[i][item]}`);
     }
     console.log("In your cart, you have" + allItems + ".");
   }
 }



function removeFromCart(item){
  var n = cart.length
if (!n){
  return console.log("That item is not in your cart.")
} else {
  for (var i = 0; i < cart.length; i++){
     if(cart[i].hasOwnProperty(item)) {
       cart.splice(i, 1);
       return cart;
     }
  }
}
}




function placeOrder(n){
if (n === undefined){
  return console.log("We don't have a credit card on file for you to place your order.")
}else{

  console.log(`Your total cost is $${total()}, which will be charged to the card ${n}.`)

}


  cart = [];
  return cart
}
/*
function total(){
    var n = 0;
  for (var i = 0; i < cart.length; i++){
    for (var item in cart[i]){
      n + cart[i][item]
    }

}
return n
}

*/

