var cart = [{"motorcycle": 500}, {"piano": 200}];

function viewCart()
{
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  else{
    var key = [];
    var value = [];
    var message = `In your cart, you have `;
    for(var i = 0;i < cart.length;i++){
      key = Object.keys(cart[i]);
      value = cart[i][key[0]];
      var addOn = `${key} at $${value}, `;
      console.log(addOn);
      message += addOn;
    }
    message = message.slice(0,-2);
    message += ".";

    console.log(message);
  }
}

function removeFromCart(item)
{
  var temp = [];
  var deleted = false;
  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      deleted = true;
      continue;
    }
    else {
      temp.push(cart[i]);
    }
  }
  cart = temp;
  if(deleted === false){
    console.log("That item is not in your cart.");
  }

}

function placeOrder(creditNumber)
{
  if(creditNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditNumber}.`)
  }
  cart = [];
}

function setCart(newCart) {
  cart = newCart;
}

function getCart()
{
  return cart;
}

function addToCart(item)
{
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`)
  return cart;
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
