var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var name = item;
 var name = {};
 name[item] = Math.floor(Math.random() * 100);
 cart.push(name);
 console.log(`${item} has been added to your cart.`)
 return cart;
}


function viewCart() {
var arr = [];
var newArr = [];

for(var i = 0; i < cart.length; i++) {
  arr.push(Object.keys(cart[i]));
  newArr.push(Object.values(cart[i]));
}
    if(cart.length === 0) {
      console.log('Your shopping cart is empty.')
    } else if (cart.length === 1){
        console.log(`In your cart, you have ${arr[0]} at $${newArr[0]}.`)
    } else if(cart.length === 2) {
        console.log(`In your cart, you have ${arr[0]} at $${newArr[0]} and ${arr[1]} at $${newArr[1]}.`)
    } else {
      var str = `In your cart, you have ${arr[0]} at $${newArr[0]}, `;
      var strOne;
      var strTwo = `and ${arr.pop()} at $${newArr.pop()}.`;
      for(var j = 1; j < cart.length - 1; j++) {
        strOne = `${arr[j]} at $${newArr[j]}, ${''}`
        str = str.concat(strOne);
      } str = str.concat(strTwo);
      console.log(str);
    }
}

function total() {
var arr = [];
var newArr = [];
var tempArr = [];
var reducer = (accumulator, currentValue) => accumulator + currentValue;
  for(var i = 0; i < cart.length; i++) {
    newArr.push(Object.values(cart[i]));
  }
  for(var j = 0; j < newArr.length; j++) {
    tempArr = newArr[j];
    arr = arr.concat(tempArr);
  }
   return arr.reduce(reducer);
}

function removeFromCart(item) {
for(var i = 0; i < cart.length; i++){
  if(cart[i].hasOwnProperty(item)) {
    cart.splice(i, 1);
    return cart;
  }
} console.log('That item is not in your cart.');
}


function placeOrder(cardNumber) {
  if(cardNumber !== undefined) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  } else {
  console.log("Sorry, we don't have a credit card on file for you.")

  }
}
