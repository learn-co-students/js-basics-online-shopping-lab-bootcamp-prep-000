var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c
  return cart
}

function addToCart(item) {
return var price = math.random()*100
var ar roundedPrice = Math.floor(price)
 cart.push({ [item]: roundedPrice})
 console.log(`${item} has been added to your cart.`)
 return cart;
}
for (var item in cart){
       let pair = (cart[item])
      let key = Object.keys(pair)
      var itemPrice = (pair[key])
      itemOrder.push(`${key} at $${itemPrice}`)
      }
       console.log(`In your cart, you have ${itemOrder.join(', ')}.`)
  }

 function removeFromCart(item){
  var inCart = false;

  for (var i = 0; i < cart.length; i++) {
     if (cart[i].hasOwnProperty(item)) {
      inCart = true;
       cart = [...cart.slice(0,i), ...cart.slice(i+1)]
     }
   }
    if (!inCart){
       console.log("That item is not in your cart.")
    }
     return cart;
 }

 function placeOrder(cardNumber){
   if (!cardNumber){
     console.log("We don't have a credit card on file for you to place your order.")
   }else{
     console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  }
   cart = []
