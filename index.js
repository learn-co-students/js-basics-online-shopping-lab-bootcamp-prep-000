var cart = [];

function getCart(){
  return cart;
}

function generatePrice(){
  var price = Math.floor(Math.random() * 100);
  return price;
}

function addToCart(item){
  var price = generatePrice();
  //Object.assign(cart, {[item]:price});
  cart.push({[item]:price});
  console.log(item + " has been added to your cart.")
  return cart;
}

function setCart(newCart) {
  cart = newCart;
}



function viewCart(){
  var bountyInCart =[];
  if (cart.length<1){
    console.log( "Your shopping cart is empty.");
  }else{
    for(let i=0; i<cart.length; i++){
      var obj = cart[i];
      var item = Object.keys(obj)[0];
      var price = obj[item];
      bountyInCart.push(" " + item + " at $" + price);
      }
      console.log("In your cart, you have"+ bountyInCart +'.');
  }
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

function removeFromCart(itemToBeRemoved){
  var bountyInCart =[];
  if (cart.length<1){
    console.log("That item is not in your cart.");
  }
  for(let i=0; i<cart.length; i++){
    var obj = cart[i];
    var itemInCart = Object.keys(obj)[0];
    if (itemInCart === itemToBeRemoved){
      cart.splice(i,1);
      return cart;
    }else {
      console.log("That item is not in your cart.");
    }
  }
}

function placeOrder(cardnumber){
  //if(cardnumber.length > 0){
  if(!cardnumber === false){
    console.log("Your total cost is $" + total() + ", which will be charged to the card " + cardnumber + ".");
  }else{
    console.log("We don't have a credit card on file for you to place your order.");
  }
    for(let i=0; i<cart.length; i++){
        cart.shift();
//      }
  }
}
