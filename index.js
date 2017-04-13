var cart;

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
function addToCart(item){
var price;
var obj = new Object();
price = Math.random()*100;
price=Math.floor(price);
obj[item]=price;
console.log(price);
  cart.push(obj);
  console.log(item+" has been added to your cart.")
  return cart;
}


function getCart(){
  return cart;
}

function viewCart() {
  var keyName;
  var price;
  var str="";
if (cart.length) {
  for (var item in cart){
    keyName = Object.keys(cart[item]);
    price = cart[item][keyName];
    str=str+" "+keyName+" at $"+price+(item==cart.length-1?".":",")
  }
  console.log(`In your cart, you have${str}`);
} else {console.log("Your shopping cart is empty.")}
}

function removeFromCart(item){
  var exist=0;
  for (var i in cart){
    if (cart[i].hasOwnProperty(item)) {
      exist = 1;
      cart.splice(i,1);
      //console.log(cart[i][item]);
    }
  }
if (exist < 1)  {console.log("That item is not in your cart.")}
}

function placeOrder(number){
  if (number===undefined){console.log("We don\'t have a credit card on file for you to place your order.")} else{
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`);
    cart='';
  }
}