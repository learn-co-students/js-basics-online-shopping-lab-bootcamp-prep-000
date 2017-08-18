var cart = [];

function getCart() {
 return cart
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItem = {[item]:Math.floor(Math.random()*(100))+1}
 cart.push(newItem)
 console.log(`${item} has been added to your cart.`)
 return getCart()
}


function viewCart(){
	var listItems=[]
	for(var i=0; i<cart.length; i++){
		listItems.push(`${Object.keys(cart[i])[0]} at $${cart[i][Object.keys(cart[i])[0]]}`)
	}
  
	if(cart.length===0){
		console.log(`Your shopping cart is empty.`)
	}

	else if(cart.length===1){
		console.log(`In your cart, you have ${listItems[0]}.`)
	}
  
	else if(cart.length===2){
		console.log(`In your cart, you have ${listItems.join(" and ")}.`)
	}

	else{
		listItems[i-1] = `and ${listItems[i-1]}`
		console.log(`In your cart, you have ${listItems.join(", ")}.`)
  }
}

function total() {
  var totals = 0
  for(var i=0; i<cart.length; i++){
    totals = totals + parseInt(cart[i][Object.keys(cart[i])[0]])
  }
  return totals
}

function removeFromCart(item) {
  for(var i=0; i<cart.length; i++){
    if(Object.keys(cart[i])[0]===item){
      cart.splice(i,1)
      return cart
    }
  }
  console.log(`That item is not in your cart.`)
  return cart
}

function placeOrder(cardNumber) {
  if(cardNumber==undefined){
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
