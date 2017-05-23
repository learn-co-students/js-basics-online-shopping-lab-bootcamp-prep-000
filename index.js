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

  return t;
}

var getCart = function(){
  return cart;
}

var addToCart = function(item){
  var price = Math.ceil(Math.random()*100);
  var newItem = {};
  newItem[item] = price;
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`)
  return cart;
}

var viewCart = function(){
  var returnStatement = `Your shopping cart is empty.`
  if(cart.length<=0) console.log(returnStatement);
  else {
    returnStatement = `In your cart, you have `;
    for(var i = 0; i<cart.length; i++){
      for(var key in cart[i]){
          returnStatement += `${key} at $${cart[i][key]}`;
      }
      if(i === cart.length - 1){
        returnStatement += `.`;
      } else{
        returnStatement += `, `;
      }
    }
    console.log(returnStatement);
  }
}

var removeFromCart = function(item){
  var checker = false;
  var tempArr = cart.slice();
  for(var i = 0; i<tempArr.length; i++){
    if(item in cart[i]){
      tempArr.splice(i,1);
      checker = true;
    }
  }
  if(checker){
    cart = tempArr;
    return cart;
  } else console.log(`That item is not in your cart.`);
}

var placeOrder = function(num){
  if(num){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${num}.`);
    cart = [];
  } else console.log(`We don't have a credit card on file for you to place your order.`);
}
