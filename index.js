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
cart.push({item:price});
console.log(item + " has been added to your cart.");
return cart
}



function viewCart(){
if (cart>=1){
  for (var itemincart in cart){
    console.log(`In your cart, you have ${cart} at $ ${cart[itemincart]}. `)
}}
else{
  console.log("Your shopping cart is empty.");
}
}
