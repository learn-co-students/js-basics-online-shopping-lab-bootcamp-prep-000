var cart = [];
function getCart() {
  return cart;
}



  function addToCart(item) {
  var price = Math.floor((Math.random() * 100) + 1);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return cart;
  }

  function viewCart() {
         var itemPrice = [];
         if (cart.length < 1){
           return console.log(`Your shopping cart is empty.`);
         }
        for (var i = 0; i < cart.length; i++){
            var pair = cart[i];
            var item = Object.keys(pair);
            var price = pair[item];
            itemPrice.push(`${item} at $${price}`);
        }
        return console.log(`In your cart, you have ${itemPrice.join(', ')}.`);
      }

      function removeFromCart(article){
    var itemInCart = false;
for (var name in cart) {
    var item = cart[name];
    var itemName = Object.keys(item)[0];
    if (itemName === article){
        cart.splice(name, 1);
        itemInCart = true;
        return cart;
        }
}
if (!itemInCart){
        console.log("That item is not in your cart.");
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

function placeOrder(cardNumber) {
  if (!cardNumber){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
}
