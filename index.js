var cart = {};

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

function getCart(){return cart;}

function addToCart(i){
  if (i.length>0){
  var iPrice = Math.floor(Math.random()*100);
  iPrice = parseInt(iPrice);
  cart.push({[i]: iPrice});
  console.log(i + " has been added to your cart.");
}
  return cart;
}

function viewCart(){
  if (cart.length < 1){
    console.log("Your shopping cart is empty.");
  }
  var tempArray = [];
  for (var i=0; i<cart.length; i++){
    var item = Object.keys(cart[i]);
    var price = cart[i][item];
      tempArray.push(` ${item} at $${price}`)

  }
  tempArray = tempArray.join();
    //console.log(  'In your cart, you have socks at $53, puppy at $49, iPhone at $97.');
    console.log("In your cart, you have" + tempArray + ".");
  }

function removeFromCart(item){
  for (var i=0, l=cart.length; i<l; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      var deleted = true
    }}
    if (deleted){
      return cart;
    }
    else{console.log("That item is not in your cart.");}
  }

function placeOrder(cc){
  if (cc>0){
    console.log("Your total cost is $"+total()+", which will be charged to the card "+cc+".");
    cart = [];
  }
  else {
    console.log("We don't have a credit card on file for you to place your order.")
  }
}
