var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0;

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item];
    }
  }
  return t
}

function getCart(){
  return cart
}

function addToCart(varItem){
  var value = Math.floor(Math.random()*100);
  var varObject = {[varItem]:value};
  cart.push(varObject);
  //cart.push(Object.assign({[varItem]:value}));
  console.log(varItem+" has been added to your cart.");
  return cart
}

function viewCart(){
var items = "";
  if (cart.length==0){
    console.log("Your shopping cart is empty.")
  }
  for (var i=0; i<cart.length;i++){
    for (var item in cart[i]){
      //if (item.length>0){
      //  item += ",";
      //}
      items += ` ${item} at $${cart[i][item]}`;
      if ((i+1)<cart.length){
        items += ","
      }
    }
  }
  console.log(`In your cart, you have${items}.`);
}

function removeFromCart(item){
  for (var i=0; i<cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return cart
    }
  }
    console.log("That item is not in your cart.");
}

function placeOrder(creditCard){
  if (creditCard){
    var t = total();
    console.log(`Your total cost is $${t}, which will be charged to the card ${creditCard}.`);
    cart = [];
    return cart
  }
  console.log("We don't have a credit card on file for you to place your order.");
}
