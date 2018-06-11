var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    var cartItem = {};
    function getRandomInt() {
        return Math.floor(Math.random() * Math.floor(100));
      }
    cartItem["itemName"] = item
    cartItem["itemPrice"] = getRandomInt()
    cart.push(cartItem)
    return(`${item} has been added to your cart.`)

}

function viewCart() {
    if (cart.length === 0){
        return(console.log("Your shopping cart is empty."))
    }
    var index = 0
    var stringRet = ""
    for (i of cart){
        if (index == 0){
            stringRet += "In your cart, you have " + i["itemName"] + " at "+ "$" + i["itemPrice"]
        }
        else if (index == cart.length - 1){
            stringRet += ", and " + i["itemName"] + " at " + "$" + i["itemPrice"] + "."
        }
        else {
            stringRet += ", " + i["itemName"] + " at " + "$" + i["itemPrice"]
        }
        index++
    }
    console.log(stringRet)
}

function total() {
    var sum = 0
    for (i of cart){
        sum += i["itemPrice"]
    }
    return sum
}

function removeFromCart(item) {
    var index = 0
    for (i of cart){
        if (i["itemName"] === item){
            cart.splice(index, 1)
      }
        if (i["itemName"] != item && index === cart.length - 1){
            console.log("That item is not in your cart.")
    }
    index++
  }
}

function placeOrder(cardNumber) {
  if (typeof(cardNumber) === "number"){
    var totes = total()     
    console.log(`Your total cost is $${totes}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
  else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}