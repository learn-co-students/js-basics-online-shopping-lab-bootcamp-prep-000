 var cart = [];

function getCart(){
  return cart;
}

function addToCart(item){
   var itemPrice = Math.floor(Math.random() * 100)
   cart.push({item: item.price})
   console.log(`${item} has been added to your cart.`)
   return cart
}

function viewCart() {
   if(cart.length === 0) {
     console.log('Your shopping cart is empty.')
   }
   else {
     var newCart = []
     for (var i = 0; i < cart.length; i++) {
       for (var item in cart[i]) {
         newCart.push(`${item} at $${cart[i][item]}`)
       }
     }
     var joinNewCart = newCart.join(', ')
     console.log("In your cart, you have " + joinNewCart + ".")
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
