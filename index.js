var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)+1
  var obj = {itemName:item, itemPrice:price}
  cart.push(obj)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if(cart.length===0){
    return `Your shopping cart is empty.`
  }else{
  var line =[]
  if(cart.length===1){
    return `In your cart, you have `+ cart[0].itemName+` at $`+ cart[0].itemPrice +`.`
  }
  if(cart.length>1){
  for(let i=0; i<cart.length-1; i++){
    line.push(` `+cart[i].itemName + ` at $`+ cart[i].itemPrice)
    }
  }
  return `In your cart, you have`+ line +`, and `+ cart[cart.length-1].itemName+ ` at $`+
    cart[cart.length-1].itemPrice+`.`


  }
}

function total() {
  var sum=0
  for(let i=0; i<cart.length; i++){
    sum = sum + cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  for(let i=0; i<cart.length; i++){
    if(cart[i].itemName === item){
       cart.splice(i, 1)
       return cart
      }  
    }
  return 'That item is not in your cart.'
}

function placeOrder(cardNumber) {
  if(cardNumber){
      var sum =total()
      cart.length=0
      return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`

      
  }else{
    return `Sorry, we don't have a credit card on file for you.`
  }
}
