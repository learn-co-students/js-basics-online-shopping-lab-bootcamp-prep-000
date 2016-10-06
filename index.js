var cart = [];

function setCart(newCart) {
  cart = newCart
}

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random() * 100);
  cart.push({ [item]: price })
  console.log(item + " has been added to your cart.");
  return cart
}

function viewCart()
{
  if (cart.length == 0)
    {
		return console.log('Your shopping cart is empty.');
      }

  var newCartArr = [];
  for( var i = 0, l = cart.length; i < l; i++)
  {
      let itemAndPrice = cart[i]
      let item = Object.keys(itemAndPrice)[0]
      let price = itemAndPrice[item]
    newCartArr.push(item + " at " + "$" + price);
}

      console.log('In your cart, you have ' + newCartArr.join(', ') + '.')

  }


function removeFromCart(item){
  for (var item in cart) {
  if (cart.hasOwnProperty(item) == true) {
    console.log(item);
    cart.pop(item);
    return cart
  } 
    }
    console.log("That item is not in your cart.");
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

removeFromCart()
