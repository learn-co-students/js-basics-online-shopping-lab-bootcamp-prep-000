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

function getCart()
{
  return cart;
}

function addToCart(item)
{
  var price = Math.floor(Math.random()*100);
  var list = {};
  list[item]=price;
  cart.push(list);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if (cart.length === 0)
  {
    console.log("Your shopping cart is empty.")
  }
  else
  {
    var sent = "In your cart, you have ";
    for (var i = 0; i < cart.length; i++){
      for (var item in cart[i]){
        sent += `${item} at $${cart[i][item]}${i !== cart.length-1 ? ', ' : '.'}`;
      }
    }
  }
  console.log(sent);
}

function removeFromCart(item){
  for(var i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1);
      { break };
    }
  }
  console.log("That item is not in your cart.")
}

function total(){
  var total = 0;
  for(var i = 0; i < cart.length; i++){
    for(var item in cart[i]){
      total+=cart[i][item];
    }
  }
  return total;
}

function placeOrder(creditCard){
  if (creditCard === undefined){
    console.log('We don\'t have a credit card on file for you to place your order.');
  }else {
    var thisTotal = total();
    console.log(`Your total cost is $${thisTotal}, which will be charged to the card ${creditCard}.`);
  }
  cart = [];
}

function total()
{
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}
