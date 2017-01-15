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



var getCart = () =>{
  return cart
}


var addToCart = (item) =>{
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`)
  return cart
}


//Math.random() gives us a big decimal value between 0 and 1 we multiplye that by 100 and that basically moves the decimal down 2 spots right

var viewCart = () => {
    if(cart.length === 0){
      console.log("Your shopping cart is empty.")
    } else {
      var str = ""
      cart.forEach(function(object, index){
        var itemName = Object.keys(object)
        var itemPrice = object[itemName]
        if (index === cart.length-1) {
          str += (`${itemName} at $${itemPrice}`)
        }else {
          str += (`${itemName} at $${itemPrice}, `)
        }
      });
      console.log("In your cart, you have " + str + ".")
    }
  }




var removeFromCart = (name) =>{
  if (cart.length === 0) {
    console.log("That item is not in your cart.");
  } else {
  for(var i = 0; i < cart.length; i++){
    for(var item in cart[i]){
      if(item === name){
         cart.splice(i, 1);
        return cart
      } else {
      }
      console.log("That item is not in your cart.");
    }
  }
}}
// placed the print statement outside of the loop since you do not want it to print at each iteration.
// iterating the array and nested objects to return keyd not indexes.


var placeOrder = (cardNumber) =>{
if (cardNumber !== undefined) {
  const t = total()
  cart = []
  console.log(`Your total cost is $${t}, which will be charged to the card 123.`)
}else {
  console.log("We don't have a credit card on file for you to place your order.")
  }
}
