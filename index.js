var cart=[];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
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

function getCart(){
  return cart
}

function addToCart(item){
  var obj={};
  obj[item]=Math.floor(getRandomArbitrary(0,100))
  cart.push(obj)
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart(){
  if(cart.length==0){
    return console.log("Your shopping cart is empty.")
  }
  else{
    var tmpArry=[];
    for(var i=0; i<cart.length; i++){
      var obj= cart[i]    //objcet at position i of array is assigned to variable
      var objNames= Object.keys(obj)    //object key is assined a new variable
      tmpArry.push(` ${objNames} at $${obj[objNames]}`)
    }
  }
  console.log("In your cart, you have" + tmpArry +".");
  return cart
}

function removeFromCart(item){
  for(var i=0; i<cart.length; i++){
    var obj= cart[i]
    if(obj.hasOwnProperty(item)){
      cart.splice(i,1)
      return cart
    }
  }
  return console.log("That item is not in your cart.")
 }

function placeOrder(cardNumber){
  if(cardNumber==0 || cardNumber==null ){
    console.log("We don\'t have a credit card on file for you to place your order.")
  }
  else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart(cart=[])
  }
}
