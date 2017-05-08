var cart = [];
function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
    cart.push({[item]: price});
    console.log(`${item} has been added to your cart.`);
    return cart;
}

function viewCart(){
  let list = [];
  if(cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }

  else {
    for (var i = 0, l = cart.length; i < l; i++) {
      let item = Object.keys(cart[i])[0];
      let object = cart[i];
      let price = object[item];
      list.push(` ${item} at $${price}`);
      }
      console.log(`In your cart, you have${list}.`);
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

function removeFromCart(item){
  let itemInCart = false

  for(let i = 0, l = cart.length; i < l; i++){
    if(cart[i].hasOwnProperty(item)){
      let index = cart.lastIndexOf(item)
      cart.splice(index, 1)
      itemInCart = true
      return cart;
    }
  }

  if(itemInCart === false){
    console.log("That item is not in your cart.")
  }
}


function placeOrder(cc){
  if(!cc){
    console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cc}.`)
  cart = []
}
