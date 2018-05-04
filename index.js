var cart = [];
function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj={
   'itemName':item,
   'itemPrice':getRandomInt(1,100)
 }
 cart.push(obj)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length===0){
    return "Your shopping cart is empty."
  }
  else{
    var defaultStr='In your cart, you have ';
   
    for(var i=0;i<cart.length;i++){
       if(cart.length-1 ===i){
      var sym='.'
    }else if((cart.length-1)-i!=1){
      sym=', '
    }
    else{sym=', and '}
      defaultStr+= `${cart[i].itemName} at $${cart[i].itemPrice}${sym}`;
    }
     return defaultStr;
  }
}

function total() {
  // write your code here
  var total=0;
  for(var j=0;j<cart.length;j++){
    total+=cart[j].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var objexist;
  var removeindex=0;
  for(var z=0;z<cart.length;z++){
    var test=cart[z]
   for(var key in test){
    var app=test[key]
     if(test[key]===item){
       objexist=true;
       removeindex=z;
       cart.splice(removeindex,1)
     }
  }
  }
  if(objexist) {return true;
  }else {return 'That item is not in your cart.'}
}

function placeOrder(cardNumber) {
  let totalnum=total()
  //let ccnum=Math.floor(Math.random() * 100000000);
   //ccnum=ccnum.toString()
  if(cardNumber===undefined){
    return "Sorry, we don't have a credit card on file for you."
  }
// else if(cardNumber.length!==ccnum.length) {
//   console.log("Sorry, we don't have a credit card on file for you.")
// }
else /*if(cardNumber.length===ccnum.length)*/{
  //console.log(ccnum,cardNumber)
  setCart([])
  return `Your total cost is $${totalnum}, which will be charged to the card ${cardNumber}.`
}
// for(var k=0;k<cart.length;k++){
// cart.pop()
//}
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}