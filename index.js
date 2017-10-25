var cart = [];

function getCart(){
    return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 function randomPrice(){
   return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
 }
 var shoppingCart = {};
 var itemName = item;
 var itemPrice = randomPrice();

 shoppingCart[item] = itemPrice;
 cart.push(shoppingCart);
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart(){
    var current = "In your cart, you have "
    if(cart.length === 1){
        current += `${Object.keys(cart[0])} at $${Object.keys(cart[0]).map(function(key){return cart[0][key]})}.`
        console.log(current)
    }
	else if (cart.length === 2){
		current += `${Object.keys(cart[0])} at $${Object.keys(cart[0]).map(function(key){return cart[0][key]})} and ${Object.keys(cart[1])} at $${Object.keys(cart[1]).map(function(key){return cart[1][key]})}.`
		console.log(current)
    }
	else if (cart.length > 2) {
	   for(let i = 0; i < cart.length; ++i){
          if(i+1 < cart.length){
				        current += `${Object.keys(cart[i])} at $${Object.keys(cart[i]).map(function(key){return cart[i][key]})}, `
          }
	        else{
				        current += `and ${Object.keys(cart[i])} at $${Object.keys(cart[i]).map(function(key){return cart[i][key]})}.`
          }
    }
	console.log(current)
    }
	else {
		console.log("Your shopping cart is empty.")
  }
}


function total(){
    var subTotal = 0;
    for(let i = 0; i < cart.length; ++i){
        var itemTotal = parseInt(Object.keys(cart[i]).map(function(key){return cart[i][key]}));
        subTotal += itemTotal
    }
	return subTotal
}

function removeFromCart(item){
    var checkFor = 0;
	var hasItem;
    for(let i = 0; i < cart.length; ++i){
        if(cart[i].hasOwnProperty(item)){
            checkFor += 1;
			hasItem = i;
			console.log(checkFor)
			console.log(hasItem)
        }
        else {
        	checkFor += 0;
        }
    }
	if(checkFor > 0){
		cart.splice(hasItem, 1)
		console.log(checkFor)
		console.log(hasItem)
    }
	else {
        console.log("That item is not in your cart.")
    }
return cart
}

function placeOrder(cardNumber){
    var cartTotal = total();
    if(cardNumber === undefined){
        console.log("Sorry, we don't have a credit card on file for you.")
    }
    else {
        console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
		cart = cart.splice()
    }
return cart
}
