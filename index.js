var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 99);
 cart.push({"itemName": item, "itemPrice": price})
 return (`${item} has been added to your cart.`)
}

function viewCart() {
  // write your code here
  var message = 'In your cart, you have'
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }else{
   if (cart.length === 1){
      return `${message} ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }else{
      if (cart.length === 2){
        return `${message} ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
      }else{
    var cartList =[]
       for (let i= 0; i < cart.length-1; i++){
       cartList.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
    return `${message}${cartList}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
    }
    }
  }
}

function total() {
  // write your code here
  var cartTotal = 0
  for (let i = 0; i< cart.length; i++){
  cartTotal += cart[i].itemPrice 
  }
  return cartTotal;
}

function removeFromCart(item) {
  // write your code here
  for (let i = 0; i < cart.length; i++){
    if (item === cart[i].itemName){
      console.log(item)
      cart.splice(i, 1)
      return cart
    }else{ 
      if(item !== cart[item])
      return "That item is not in your cart."
    }
 }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }else{
   cart = []
   var cartToltal = total
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
}

