var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {[item]: Math.floor(Math.random() * 100)+1}
 cart.push(newItem)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var output = 'In your cart, you have'
  
  if (cart.length===1){
    var itemName = Object.keys(cart[0])
    var itemCost = cart[0][itemName]
      output = `${output} ${itemName} at $${itemCost}.`
      console.log(output)
    }
    
  else if (cart.length===2){
    itemName = Object.keys(cart[0])
    itemCost = cart[0][itemName]
    output = `${output} ${itemName} at $${itemCost} and`
    
    itemName = Object.keys(cart[1])
    itemCost = cart[1][itemName]
      
    output = `${output} ${itemName} at $${itemCost}.`
    console.log(`${output}`)
    }
    
  else if (cart.length>=3){
    var i = 0
    itemName = Object.keys(cart[i])
    itemCost = cart[i][itemName]
    output = `${output} ${itemName} at $${itemCost},`
    
    for (i = 1; i < cart.length; i++){
      if (i===cart.length-1){
        itemName = Object.keys(cart[i])
        itemCost = cart[i][itemName]
        output = `${output} and ${itemName} at $${itemCost}.`
      }
      else if (i===cart.length-2){
        itemName = Object.keys(cart[i])
        itemCost = cart[i][itemName]
        output = `${output} ${itemName} at $${itemCost},`
      }
      else {
        itemName = Object.keys(cart[i])
        itemCost = cart[i][itemName]
        output = `${output} ${itemName} at $${itemCost},`
      }
    }
    console.log(output)
  }
  else if (cart.length<1){
    console.log('Your shopping cart is empty.')
  }
}

function total() {
  var total = 0
  for (var i=0;i<cart.length;i++){
  total += cart[i][Object.keys(cart[i])]
  }
  return total
}

function removeFromCart(item) {
  if (cart.length<1){
    console.log('That item is not in your cart.')
    return cart
  }
  else{
    for (var i = 0; i < cart.length; i++){
      if (cart[i].hasOwnProperty(item)){
        cart.splice(i,1)
      }
    }
  }
    
  return cart
}

function placeOrder(cardNumber) {
  if (arguments.length===0){
    console.log('Sorry, we don\'t have a credit card on file for you.')
  }
  else{
    console.log(`Your total cost is $${total(cart)}, which will be charged to the card ${cardNumber}.`)
    while (cart.length!=0){
      cart.pop()
    }
  }
  
}
