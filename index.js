var cart=[];

function setCart(newCart) {
  cart = newCart;
};

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
};
function getCart(){
  return cart;
};
function addToCart(item){
  var random = Math.floor(Math.random() * 10)
  cart.push({[item] : random})
  console.log (`${item} has been added to your cart.`)
  return cart;
};

function viewCart(){
  var arr = [];
  var string ='In your cart, you have ';
  if(cart.length > 0){
    for (var i = 0, l = cart.length ; i < l ; i++){
      var cartObj = cart[i];
      var prop = Object.keys(cart[i]);
      arr.push(`${prop[0]} at $${cartObj[prop]}`);
    };
    string = string + arr.join(", ") + ".";
    console.log(string)
  }else{
    console.log('Your shopping cart is empty.')
  };
};

function removeFromCart(item){
  for(var i = 0, l = cart.length; i < l; i++){
    if(cart[i].hasOwnProperty(item)){
      var index = cart.indexOf(i)
      cart.splice(index - 1, 1);
      console.log(cart)
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}
function placeOrder(creditCard){
  if (creditCard > 0){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${creditCard}.`);
    cart = [];
  }else{
    console.log("We don't have a credit card on file for you to place your order.");
  }
}
