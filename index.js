var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code hereaaa

 cart.push({itemName: itemName, itemPrice:Math.floor((Math.random() *100) +1)})
 return `${itemName} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var st;
  var backUp = cart;
console.log(backUp)
  if(cart.length>0){
    for(var i = 0; i<cart.length; i++) {
      if(i===0 && cart.length===1){
        st = `In your cart, you have ${backUp[i].itemName} at $${backUp[i].itemPrice}.`
      }
      else if(i===0 && cart.length>1){
        st = `In your cart, you have ${backUp[i].itemName} at $${backUp[i].itemPrice}, `
      }
      else if(i===cart.length - 1){
        st = `${st}and ${backUp[i].itemName} at $${backUp[i].itemPrice}.`
      }
      else{
        st = `${st}${backUp[i].itemName} at $${backUp[i].itemPrice}, `
      }
    }
    return st;
  }
  else {
    return "Your shopping cart is empty."
  }
}

function total() {
  // write your code here  
  var add = 0;
  for(var i = 0; i<cart.length; i++){
      add = add + cart[i].itemPrice;
    }
  return add;
}

function removeFromCart(item) {
  // write your code here
  var backUp = cart;
  var c = 0;
  for(var i = 0; i < backUp.length; i++){
    if(item === cart[i].itemName){
      return cart.splice(i, 1)
    }
  }
    return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined){
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  var t = total();
  cart = [];
  return `Your total cost is $${t}, which will be charged to the card ${cardNumber}.`
}

