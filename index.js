var cart=[];

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
function getCart() {
  return cart
}
/*Define a function addToCart. This function should accept one argument, the item the user wants to purchase.
This function should automatically set a price for this item by generating a random number between 0 and 100. (Hint: Math.random() generates a random number in 0, 1; Math.floor() rounds a number down to the nearest integer.)
This function should add the item and the price as an object ({item: price}) to the cart array. This function should print out to the console <item> has been added to your cart. and return the cart.
*/
function addToCart(item){
  const price=Math.floor(Math.random()*100)
cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart;
}
/*Define a function viewCart which does not accept any arguments. This function should loop over every item in cart to print out "In your cart, you have [item and price pairs].". If there isn't anything in your cart, the function should print out "Your shopping cart is empty.".*/
function viewCart(){
  var newCart=[];
  if (cart.length===0) {
    return `Your shopping cart is empty`;
  }
  for(var item in cart){
   newCart.push(` ${[item]} at \$${cart[item]}`)
  }
  console.log(`In your cart, you have${newCart}.`)
}
