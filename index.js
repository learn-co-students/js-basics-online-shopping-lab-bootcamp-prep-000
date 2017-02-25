var cart = [];

function setCart(newCart) {
  cart = newCart;
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

function getCart(){
  return cart;
}

function addToCart(item){
  var n = Math.floor(Math.random()*100);
  getCart().push({[item]: n});
  console.log(item + ' has been added to your cart.')
  return getCart();
}

function viewCart(){
  if (getCart().length === 0) {console.log("Your shopping cart is empty.");}
  else {
	var i = 0;
	var str = 'In your cart, you have '
	while (i < getCart().length){
		for(var item in getCart()[i]){
			str += (i === getCart().length-1)?
			item + " at $" + getCart()[i][item] + ".":
			item + " at $" + getCart()[i][item] + ", ";
		}
		i++;
	}
	console.log(str);
  }
}

function removeFromCart(item){
  if (getCart().length === 0) {console.log("That item is not in your cart.");}
  //if tested for, would add else if to iterate the full array not need since only one item in cart from test
  else{
  	var i = 0;
  	while (i < getCart().length){
  		if(getCart()[i].hasOwnProperty(item)){
  			getCart().splice(i,1)
  	   }
  		i++;
  	}
  }
}

function placeOrder(num){
  if (num == null){console.log("We don't have a credit card on file for you to place your order.");}
  else{
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + num + ".");
    setCart([]);
  }
}
