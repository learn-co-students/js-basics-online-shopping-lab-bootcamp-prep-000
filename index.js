var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
 return cart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function addToCart(object){
 console.log(object + " has been added to your cart.");
 var price = Math.floor(Math.random(0,1)*100);
 cart.push({[object]: price});
 return cart;
}

function viewCart(){
  console.log(cart);
  if(cart.length === 0){
    console.log("Your shopping cart is empty.");
  }
  else {
	  let result = "In your cart, you have ";
	  for(var i=0;i<cart.length;i++){
		  var key = Object.keys(cart[i]);
			result +=  key + " at $" + cart[i][key] + ", ";
	  }
		result = result.substring(0, result.length - 2);
		result +=".";
		console.log(result);
  }
}



function removeFromCart(item){
	let n = cart.length;
  console.log("original length is " + n);
  for(let i = 0; i<cart.length; i++){
	  if(Object.keys(cart[i]===item)){
		  cart.splice(i,1)
		}
	 }
	 if(cart.length===n){
		 console.log("That item is not in your cart.");
	 }
 }

function placeOrder(cardNumber){
  const t = total();
  if(cardNumber === null || cardNumber === undefined ){
   console.log("We don't have a credit card on file for you to place your order.");
  }
  else{
   console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
	 cart = [];
  }
}
