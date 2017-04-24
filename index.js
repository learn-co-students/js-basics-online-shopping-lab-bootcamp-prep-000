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

function getCart() {
  return cart;
}

function addToCart(item){
  cart.push({[item]: Math.floor(Math.random()*100)});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var str = `In your cart, you have `;
  var array = [];
  if (cart.length === 0) console.log("Your shopping cart is empty.");
  else {
    for (let i = 0; i<cart.length; i++){
      for (var item in cart[i]){
        array.push(`${item} at $${cart[i][item]}`);
      }
    }
    console.log(str + array.join(", ") + ".");
    }
}

function removeFromCart(item){
  for (var i = 0; i < cart.length ; i++){
    for (var thing in cart[i]){
      if  (cart[i].hasOwnProperty(item)){
        return cart.splice(i,1);
      }
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(card){
  if (card === undefined) console.log('We don\'t have a credit card on file for you to place your order.');
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${card}.`);
    cart = [];
  }
}
