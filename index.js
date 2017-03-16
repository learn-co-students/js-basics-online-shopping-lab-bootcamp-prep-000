
var cart = [];

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

function getCart(){
return cart
}

function generate(){
  var p = Math.floor(10*Math.random())
  return p
}

function addToCart(item){

  var cartObj = {[item]: generate()}
  cart.push(cartObj)
  console.log(`${item} has been added to your cart.`)
  return cart

}

var newArray =[]

function viewCart(){
var cartKey = Object.keys(cart)

  if(cartKey.length === 0 ){

    console.log("Your shopping cart is empty.")
  }
       for (var i = 0; i < cart.length; i++) {
           var cartObj=cart[i]
           var cartObjName=Object.keys(cartObj)
           var cartObjPrice=cartObj[cartObjName[0]]
           newArray=[...newArray,' '+cartObjName+' at $'+cartObjPrice]
    }
    console.log('In your cart, you have'+`${newArray}`+'.')


  }


function removeFromCart(item){
  for (var i=0; i<cart.length ; i++){
    if (cart[i].hasOwnProperty(item)){ // {pizza: 24} item == 'pizza'
      cart.splice(i,1) // [{}] --- format == array.splice(starting index, how many?)
      return cart
    }
  } // end of for loop
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber){

  if (cardNumber === undefined ){
    console.log("We don't have a credit card on file for you to place your order.")
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  }
cart = []


}
