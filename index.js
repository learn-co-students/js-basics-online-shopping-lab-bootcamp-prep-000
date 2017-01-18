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
/*function viewCart() {
  if(cart.length ===0) {
    console.log(`Your shopping cart is empty.`)
  }
    var newArray = `In your cart, you have`;
  for(i=0;i<cart.length;i++){
    if (i===0){
        newArray.push(` ${cart[i].item} at ${cart[i][item].price}`)
    }
    newArray.push(`, ${cart[i].item} at ${cart[i][item].price} `)
  }
  console.log(newArray+`.`)
}*/
function viewCart() {
  if (cart.length===0){
    console.log(`Your shopping cart is empty.`)
  }
  else{
  var result =`In your cart, you have `;
  for(var i=0;i<cart.length;i++){
    for(var item in cart[i]){
      if(i===0){
        result += `${cart[i]} at ${cart[i][item]} `
      }else{
    result += `, ${item} at ${cart[i][item]}`
  }
    }
  }
  result += '.'
  }
  console.log(result)
}


/*Define a function removeFromCart which accepts one argument, the name of the item you wish to remove. If the item isn't in the cart, the function should print out "That item is not in your cart.". If the item is in your cart, it should remove the object from the cart array. Then return the cart. (HINT: Check each object's key to see if it matches the parameter, then remove it if it matches. You might find hasOwnProperty to be useful.)*/
function removeFromCart(item){
  if(cart.hasOwnProperty(item)) {
    delete cart[item]
  }
  else{
    console.log(`That item is not in your cart`)
  }
}
