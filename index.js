var cart = [];

function getCart () {
  return cart;
}



function addToCart(item){
  var price = Math.floor(Math.random()*100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart () {
  var itemPrice = [];
  if (cart.length > 0) {
    for(var i = 0; i < cart.length; i ++) {
      var pair = cart[i];
      var cartItem = Object.keys(pair)
      itemPrice.push (`${cartItem} at $${pair[cartItem[i]]}`)
      var string = itemPrice.join(', ');
}
      console.log(`In your cart, you have ${string}.`)
}else{
  console.log("Your shopping cart is empty.")
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
