var cart =[];

function getCart(){
return cart
};

function addToCart(item){
   var price = Math.random(Math.floor()*100)
cart.push({ [item]: price});
  console.log(item + ' has been added to your cart.');
  return cart;
};
function viewCart(){
  var things = cart.length
  if (!things){
    return console.log("Your shopping cart is empty.");
  }else{

  var itemsPrices = []
  for (var i in cart){
    var itemAndPrice = cart[i];
      for (var key in itemAndPrice){
         itemsPrices.push(key + " at $" + itemAndPrice[key])
     }
   }
      var cartItems = itemsPrices.join(", ");
      console.log("In your cart, you have " + cartItems + ".")
  }
}

function removeFromCart(item){
  let itemCheck = false
  for (let i = 0, thing = cart.length; i < thing; i++) {
    if (cart[i].hasOwnProperty(item)) {
     itemCheck = true
     cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }
  if(!itemCheck){
    console.log( "That item is not in your cart.")
  }
  return cart
}
function placeOrder(cc){
  if(!cc){
   console.log("We don't have a credit card on file for you to place your order.")
  }

console.log("Your total cost is $" + total() + ", which will be charged to the card " + cc +".")
cart = []
}
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
