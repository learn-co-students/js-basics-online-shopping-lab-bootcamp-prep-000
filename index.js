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
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return getCart();
}

function viewCart(){
  var cartList = 'In your cart, you have ';
  var lastItem = cart[cart.length-1];
  if(cart.length > 0){
    for(var i=0, l = cart.length; i < cart.length-1; i++)
      for (var item in cart[i]){
        cartList += `${item} at $${cart[i][item]}, `
    }
    for (var item in cart[cart.length-1]){
        cartList += `${item} at $${cart[i][item]}.`
    }
    console.log(cartList)
  }else{
    console.log('Your shopping cart is empty.')
  }
}

function removeFromCart(item){
  var itemsInCart = []
  for(var i=0, l = cart.length;i < cart.length;i++){
    if(cart[i].hasOwnProperty(item) === true)
     itemsInCart.push(i);
  }
  if(itemsInCart.length !== 0){
    for(var i=0; i < itemsInCart.length; i++){
      cart.splice(itemsInCart[i],1);
    }
  }else{
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber){
  if(cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  }else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}
