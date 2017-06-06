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
  return cart ;
};



//function addToCart(){
//Math.floor(Math.random());
  //cart.push({item: price});
  //console.log(&{item}has been added to your cart.`);
//}

function viewCart(){
  if (cart.length===0) {console.log("Your shopping cart is empty.");}
  else{
  for (var i=0; i<cart.length; i++){
    "In your cart you have [item and price pairs]."
  }
}
};

function removeFromCart(nameofitem){
  if (nameofitem is not in the cart) {console.log("That item is not in your cart.");}
  else (cart.remove nameofitem)
};

function placeOrder(credit card number)

}
