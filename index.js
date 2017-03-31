var cart = [];

function setCart(newCart) {
  cart = newCart;
}
function getCart(){
  return cart;
}
function addToCart(item){
  var price = Math.floor(Math.random()*100);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  const l = cart.length;
  if(!l){
    return console.log(`Your shopping cart is empty.`);
  }
  const keyValues = [];
  for(let i = 0; i < l; i++){
      var temp = cart[i];
      let key = Object.keys(temp)[0];
      let value = temp[key];
      keyValues.push(`${key} at \$${value}`);
    }
    console.log(`In your cart, you have ${keyValues.join(', ')}.`);
}

function removeFromCart(item){
  let isItem = false;
  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      isItem = true;
      cart = cart.slice(i,0).concat(cart.slice(i+1));
    }
  }
  if(!isItem){
      console.log("That item is not in your cart.");
    }
  return cart;
}

function placeOrder(num){
  if(!num){ return console.log("We don't have a credit card on file for you to place your order.") };

  console.log(`Your total cost is $${total()}, which will be charged to the card ${num}.`);

  cart = [];
}

function total() {
  let t = 0;
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}
