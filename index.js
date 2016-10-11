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
  obj.item=Math.floor(getRandomArbitrary(0,100))
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
    return console.log("In your cart, you have" + tmpArry);
  }
}
