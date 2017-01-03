var cart=new Array();

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
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random()*100);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
if (cart.length>0) {
var print = "In your cart, you have ";
for (var i=0; i<cart.length-1; i++){
  for (var item in cart[i]){
    print+= `${item} at $${cart[i][item]}, `;
  }
}
print+=`${Object.keys(cart[cart.length-1])} at $${cart[cart.length-1][Object.keys(cart[cart.length-1])]}.`;
console.log(print);
}
else{
  console.log("Your shopping cart is empty.");
}
}

function removeFromCart(remove){
  var before = cart.length;
  for (var i=0; i<cart.length; i++){
    for (var item in cart[i]){
      if (item === remove){
        cart= [...cart.slice(0,i),...cart.slice(i+1)];
      }
      }
  }
  if (before === cart.length){
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber){
  if (cardNumber==null){
    console.log ("We don't have a credit card on file for you to place your order.");
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart=[];

}
