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

function getCart(){
  return cart;
}

function addToCart(item){
  let cost = Math.floor(Math.random() * 100);
  cart.push({[item]: cost});
  console.log(item + ' has been added to your cart.');
  return cart;
}

function viewCart(){
  let printItemsAndCost = 'In your cart, you have ';
  if (cart.length === 0){
    console.log('Your shopping cart is empty.');
  }else{
    for(var item in cart){
      for(var cost in cart[item]){
        printItemsAndCost += Object.keys(cart[item]) + ' at $' + cart[item][cost] + ', ';
    }
  }
}
  printItemsAndCost = printItemsAndCost.slice(0,printItemsAndCost.length-2).concat('.');
  console.log(printItemsAndCost);
}

function removeFromCart(item){
  for(let x in cart){
    if(cart[x].hasOwnProperty(item)){
      cart.splice(cart.indexOf(cart[x]),1);
      return cart;
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(ccNumber){
  if(ccNumber === undefined){
    console.log('We don\'t have a credit card on file for you to place your order.');
  }else{
    console.log('Your total cost is $' + total() + ', which will be charged to the card ' + ccNumber + '.');
  }
  cart = [];
}
