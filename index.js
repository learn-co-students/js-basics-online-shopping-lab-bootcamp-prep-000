var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart
}

function addToCart(newItem){
  var price = Math.floor(Math.random() * 100);
  cart.push({[newItem]: price});
  console.log(`${newItem} has been added to your cart.`);
  return cart
}

function viewCart(){
  if(cart.length === 0){
    return console.log('Your shopping cart is empty.')
  } else {
    var cartList = []
    for(let i = 0; i < cart.length; i++){
      var itemNameAndPrice = cart[i]
      var itemName = Object.keys(itemNameAndPrice)
      var itemPrice = itemNameAndPrice[itemName]
      cartList.push(`${itemName} at $${itemPrice}`)
    }
    console.log(`In your cart, you have ${cartList.join(', ')}.`)
  }
}

function removeFromCart(removeItem){
  //cart.hasOwnProperty(removeItem)===true
  for(var item in cart){
    for(var i = 0; i < cart.length; i++){
      if(cart[i].hasOwnProperty(removeItem)){
          cart = cart.slice(0, i).concat(cart.slice(i+1))
          return cart
      }
    }
  }
  return console.log('That item is not in your cart.')
}

/*function total() {
  let t = 0
  for(var i = 0, l = cart.length; i < l; i++){
      for (var item in cart[i]) {
      t += cart[i][item]
    }
  }
  return t
}
*/

function total(){
  var totalCost = 0;
  for(var i = 0; i < cart.length; i++){
      for(var cartItems in cart[i])
      totalCost += cart[i][cartItems];
  }
  return totalCost;
}


function placeOrder(ccNumber){
  if(!ccNumber){
    return console.log('We don\'t have a credit card on file for you to place your order.')
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`)
  cart = []
}
