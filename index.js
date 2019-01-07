var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var m=Math.floor(Math.random()*100)
var w={}
w[item]=m
cart.push(w)
console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var s="In your cart"
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  
  if(cart.length === 1){
    var c = cart[0]
    var k=Object.keys(c)
    console.log(`In your cart, you have ${k} at $${c[k]}.`)
  }
  
  if(cart.length===2){
    for(var l=0;l<cart.length;l++){
    c=cart[l]
    k=Object.keys(c)
    if(l===0){
    s = s + `, you have ${k} at $${c[k]}`
    }
    if(l===1){
      s = s +` and ${k} at $${c[k]}.`
    }
  }
  }
  
  if(cart.length>2){
    for(l=0;l<cart.length;l++){
      c=cart[l]
      k=Object.keys(c)
      if(l===0){
        s=s+`, you have ${k} at $${c[k]}`
      }
      if(l>0 && l!=cart.length-1){
        s=s+`, ${k} at $${c[k]}`
      }
      if(l===cart.length-1){
        s=s+`, and ${k} at $${c[k]}.`
      }
    }
  }
  console.log(s)
}

function total() {
  var sum=0
  for(var i=0;i<cart.length;i++){
    var c=cart[i]
    var k=Object.keys(c)[0]
    sum=sum + c[k]
  }
  return sum
}

function removeFromCart(item) {
  for(var l=0;l<cart.length;l++){
     if(cart[l].hasOwnProperty(item)===true){
      cart.splice(l,1)
      return cart
    }
    }
  console.log("That item is not in your cart.")
  return cart
 } 

function placeOrder(cardNumber) {
   if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.")
    return false
  }
  
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
   }

