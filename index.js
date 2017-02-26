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
  var price = Math.floor(Math.random()*100);
  cart.push({[item]:price});
  console.log(item + ' has been added to your cart.');
  return cart;
}
function viewCart(){
  var str='';
  if(cart.length>0){
    str = 'In your cart, you have ';
    for(var i=0;i<cart.length;i++){
      var key = Object.keys(cart[i])[0];
      var price = cart[i][key];
      str = str +  key +' at $'+price;
      if(i<cart.length-1){
        str = str + ', ';
      } else {
        str = str + '.'
      }
    }
  } else {
    str = 'Your shopping cart is empty.';
  }
  console.log(str);
}

function removeFromCart(item){
  var found = false;
  for(var i=0; i<cart.length;i++){
    if(cart[i].hasOwnProperty(item)){
      found = true;
      cart.splice(i,1);
    }
  }
  if(!found){
    console.log('That item is not in your cart.');
  }
  return cart;
}

function placeOrder(card){
  if(!card){
    console.log('We don\'t have a credit card on file for you to place your order.');
  } else {
    var t = total();
    console.log(`Your total cost is $${t}, which will be charged to the card ${card}.`);
  }
  cart = [];

}
