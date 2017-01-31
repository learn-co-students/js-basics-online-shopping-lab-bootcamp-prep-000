var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function getCart(){
  return cart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }

  return t;
}

function addToCart(item){
  let price = Math.floor(Math.random()*101);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  let arr1 = [];
  if(cart.length===0){
    console.log("Your shopping cart is empty.");
  }
  else{
    //looping through objects in array of objects
    for(let i=0; i<cart.length; i++){
      for(let item in cart[i]){
        //push key at value
        arr1.push(` ${item} at $${cart[i][item]}`);
      }
    }
    console.log(`In your cart, you have${arr1}.`);
  }
}

function removeFromCart(item){
  let itemExists = false;
  for(let i=0; i<cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      itemExists = true;
      cart.splice(i,1);
      return cart;
    }
  }
  if(!itemExists){
    console.log("That item is not in your cart.");
  }
}

function placeOrder(cardNumber){
  if(cardNumber===undefined){
    console.log("We don't have a credit card on file for you to place your order.");
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0;
  }
}
