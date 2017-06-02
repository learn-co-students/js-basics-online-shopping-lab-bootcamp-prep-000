var cart = [];


function getCart(){return cart}
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

function addToCart(item){
  var price = Math.floor(Math.random()*100);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  var out = "Your shopping cart is empty.";
  if (cart.length >0){
    out="In your cart, you have "
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        out += item
        out += " at $"+cart[i][item]
      }
      out += (i+1<l)?", ":"."
    }
  }
  console.log(out);
}

function removeFromCart(item){
  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return cart;
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber){
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart=[];
  } else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
