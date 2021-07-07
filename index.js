var cart = [];


function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}



function addToCart(itemName) {
  function  itemPrice (){
    return Math.floor(Math.random() * 100) + 1;} // returns a number between 1 and 100
  let item = {[itemName]: itemPrice()}
  cart.push(item);
  console.log(itemName + " has been added to your cart.")
  return cart
  }


function viewCart() {
    if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else {
      var list = []
      for (let i = 0; i < cart.length; i++){
          for(let item in cart[i]){
            list.push(`${item} at $${cart[i][item]}`)
               if  (list.length === 1){
                 console.log(`In your cart, you have ${list}.`)
               } else if (list.length === 2){
                  console.log("In your cart, you have " + list.join(" and ") + ".")
              } else if (list.length === cart.length){
                  let lastItem = list.splice(-1)
                  console.log (`In your cart, you have ${list.join(', ')}, and ${lastItem}.`)
                }}

      }

    }}



function total(array) {
    var total = 0
    for (var i = 0; i < cart.length; i++){
      for (var value in cart[i])
        total += cart[i][value]
        }
    return total
}


function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
  if (cart[i].hasOwnProperty(item) === true){
       cart.splice(i, 1)
     }
   }
  console.log("That item is not in your cart.")
  return cart
}


function placeOrder(cardNumber) {
  if (cardNumber !== true){
    console.log("Sorry, we don't have a credit card on file for you.")
}
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    return cart = []
}
