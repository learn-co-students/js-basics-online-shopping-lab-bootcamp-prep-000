var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var obj = new Object({[item]:Math.floor((Math.random(0,1)+.01)*100)});
 cart.push(obj);
 console.log(item + ' has been added to your cart.');
 return cart;
}

function viewCart() {
  // write your code here
  var str = 'In your cart, you have ';
  if(cart.length === 0){
    console.log('Your shopping cart is empty.');
    return

  } else if(cart.length > 1){

      if(cart.length > 2){
      // for 3+ items only, add a comma at the end
        for(var i = 0; i < cart.length - 1; i++){
          var thisObj = cart[i];
          var key = Object.keys(thisObj)[0];
          str+= key + ' at $' + thisObj[key] +', ';
        }
      } else {
        // for 2 items only
        var secondObj = cart[0];
        var secondKey = Object.keys(secondObj)[0];
        str+= secondKey + ' at $' + secondObj[secondKey] + ' ';
      }


      // included for both 2 and 3+ items
      str += 'and ';


  }

  // Add the last item with a period at the end
  var finalObj = cart[cart.length-1];
  var finalKey = Object.keys(finalObj)[0];
  str += finalKey + ' at $' + finalObj[finalKey] + '.';
  console.log(str);
  return;
}


function total() {
  // write your code here
  var sum = 0;
  for(var i = 0; i < cart.length; i++){
    var nextObj = cart[i];
    var nextKey = Object.keys(nextObj)[0];
    sum += nextObj[nextKey];
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return cart;
    }
  }
  console.log('That item is not in your cart.');
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined){
    console.log('Sorry, we don\'t have a credit card on file for you.');
    return;
  }

  console.log('Your total cost is $' + total() + ', which will be charged to the card ' + cardNumber + '.');
  cart = [];

}
