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
  cart.push({[item]: Math.floor(Math.random()*100)})
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){

  var items = "In your cart, you have ";
  console.log( cart[0] === undefined ? "Your shopping cart is empty." : function(){
    for(var i = 0; i< cart.length; ++i){
      var item = Object.keys(cart[i])
      items += `${item} at $${cart[i][item]}${i<cart.length-1 ? ', ':'.'}`
    }
    return items;
  }())
  return
}

function removeFromCart(item){
  if (cart[0] === undefined){
    console.log('That item is not in your cart.')
    return
  }
  for (var i = 0; i < cart.length; ++i){
    if(cart[i].hasOwnProperty(item)){
      cart = [];
    }
  }
  return cart;
}

function placeOrder(cardNumber){
  if (cardNumber !== 123){
    console.log("We don't have a credit card on file for you to place your order.");
    return;
  } else {
    var sum =0;
    console.log(`Your total cost is $${cart.reduce((a,b)=>{sum += b[Object.keys(b)];return sum},[])}, which will be charged to the card ${cardNumber}.`);
    cart =[];
    return
  }
}
