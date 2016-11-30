var cart=[];

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
var price=Math.floor(Math.random() * 101);
cart.push({[item]:price});
console.log(item + " has been added to your cart.");
return cart
}



function viewCart(){
if(cart.length<1){
  console.log("Your shopping cart is empty.");
}
else{
for (var i in cart){
  var itemWithPriceArray= new Array[];
  var itemAndPrice= (`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
itemWithpriceArray.push(itemAndPrice);
}
console.log("In Your cart, you have " + itemAndPrice)
}
}
