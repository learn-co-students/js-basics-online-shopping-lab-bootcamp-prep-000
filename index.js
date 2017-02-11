
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
  return cart
}

function addToCart(item){
let price = Math.floor(Math.random * 100)
cart.push({[item] : price})
console.log(`${item} has been added to your cart.`)
return cart
}

function viewCart(){
  var itemList = [];
  if(cart.length === 0){
    console.log('Your shopping cart is empty.')
  } else{
    for(let i = 0; i < cart.length; i++){
      var itemAndPrices = cart[i];
      var item = Object.keys(itemAndPrices)[0];
      var price = itemAndPrices[item];
      itemList.push(`${item} at \$${price}`);
      console.log(`In your cart, you have ${itemList.join(", ")}.`)
    }
  }
}

function removeFromCart(removedItem){
for(let i = 0; i < cart.length; i++){
  var itemAndPrices = cart[i];
  var item = Object.keys(itemAndPrices)[0];
  if(item == removedItem){
  cart.splice(i,1);
  return cart;
}
} console.log("That item is not in your cart.")
}



function placeOrder(cardNumber){
  if(cardNumber == null){
    console.log("We don't have a credit card on file for you to place your order.")
  } else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }
}
