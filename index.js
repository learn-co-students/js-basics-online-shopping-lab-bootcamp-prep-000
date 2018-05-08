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
 var cost = Math.floor(Math.random()*100)
 var itemObject = {itemName:item,itemPrice:cost}
 cart.push(itemObject)
 return (`${itemObject.itemName} has been added to your cart.`)
}

function viewCart() {
  // write your code here

  if (cart.length>0) {
      var sentence = ('In your cart, you have')
  
    for (var i=0;i<cart.length;i++) {
      sentence = sentence + (` ${cart[i].itemName} at $${cart[i].itemPrice}`)
      if (i+1<cart.length) {
        sentence = sentence + (',')
      }
      if (cart.length>1 && i+2==cart.length) {
        sentence = sentence + (' and')
      }
      if (i+1==cart.length) {
        sentence = sentence + ('.')
      }
    }
    return sentence
  }
  
  else {
    return ('Your shopping cart is empty.')
  }

}

function total() {
  // write your code here
  
  var totValue = 0
  
  for (var i=0;i<cart.length;i++) {
    totValue = totValue + cart[i].itemPrice
  }
  
  return totValue
  
}

function removeFromCart(item) {
  // write your code here
  
  for (var i=0; i<cart.length;i++) {
  	if (cart[i].itemName==item) {
  		cart.splice(i,1)
	  	return cart }

    }
    
    return("That item is not in your cart.")

  }
  

function placeOrder(cardNumber) {
  // write your code here
  
  if (cardNumber===undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
    return ("Sorry, we don't have a credit card on file for you.")
  }
  
  else {
    var cost = total()
    for (var i=0; i<cart.length;i++) {
      removeFromCart(cart[i].itemName)
    }
  return (`Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`)
  }
}
