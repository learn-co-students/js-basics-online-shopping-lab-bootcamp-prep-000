var cart = [];

function getCart(){
  return cart;
}

function addToCart(item){
  var price = Math.floor(Math.random()*100);
  var obj = {};
  obj[item] = price;
  cart.push(obj);
  console.log(item+" has been added to your cart.");
  return cart;
}

function viewCart(){
  if (cart.length > 0){
    var cartString = "In your cart, you have";
    for(var item in cart){
      var temp = cart[item];
      var temp1 = Object.keys(temp);
      cartString += " "+temp1+" at $"+temp[temp1]+",";
    }
    var results = cartString.slice(0, -1) + '.';
    console.log(results);
  }else {
    console.log("Your shopping cart is empty.");
  }
}

function removeFromCart(item){
  for(var i = 0, l = cart.length; i < l; i++){

   for(var list in cart[i]){
       if(item === list){
         cart.splice(i,1)
         return cart
        }
     }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber){
  if(!cardNumber){
    console.log(`We don't have a credit card on file for you to place your order.`)
  }else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
  }
}

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

addToCart('pizza');
addToCart('pizza2');
addToCart('pizza3');
addToCart('pizza4');
removeFromCart("pizza");
