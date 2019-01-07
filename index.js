var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var randomPrice = Math.floor(Math.random()*10)
 var addItem = {[itemName]: randomPrice}
 cart.push(addItem)
 console.log(`${itemName} has been added to your cart.`)
 return cart
}

function viewCart() {
  var theItems

  if(cart.length === 0){
    var theItems = "Your shopping cart is empty."
    console.log(`${theItems}`)
  }

  else if (cart.length === 1){
    var itemKey = Object.keys(cart[0])[0] //Object.keys returns an array; the second [0] refers to the first key in the object within cart[0]
    var itemValue = cart[0][itemKey]
    var theItems = `In your cart, you have ${itemKey} at $${itemValue}.`
    console.log(`${theItems}`) //"spying" is a testing strategy: it cross references the output console.log against the EXPECTED output for console.log
    }

  else if (cart.length === 2){
    var itemKey = Object.keys(cart[0])[0]
    var itemValue = cart[0][itemKey]
    var itemKey2 = Object.keys(cart[1])[0]
    var itemValue2 = cart[1][itemKey2]
    var theItems = `In your cart, you have ${itemKey} at $${itemValue} and ${itemKey2} at $${itemValue2}.`
    console.log(`${theItems}`)
  }

  else{
    var theItems = "In your cart, you have "
      for(let i = 0; i < cart.length; i++){
        var itemKey = Object.keys(cart[i])[0]
        var itemValue = cart[i][itemKey]
        if (i === cart.length - 1){
          var theItems = theItems.concat(`and ${itemKey} at $${itemValue}.`) // option: create a if statement within the for loop to check if the last item is the last item of the array (cart.legnth - 1)
        }
        else {
          var theItems = theItems.concat(`${itemKey} at $${itemValue}, `)
        }
    }
    console.log(`${theItems}`)
    //1) get the string that we want out of the loop and then format it after the fact (more challenging); 2) we can modify the contents of the string as we go through the loop
  }
}

function total() {
  // write your code here
  var totalPrice = 0
  for (let i = 0; i < cart.length; i++){
    var itemKey = Object.keys(cart[i])[0]
    var itemValue = cart[i][itemKey]
    var totalPrice = itemValue + totalPrice
  }
  return totalPrice
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++){
      if (cart[i].hasOwnProperty(`${item}`)){
        cart = [...cart.slice(0, i), ...cart.slice(i+1)]
        return cart
      }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
  else{
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
