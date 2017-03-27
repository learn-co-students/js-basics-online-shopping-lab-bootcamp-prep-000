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
  var itemPrice = Math.floor(Math.random() * 100);
  cart.push({[item]:itemPrice});
  console.log (`${[item]} has been added to your cart.`);
  return cart;
}

function viewCart(){
  var items = []
  if (cart. length === 0 ){
    console.log ('Your shopping cart is empty.');
  }  else {
    for (var i = 0; i < cart.length; i++){
      for (var key in cart[i]){
        items.push(` ${key} at $${cart[i][key]}`)
      }
    }
      console.log (`In your cart, you have${items}.`);
  }
}



function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){
    for (var key in cart[i]){
      if (cart[i].hasOwnProperty(item) === true) {
      cart.splice(i,1)
      }
    }
  }
  console.log ('That item is not in your cart.');
return cart;
}


function placeOrder(number){
  if (!number){
    console.log ("We don't have a credit card on file for you to place your order.")
  } else {
    console.log (`Your total cost is $${total()}, which will be charged to the card ${number}.`)
    setCart([]);
  }
}
