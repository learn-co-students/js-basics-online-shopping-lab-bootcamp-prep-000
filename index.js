
let cart=[]

function getCart(){
  return cart
}
function addToCart(item){
  let price = Math.floor(Math.random()*100)
  cart.push({[item]: price })
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  let item = Object.keys(cart)
  if(cart.length===0){
    console.log("Your shopping cart is empty.")
  }
  else {
    let temp2 ="In your cart, you have"
    let myItem =""

    for(let i = 0; i<cart.length; i++)
    {
      myItem = Object.keys(cart[i])[0]
      if (i===cart.length-1)
      {
        temp2+=` ${myItem} at $${cart[i][myItem]}.`
      }else
      {
        temp2+=` ${myItem} at $${cart[i][myItem]},`
      }
    }
    console.log(temp2)
  }
}

function removeFromCart(item){
  let x = 0
  for(let i = 0; i<cart.length; i++)
  {
    if(item===Object.keys(cart[i])[0])
    {
      cart.splice(i,1)
      x++
    }
  }
  if(x===0){
    console.log('That item is not in your cart.')
  }
}

function placeOrder(cardNumber){
  if(cardNumber===undefined){
    console.log("We don\'t have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart=[]
  }
  debugger;
}

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
