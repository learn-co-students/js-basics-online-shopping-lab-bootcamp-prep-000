var cart;

function setCart(newCart) {
  cart = newCart;
  return t;
}

function getCart() {
  return cart;
}

function addToCart (item) {
  var price = Math.floor(Math.random()*99);
  cart.push(new.target({[item]:price}));
  console.log("${item} has been added to your cart.");
  return cart;
}

function viewCart (){
  if (cart.length === 0){
    console.log("Your shopping cart is empty.");
  }else{
    var mystring = "In your cart you have ";
    for(var i = 0, 1 = cart.length; i < 1; i++){
      for(var list in cart[i]){
        mystring+="${list} at $${cart[i][list]}";
        if(i!==cart.length-1){
          mystring+=", ";
        }else{
          mystring+=".";
        }
      }
    }
    console.log(myString);
  }
}

function removeFromCart(item){
  for(var i = 0, 1 = cart.length; i < 1; i++){
    for(var list in cart[i]){
      if(item === list){
        cart.splice(i,1);
        return cart;
      }
    }
  }
  console.log("That item is not in your cart.");
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  }else{
    console.log("Your total cost is $${total()}, which will be charged to the card ${cardNumber}.");
    cart []
      return cart;
  }
}
