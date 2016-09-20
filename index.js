var cart =[];    // empty array

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

  var price = Math.floor(Math.random() * 100);
  cart.push({[item]: price});

    console.log(`${item} has been added to your cart.`);

    return cart;
}

function viewCart(){
  if (cart.length === 0) {
   console.log('Your shopping cart is empty.');
 }
 else
{
   var shoppingCart = [];
   for (var i = 0 , c = cart.length; i < c; i++) {
     for (var item in cart[i]) {
       shoppingCart.push(`${item} at $${cart[i][item]}`);
     }
   }
   console.log(`In your cart, you have ${shoppingCart.join(', ')}.`);
 }
}


function removeFromCart(item){
  let cartItem = false

  if (!cartItem) {
    console.log("That item is not in your cart.");
  }

    for (let i = 0, c = cart.length; i < c; i++) {
      if (cart[i].hasOwnProperty(item)) {
        cartItem = true
        cart = cart.slice(0, i).concat(cart.slice(i + 1))
      }
    }

    return getCart()
  }


  function placeOrder(cardNumber) {

    if (!cardNumber)
     {
      console.log("We don't have a credit card on file for you to place your order.");
    }
    else {
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

      cart = [];
  }
}
