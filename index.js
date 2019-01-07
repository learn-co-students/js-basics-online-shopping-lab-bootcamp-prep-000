var cart = [];
/* Generates random prices, based on min and maximum prices given by the parameters, min and max inclusive */
function randomPrice(min,max){
var min = Math.ceil(min);
var max= Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]:randomPrice(1,100)})
  console.log (`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var itemsNumber = cart.length
  var tempCart = []
  var stringCart=""
  if (!itemsNumber){
    stringCart = "Your shopping cart is empty."
    console.log(stringCart)
    return (stringCart)}

  for (let i = 0; i < itemsNumber; i++){
    tempCart.push(`${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}`)
  }
  if (itemsNumber === 1){
    stringCart = (`In your cart, you have ${tempCart[0]}.`)}
  else if(itemsNumber ===2){
    stringCart = (`In your cart, you have ${tempCart[0]} and ${tempCart[1]}.`)
  }
  else {
    tempCart.push(`and ${tempCart.pop()}`) /*Remove last item on array and reinserts it with "and" before it.*/
    stringCart = (`In your cart, you have ${tempCart.join(', ')}.`)
  }
  console.log(stringCart)
  return (stringCart)
  }

function total() {
  let total=0;
  for (let i = 0;i < cart.length; i++){
    total= total + cart[i][Object.keys(cart[i])]
  }
  return total
}

/*Removes item from cart, but this code leaves and empty Object inside the array. It should remove the array item instead,
this way won't leave the empty Object inside the array. */
function removeFromCart(item) {
  let found="false"
  for (let i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      /* found=delete cart[i][item] /* Deletes a key par from Object inside Cart Array, but leaves an empty Object in its place */
      cart.splice(i,1) /*Removes array element, does not leave empty object inside array. */
      found="true"
    }
  }
  if (found === "false"){
    console.log ("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    console.log ("Sorry, we don't have a credit card on file for you.")
  }
  console.log (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart=[]
}
