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
  const price = Math.floor( Math.random()*100 );
  cart.push({ [item]: price });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if (cart.length == 0) {
    return console.log("Your shopping cart is empty.");
  }
  else {
    var array = [];
    for (let i = 0; i < cart.length; i++) {
      let item = Object.keys(cart[i])[0]
      let price = cart[i][item]

      array.push(`${item} at \$${price}`)
    }
    console.log(`In your cart, you have ${array.join(', ')}.`);
  }
}

function removeFromCart(item){
  var index = 0;
  while( index < cart.length && (Object.keys(cart[index])[0] != item) ){
    index++;
  }
  if(index >= cart.length)
    return console.log("That item is not in your cart.");

  cart = cart.slice(0, index).concat(cart.slice(index + 1));
  return cart;
}



function placeOrder(number){
  if(!number)
    return console.log("We don't have a credit card on file for you to place your order.");

  console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`);
  var newCart = [];
  setCart(newCart);
}

addToCart("pizza");
removeFromCart("pizza");
console.log(cart);
