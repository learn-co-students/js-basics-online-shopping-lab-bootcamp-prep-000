var cart =[];
var cardNumber;

function getCart(){
  return cart;
}

function addToCart(product){
  var price = Math.floor(Math.random()*100);
  console.log(product + " has been added to your cart.")
  cart.push({[product]:price})
  return cart;
}

function viewCart(){
  var arr = [];
  var currentCart = "In your cart, you have ";
  if (cart.length > 0){
    for (var i = 0; i < cart.length; i++){
      var key = Object.keys(cart[i])[0];
      var value = cart[i][key];

      arr.push(key + " at $" + value);
    }
    console.log(currentCart + arr.join(', ') + ".");
  } else {
  console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(product_remove){
  var cartLength = cart.length;
  for (var i =0;i<cart.length;i++){
    var removeKey = Object.keys(cart[i])[0];
    if(removeKey == product_remove){
    cart.splice(i,1)
    return cart;
  }
}
  if (cart.length == cartLength){
    console.log("That item is not in your cart.")
  }

}

function placeOrder(creditCard){
  if(creditCard == null){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else{
    console.log("Your total cost is $" + total() + ", which will be charged to the card 123.")
    cart = [];
  }
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
