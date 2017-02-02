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
  return cart;
}
function addToCart(item){
  var price = Math.floor(Math.random()*100);
  cart[cart.length] = {[item]: price} ;
  console.log(`${item} has been added to your cart.`);
  return cart;
}
function viewCart(){
  var myCart = getCart();
  if (myCart.length>0){
  var cartInfo =`In your cart, you have `;
    for (var i=0, l= myCart.length; i<l; i++){
      var item = Object.keys(myCart[i]);
      cartInfo += `${item} at $${myCart[i][item]}${(i===l-1)?'.':', '}`;
    }
    console.log(cartInfo);
    return cartInfo;
  }else{
    console.log("Your shopping cart is empty.");
  }
}
function removeFromCart(item) {
    var myCart = getCart();
    var l = myCart.length;
    if(l !== 0){
      for (var i = 0; i <l ; i++) {
          if (myCart[i].hasOwnProperty([item])) {
              myCart.splice(i, 1);
              return myCart;
          } else {
              console.log("That item is not in your cart.")
          }
        }
    }else{
      console.log("That item is not in your cart.")
    }
}
function placeOrder(cardNumber){
  if(arguments.length===1){
    var newCart = [];
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    setCart(newCart);

  }else{
    console.log("We don't have a credit card on file for you to place your order.");
  }

}
