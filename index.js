var cart;

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

var cart = [];

function getCart(){
  return cart;
}

function addToCart(item){
  var obj = {};
  obj[item] = Math.floor((Math.random() * 100));
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var result = 'In your cart, you have ';
  var allKeys = [];
  for(var i = 0; i < (cart.length); i ++){
	     for(var item in cart[i]){
		 allKeys.push(item);
         }
  }
  if(cart.length >= 1){
    for(var i = 0; i < (cart.length); i ++){
	     for(var item in cart[i]){
			if (item === allKeys[allKeys.length - 1]){
			result += item + ' at $' + cart[i][item] + '.';
         	}
		 	else{
			result += item + ' at $' + cart[i][item] + ', ';
         	}
         }
       }
	  console.log(result);
    }
  else{
    console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(key){
  var allKeys = [];
  for(var i = 0; i < (cart.length); i ++){
       for(var item in cart[i]){
     allKeys.push(item);
         }
  }
  if(allKeys.includes(key)){
    for(var i = (cart.length - 1); i >= 0; i --){
  	  for(var item in cart[i]){
  		 	if(item == key){
  				cart.splice (i,1);
        }
      }
    }
    return cart;
  }
  else{
    console.log("That item is not in your cart.");
  }
}

function placeOrder(credit_card = 0){
  if(credit_card === 0){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${credit_card}.`);
    cart.shift();
    return cart;
  }
}
