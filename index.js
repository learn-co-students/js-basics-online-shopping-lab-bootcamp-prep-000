var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = parseInt(Math.floor((Math.random()* 100)+1));
  var newObje = {}
  newObje[item] = itemPrice
  cart.push(newObje)
  console.log(item + " has been added to your cart.")
  return cart
}

function viewCart() {
  var newarray = ["In your cart, you have "]
  var keysarray = []
  var pricearray = []
  var x
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  else if (cart.length === 1){
      for(var i = 0; i < cart.length; i++){
        x = 0
          keysarray.push(Object.keys(cart[i]))
          pricearray.push(cart[i][keysarray[i]])
        x++
        }
        newarray[0] = newarray[0] + keysarray[0] + " at " + "$" + pricearray[0] +"."
        console.log(newarray[0])
        return newarray
    }
    else{
      x = 0
        for(var i = 0; i < cart.length; i++){
            keysarray.push(Object.keys(cart[i]))
            pricearray.push(cart[i][keysarray[i]])
          x++
          }
          for(var y = 0; y<x-1; y++){
            if(cart.length === 2){
              newarray[0] = newarray[0] + keysarray[y] + " at " + "$" + pricearray[y] +" "
            }
            else{
              newarray[0] = newarray[0] + keysarray[y] + " at " + "$" + pricearray[y] + ", "
            }
          }
            newarray[0] = newarray[0] + "and " + keysarray[keysarray.length-1] + " at " + "$" + pricearray[pricearray.length-1] +"."
            console.log(newarray[0])
            return newarray
        }
}

function total() {
  var total = 0
  var keysarray = []
  if(cart.length === 0){
    console.log("Your shopping cart is empty")
  }else{
    for(var i = 0; i<cart.length; i++){
      keysarray.push(Object.keys(cart[i]))
      total = total + cart[i][keysarray[i]]
    }
  }
  return total
}

function removeFromCart(item) {
  var toDelete = item
  var startlen = cart.length
  var keysarray = []
  if(cart.length === 0){
    console.log("Your cart is already empty")
  }
  else{
    for(var i = 0; i < cart.length; i++){
      if(cart[i].hasOwnProperty([toDelete])){
        if(i === cart.length -1){
          cart.pop()
        }
        cart.splice(i,1)
      }
    }
  }
  if(cart.length === startlen){
    console.log("That item is not in your cart.")
  }
  console.log(cart)
  return cart
}
addToCart("vanilla");
addToCart("watermelon");
addToCart("yams");

removeFromCart("yams")

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    console.log("Sorry, we don't have a credit card on file for you.")
  }else{
    var cost = total();
    console.log("Your total cost is $" + cost + ", which will be charged to the card " + cardNumber + ".");
    cart = [];
  }
}
