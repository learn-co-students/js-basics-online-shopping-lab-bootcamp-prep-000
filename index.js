var cart=[];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor((Math.random()*100));
    var userItem = {};
    userItem[item] = price;
    cart.push(userItem);
    console.log(`${item} has been added to your cart.`);
    return cart;
}

/*************************
REFACTORED WAY
**************************/
function viewCart(){
  if (cart.length>0){
    var empArray = []; //Used in order to push the items and price pairs in one line later.
    for (var i=0; i<cart.length; i++){
    	for(var keyItem in cart[i]){
      empArray.push(` ${keyItem} at $${cart[i][keyItem]}`);
    	}
    }
    console.log(`In your cart, you have${empArray}.`);
  }
  else {
    console.log('Your shopping cart is empty.')
  }
}

function removeFromCart(itemToBeRemoved){
 for(var i=0; i < cart.length; i++){
   var someObj = Object.assign(cart[i]);
   var someItem = someObj.hasOwnProperty(`${itemToBeRemoved}`);
    if(someItem === true ){
       cart.splice(cart[i],1);
    }
  }
	if (someItem === false || cart.length === 0){
		console.log("That item is not in your cart.");
	}
  return cart;
}

function placeOrder(cardNumber){
  if (cardNumber === undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  return cart.length=0;
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
