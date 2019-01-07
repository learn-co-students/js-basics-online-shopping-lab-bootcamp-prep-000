var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  console.log(item+" has been added to your cart.")
  var tmp = Math.floor(Math.random() * 100 + 1)
  var ob = new Object()
  ob[item]  = tmp;
  cart.push(ob)
  return cart
 // write your code here
}

function viewCart() {
  if(cart.length == 0) {
    console.log("Your shopping cart is empty.")
  }
  else if(cart.length == 1){
    for (var property in cart[0]){
      if(cart[0].hasOwnProperty(property)){
        console.log("In your cart, you have " + property + " at $" + cart[0][property] + ".")
      }
    }
  }
  else if(cart.length == 2){
    var ans = "In your cart, you have "
    for (var property in cart[0]){
      ans = ans + property + " at $" + cart[0][property] + " and "
    }
    for (var property in cart[1]){
      ans = ans + property + " at $" + cart[1][property] + "."
    }
    console.log(ans)
  }
  else{
    var ans = "In your cart, you have "
    for(let i=0;i<cart.length;i++){
      for(var property in cart[i]) {
        if(i != 0){
          ans = ans +", "
        }
        if(i == cart.length-1){
            ans = ans + "and "
        }
        ans = ans + property + " at $" + cart[i][property]
      }
    }
    ans = ans + '.'
    console.log(ans)
  }
}

function total() {
  var sum = 0
  for (let i=0;i<cart.length;i++){
    for(var property in cart[i]) {
      sum = sum + cart[i][property]
    }
  }
  return sum
}

function removeFromCart(item) {
  for(let i=0;i<cart.length;i++){
    for(var property in cart[i]) {
      if(item == property) {
        cart.splice(i,1)
        return cart
      }
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else{
    var sum = 0
    for (let i=0;i<cart.length;i++){
      for(var property in cart[i]){
        sum = sum + cart[i][property]
      }
    }
    console.log("Your total cost is $"+sum+", which will be charged to the card " +cardNumber+"." )
    cart = []
  }
}
