var cart = [];


function setCart(newCart) {
  cart = newCart
}

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  cart.push(item);
  cart.item = price;
  console.log(item + " has been added to your cart.");
  return cart
}

function viewCart()
{
  var newCartArr = [];
  for( var i = 0, l = cart.length; i < l; i++)
  {
      let itemAndPrice = cart[i]
      let item = Object.keys(itemAndPrice)[0]
      let price = itemAndPrice[item]
    newCartArr.push(item + " at " + "$" + price);
}
    if (newCartArr.length > 0){
      console.log('In your cart, you have ' + newCartArr.join(', ') + '.')
    } else {
      console.log('Your shopping cart is empty.')
    }

  }



function removeFromCart(item){
  for (var item in cart) {
  if (cart.hasOwnProperty(item)) {
    console.log(name);
    cart.remove(item);
    return cart
  }
  else {
    console.log("That item is not in your cart.");
    }
  }
}

function placeOrder(ccNum){
  if(ccNum == undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNum}.`);
    while(cart.length > 0){
      cart.pop();
    }
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
