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
var itemsInCart= "";
  if(cart.length<1){
    console.log("Your shopping cart is empty.");
}
  else{
      for (var i in cart){
        var itemAndPrice= (`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `)
        itemsInCart+= itemAndPrice; //add to items in cart before the loop stars again
}
}
console.log("In your cart, you have " + itemsInCart.slic(0,-2) +".");

}
