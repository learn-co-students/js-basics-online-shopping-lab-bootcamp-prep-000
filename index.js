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
  return cart
}
function addToCart(item){
   var price=Math.floor(Math.random()*100)
      cart.push({[item]:price})
    console.log(item + " has been added to your cart.")
  return cart
}


function viewCart(){
  var newArray=[];
  if (cart.length<1){
    console.log ("Your shopping cart is empty.")
      }else{
        for(var i=0;i<cart.length;i++){
          for (var item in cart[i]){if (i===0){
            newArray.push(`${item} at $${cart[i][item]}`)
            }else {newArray.push(` ${item} at $${cart[i][item]}`);
           }
          }
        }console.log(`In your cart, you have ${newArray}.`)
    }
}
function removeFromCart (item){
 for (var i=0; i<cart.length; i++){
    for (var key in cart[i]){
      if (key === item){
         cart.splice(i,1);
         return cart
     }else{
    }
   }
  }console.log ("That item is not in your cart.")
}

function placeOrder(cardNumber){
  if(typeof cardNumber=== "number"){
   console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
   cart = []
  }else{
    console.log ("We don't have a credit card on file for you to place your order.");
    }
 }
