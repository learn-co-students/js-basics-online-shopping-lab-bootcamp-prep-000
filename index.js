var cart = [];
function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;
for(var i = 0; i < cart.length; i++){
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }


  return t;
}

function getCart(){
  return cart;
}
function addToCart(item){
  var thing = {}
  thing[item] = Math.floor(Math.random()*100);
  cart.push(thing);
  console.log(`${item} has been added to your cart.`);
  return getCart();
}

function viewCart(){
   if(cart.length>0){
   var phrase =  "In your cart, you have";
    for(var i = 0; i < cart.length; i++){
        for (var item in cart[i]) {
          if(cart[i] !== cart[cart.length-1]){
             phrase+= ` ${item} at $${cart[i][item]},`
                  }
          else{
          phrase+= ` ${item} at $${cart[i][item]}.`
          }
        }
      }
   }
    else{
   console.log("Your shopping cart is empty.")
      }
    console.log(phrase);
}

function removeFromCart(item){
  var count = 0;
  for(var i = 0; i<cart.length;i++){
     if(cart[i].hasOwnProperty(item)){
       cart.splice(i);
       count++;
     }
  }
  if(count===0){
    console.log('That item is not in your cart.' )
  }
  return cart;
}

function placeOrder(cardNumber){
  if(cardNumber === undefined){
      console.log("We don\'t have a credit card on file for you to place your order.");

}
else{
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
}
cart = [];

}
