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

 var itemName = 'itemName'
 var price = Math.ceil(Math.random()*100)
 var itemPrice = 'itemPrice'
 var object = {[itemName]: item, [itemPrice]: price}
 cart.push(object)
 return `${item} has been added to your cart.`

}


function viewCart() {
  // write your code here
  if(cart.length===0){
    return `Your shopping cart is empty.`
  }
 
  var itemsWithPrice = []
  for(let i=0; i< cart.length; i++){
    var name = Object.values(cart[i])[0]
    var price = Object.values(cart[i])[1]
    itemsWithPrice.push(name + ' at $' + price)
  }
  if(cart.length===1){
    return (`In your cart, you have ${itemsWithPrice}.`)
  }
  else if(cart.length===2){
    return (`In your cart, you have ${itemsWithPrice[0]}` + `, and ` + `${itemsWithPrice[1]}` + `.`)
  }
  else if (cart.length===3){
    return (`In your cart, you have ${itemsWithPrice[0]}` +`, ${itemsWithPrice[1]}` + `, and ` + `${itemsWithPrice[2]}` + `.`)
  }
}

function total() {
  // write your code here
  var cost = 0
  for(let i=0; i< cart.length; i++){
   cost += Object.values(cart[i])[1]
  
  }
  return cost
}

function removeFromCart(item) {
  // write your code her
  
  for(let i =0; i <cart.length; i++){
    if(Object.values(cart[i])[0] === item){
      cart.splice(i,1)
      return cart
    }
    
  }
  return ("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  
  if(cardNumber){
  
  var order = (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
  return cart, order
  
  }
  else{
  return (`Sorry, we don't have a credit card on file for you.`)
  }
}
