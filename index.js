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

function addToCart(item){
  var price = Math.floor(Math.random()*100 + 1);
  cart.push(Object.assign({}, {[item]: price}));
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if(cart.length > 0){
    var msg = "In your cart, you have";
    for (var i = 0; i < cart.length; i++) {
      var arrOfKeys = Object.keys(cart[i]);
      //Only going to have 1 key, that's why arrOfKeys[0]
      //Accesing a value: objectName[key]
      // In this case cart[i][arrOfKeys[0]]
      if(i === cart.length - 1){//last iteration, thus last object
        msg += ` ${arrOfKeys[0]} at $${cart[i][arrOfKeys[0]]}.`;

      }
      else{
        msg += ` ${arrOfKeys[0]} at $${getCart()[i][arrOfKeys[0]]},`;
      }
    }
    console.log(msg);
  }
  else{
      console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(item)){
      //console.log("got here");
      //delete cart[i].item; would be deleting obj in position of array, not getting rid of the actual position
      if(i === 0 && cart.length > 1){//first pos but more than 1 pos
        cart.shift();
      }
      else if (i === cart.length-1) {//last pos, including when length is 1
        cart.pop();
      }
      else{//not at the beginning or end
        cart.slice(0,i).concat(cart.slice(i + 1));
      }
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber){
  if(typeof cardNumber === "number"){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    setCart([]);
  }
  else {
    console.log("We don't have a credit card on file for you to place your order.");
  }
}
