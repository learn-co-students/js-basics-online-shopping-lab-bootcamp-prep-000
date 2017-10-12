var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const price = Math.floor(Math.random()*100)+1 //generates a new $ value between 1 - 100
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`)
  return cart
}

addToCart('radish')
addToCart('peanut butter');
//addToCart('shame remover')

function viewCart() {
  if (!cart.length){ //if cart length is 0 or FALSE, return empty message
    return console.log("Your shopping cart is empty.");
  }
  let itemsCosts = [] //new array for items + costs
  for (let i = 0; i < cart.length; i++) { //iterates length of the cart and for each
    let cartItem = cart[i] //on each iteration of the loop, the cart[index] is assigned to itemsCosts
    let cartItemKey = Object.keys(cartItem)[0] //cartItem stores the key of the object at cart[i][0], etc...
    let cartItemValue = cartItem[cartItemKey] //assigns value to key
    //console.log(`cartItem = ${cartItem} /n cartItemKey = ${cartItemKey} /n cartItemValue = ${cartItemValue}`)
    itemsCosts.push(`${cartItemKey} at $${cartItemValue}`) //pushes destructured key:value pair as a string
  }
  //console.log(itemsCosts);
  if(itemsCosts.length === 1){
    return console.log(`In your cart, you have ${itemsCosts}.`) //returns this string for single item
  }
  else if(itemsCosts.length === 2){
    itemsCosts = itemsCosts.join(" and ") //itemsCosts elements with " and "
    return console.log(`In your cart, you have ${itemsCosts}.`)
  }
  else{
    itemsCosts[cart.length-1] = "and ".concat(itemsCosts[cart.length-1]) //up until 2nd to last element, joins with "and " as delimiter
    itemsCosts = itemsCosts.join(", ") //as last joins using a comma
    return console.log(`In your cart, you have ${itemsCosts}.`)
  }
}
viewCart();
//console.log(cart)

function total() {
  let sum = 0
  for (let i = 0; i < cart.length; i++) {
    for (let item in cart[i]) {
      sum+=cart[i][item]
    }
  }
  return sum
}
//console.log(total())

function removeFromCart(item){
  let inCart = false; //set flag to false initially
  //console.log(cart[0].hasOwnProperty(item))
  for (let i = 0, len = cart.length; i < len; i++){ //loop to iterate through cart items. set len to cart.length so we can decrease length as we
    if(cart[i].hasOwnProperty(item)) { //if prop "item" is in cart[i] object,
      inCart = true; //change flag to true if found
      //console.log(cart.slice(0,i))
      //console.log(cart.slice(i+1))
      cart = cart.slice(0, i).concat(cart.slice(i + 1)); //set cart equal to
      console.log(cart)
      len--;
    }
  }

  if(!inCart){ //if flag remains false, returns the below
    return console.log("That item is not in your cart.");
  }
  return cart;
}
//removeFromCart("peanut butter")
//console.log(removeFromCart("piebald"))

function placeOrder(cardNumber) {
  const cartTotal = total(); //sets to current cart total
  if(!cardNumber){ //if there is no card print:
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else{ //else, print string literal with cartTotal and cardNumber
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
    return cart=[] //returns an empty cart
  }

}
console.log(cart[0])
//placeOrder(345687487)
placeOrder()
console.log(getCart())
//placeOrder(123456789)
//console.log(cart)
