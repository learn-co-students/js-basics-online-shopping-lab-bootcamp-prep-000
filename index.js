var cart;

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
  var price = Math.floor(Math.random() * 1000);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if(cart.length===0){
    console.log("Your shopping cart is empty.");
  }else{
    var cartsum = "In your cart, you have ";
    for(var i =0; i<cart.length; i++){
      var keys = Object.keys(cart[i]);
      cartsum = cartsum + `${keys} at $${cart[i][keys]}${(i+1)===cart.length ? '.':', '}`;
    }
    console.log(cartsum);
  }
}

function removeFromCart(item){
  console.log(cart);
  //if(cart.length>0){
    var found = false;

    for(var i=0; i<cart.length; i++){
      if(cart[i].hasOwnProperty(item)){
        found = true;
        console.log("found");
        cart.splice(i,1);
      }
    }
    if(found){
      return cart;
    }else{
      console.log("That item is not in your cart.");
    }

  //}else{
    //console.log("Your shopping cart is empty.");
  //}
}

function placeOrder(num){
  if(num ==undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${num}.`);
    cart = [];
  }
}
