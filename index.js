var cart = [];
viewCart();

cart = addToCart("kale");

viewCart();

cart = addToCart("moose");

viewCart();

cart = addToCart("chalk");
viewCart();


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const itemName = item;
  const itemPrice = Math.floor(Math.random()*100);
  var obj = {[itemName]:itemPrice};
  console.log(obj);
  cart.push(obj);
  console.log(item + ' has been added to your cart.');
  return cart;
}

function viewCart() {
  var str;
  if (cart.length == 0){
    console.log('Your shopping cart is empty.');
    return 'Your shopping cart is empty.';}
  if(cart.length == 1){
    var keys = Object.keys(cart[0]);
    str = 'In your cart, you have ' + keys[0]+ ' at $' + cart[0][keys[0]]+'.';
  } else if(cart.length == 2){
    var keys = [];
    console.log("key:");
    keys.push(Object.keys(cart[0]));
    keys.push(Object.keys(cart[1]));
        str = 'In your cart, you have '+ keys[0] + ' at $' + cart[0][keys[0]] + ' and ' +  keys[1]+ ' at $' +cart[1][keys[1]]+'.';
    } else {
      str = 'In your cart, you have ';
      for( var i=0; i<cart.length;i++){
        if(i != cart.length-1){
          var keys = Object.keys(cart[i]);
          console.log(Object.keys(cart[i]));
          str += keys[0] + ' at $' + cart[i][keys[0]] + ', ';
          console.log(str);
        }else{
          var keys = Object.keys(cart[i]);
          str += 'and '+keys[0] + ' at $' + cart[i][keys[0]]+ '.';
        }
      }
    }
    console.log(str);
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
