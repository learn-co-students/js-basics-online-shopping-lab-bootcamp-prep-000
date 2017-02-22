var cart=[];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function addToCart(item){
  var prices = Math.floor(Math.random()*100);
  var object = {[item]: prices}
  cart.push(object)
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart(){
  if (cart.length===0){
    console.log('Your shopping cart is empty.')
  }else{
    var array =[];
    for (var i=0; i<cart.length; i++){
      var itemAndPrice = Object.keys(cart[i]) +" at $"+ cart[i][Object.keys(cart[i])];
      array.push(itemAndPrice)
    }
    console.log(`In your cart, you have ${array.join(", ")}.`)
  }
}

function removeFromCart(discardItem){
  for(var i = 0; i<cart.length; i++){
    if(cart[i].hasOwnProperty(discardItem)){
      cart.splice([i],1);
      return cart;
    }
  }
  console.log(`That item is not in your cart.`)
}


function placeOrder(cc){
  if(cc){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`);
    cart = [];
  }else{
    console.log(`We don't have a credit card on file for you to place your order.`)
  }
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
