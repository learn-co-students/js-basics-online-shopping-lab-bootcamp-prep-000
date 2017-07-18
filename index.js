var cart = {};

function addToCart(name){
var holder = Math.random() * 100;
holder = Math.floor(holder);
console.log(name + " has been added to your cart.");
cart[name] = holder;
return cart;
}

function viewCart(){
  for (i in cart){
       return    "In your cart, you have " + cart[i] + " at $" + i + " , " + cart[i] + " at $" +  i + ", " +  "and " +  cart[i] + " at " + $49 + ".";
  }
}
