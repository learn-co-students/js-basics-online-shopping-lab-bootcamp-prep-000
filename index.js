var cart=[];

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

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  cart.push({[item]:price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var keyArray=[];
  for (var i = 0;i<cart.length;i++){
    keyArray.push(Object.keys(cart[i])[0]);
  }
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  }

  else{
    var sTr = "In your cart, you have "
    for (var i=0;i<cart.length-1;i++){
    sTr = sTr + (`${keyArray[i]} at $${cart[i][keyArray[i]]}, `);
    }
    sTr = sTr + (`${keyArray[cart.length-1]} at $${cart[cart.length-1][keyArray[cart.length-1]]}.`)

  console.log(sTr);
}
}

function removeFromCart(item){
  var keyArray=[];
  for (var i = 0;i<cart.length;i++){
    keyArray.push(Object.keys(cart[i])[0]);
  }

  for (var i=0;i<keyArray.length;i++){
    if (keyArray[i] == item){
      var preSent = true;
    }
  }


  if (preSent !=true){
    console.log('That item is not in your cart.');
  }

  else{
    for (var i=0;i<keyArray.length;i++){
      if (keyArray[i] == item){
        cart.splice(i,1);
      }
    }
  }return cart;
}

function placeOrder(cardNumber) {
  if(cardNumber===undefined){
    console.log('We don\'t have a credit card on file for you to place your order.')
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }  cart = [];
  }
