var cart = [ { "mango": 99 }];
placeOrder(213233232)
//console.log(cart);
function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = new Object({[item]: Math.floor((Math.random() * 100))})
 console.log(`${item} has been added to your cart.`)
 cart.push(newItem)
 return cart
}

function viewCart() {
  var result = ""
  if(cart.length==0){
    result =  "Your shopping cart is empty."
  } else{
      result+= "In your cart, you have "
      for (var i = 0; i < cart.length; i++) {
        var key = Object.keys(cart[i])
        var price = cart[i][key]
        if(cart.length==1){
          result+= `${key} at $${price}.`
        } else if(i<cart.length-1&&cart.length>2){
          result+= `${key} at $${price}, `
        } else if(i==cart.length-2&&cart.length==2){
          result+= `${key} at $${price} and `
        } else if(i==cart.legnth-1&&cart.length==2){
          result+= `${key} at $${price}.`
        } else if(cart.length!=2){
          result+= `and ${key} at $${price}.`
        } else{
          result+= `${key} at $${price}.`
        }
      }
    }
    console.log(result);
  return result
}

function total() {
  var result = 0
  for (var i = 0; i < cart.length; i++) {
  var key = Object.keys(cart[i])
  var price = cart[i][key]
  result+=price
}
  return result
}

function removeFromCart(item) {
  var result = -1
  for (var i = 0; i < cart.length; i++) {
    var key = Object.keys(cart[i])
    if(cart[i].hasOwnProperty(item))
    {
      //console.log(...cart.slice(0,1));
      //console.log(...cart.slice(i+1,cart.length-1));
      cart = [...cart.slice(0,i),...cart.slice(i+1,cart.length)]
      console.log(result);
      result = 1
    }
  }

  if(result==-1){
    console.log("That item is not in your cart.")
  }  else{
    return cart
  }
}

function placeOrder(cardNumber) {
if(!cardNumber){
  console.log("Sorry, we don't have a credit card on file for you.");
}
var cost = 0;
cost = total()
//console.log(cost);
console.log(`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`);
cart = []
}
