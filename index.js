var cart=[]

function setCart(newCart) {
  cart = newCart;
}
function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor((Math.random() * 100 )+ 1)
  var list = {[item]: price}
  cart.push(list)

   console.log (`${item} has been added to your cart.`)
   return cart
}

function viewCart(){
    var newArray = []
  for(var i = 0; i < cart.length; i++){
    var itemsAndPrices = cart[i]
    var item = Object.keys(itemsAndPrices)[0]
    var price = itemsAndPrices[item]

    var string = item + " at $" + price
    newArray.push(string)

  }

  console.log(`In your cart, you have ${newArray.join(", ")}.`)

  if(cart.length < 1){
    console.log ("Your shopping cart is empty.")
  }
}
function removeFromCart(item){

  for(var i = 0; i < cart.length; i++){
    var newCart = cart[i] // {pizza: 24}
    var newItem = Object.keys(newCart)[0] // "pizza", item == "pizza"
    if(newItem === item){ // cart[i].hasOwnProperty(item)
      cart.splice(i, 1)
      return cart
      // [{}, {socks: 40}] cart array to destructively remove the object - (hint you have i for index value)
      // cart.splice(i, 1)  -- splice(starting point, how many?)
      // return cart -- (hint when return is used, it breaks out of loop and stops executing any code in the function)
    }
  } // end the for loop
  console.log("That item is not in your cart.")
  // this point if the return is called won't be read
}

function placeOrder(number){

  if(!number){
    return console.log("We don't have a credit card on file for you to place your order.")
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`)

  cart = []
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
