var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice= Math.floor(Math.random() * 100);
   var cartItem= {[item]: itemPrice};
   cart.push(cartItem);
   console.log(`${item} has been added to your cart.`);
   return cart;
}

function viewCart() {
  if(cart.length === 0){
    console.log('Your shopping cart is empty.');
  }else if(cart.length === 1){
		var nameOfProduct= Object.keys(cart[0])
		var price= cart[0][nameOfProduct]
		console.log(`In your cart, you have ${nameOfProduct} at $${price}.`)
  }else if(cart.length === 2){
		var nameOfProduct= Object.keys(cart[0])
		var price= cart[0][nameOfProduct]
		console.log(`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][nameOfProduct]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`)
  }else {
		var myCart= `In your cart, you have `
	   for(var i= 0; i < cart.length; i++){
		     var nameOfProduct= Object.keys(cart[i])
		       var price= cart[i][nameOfProduct]
		         var myItem= `${nameOfProduct} at $${price}, `
		           var myLastItem= `and ${nameOfProduct} at $${price}.`
		      if (i === cart.length-1){
			         myCart= myCart + myLastItem
		       }else{
			           var myCart= myCart + myItem
		        }
	  }
    console.log(myCart)
  }
}

function total() {
  var totalValue= 0
	for(var i= 0; i < cart.length; i++){
		var priceItem= cart[i][Object.keys(cart[i])]
		totalValue= totalValue + priceItem
	}
	return totalValue
}

function removeFromCart(item) {
  var cartItemSize= cart.length
	for(var i= 0; i < cart.length; i++){
		if (cart[i].hasOwnProperty(item)){
			cart.splice(i, 1)
        }
	}
	if (cartItemSize === cart.length){
		console.log("That item is not in your cart.")
		return cart
	}else{
    	return cart
	}
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
	  console.log ("Sorry, we don't have a credit card on file for you.")
  }else {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
	  cart= []
	  console.log("cart", cart)
  }
}
