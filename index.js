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
 var price=Math.ceil( Math.random() * 100, 1 );
 var merchandise=new Object({[item]: price})
 console.log(`${item} has been added to your cart.`)
 cart.push(merchandise)
 return cart;
}

function viewCart() {
  // write your code here
  var cartList=[];
  //make each key value pair into a string and push into cartList
  for (var i=0; i<cart.length; i++){
    var item = '';
    //better ways to retrieve keys?
    for (var keys in cart[i]){
      item=keys
    }
    cartList.push(`${item} at \$${cart[i][item]}`);
  }
  //format output
  if (!cartList.length) {
    console.log('Your shopping cart is empty.')
  }else if (cartList.length===1){
    console.log(`In your cart, you have ${cartList.join(', ')}.`)
  } else if (cartList.length===2){
    var lastItem=cartList.pop();
    console.log(`In your cart, you have ${cartList.join(', ')} and ${lastItem}.`)
  } else {
    var lastItem=cartList.pop();
    console.log(`In your cart, you have ${cartList.join(', ')}, and ${lastItem}.`)
  }

}

function total() {
  var totalValue=0;
  // iterate through each item
  for (var i=0; i<cart.length; i++){
    var item = '';
    //better ways to retrieve keys?
    for (var keys in cart[i]){
      item=keys
    }
    //do the main thing with each item
    totalValue+=cart[i][item]
  }
  return totalValue
}

function removeFromCart(item) {
  // iterate over each element in var
  for (var i=0; i<cart.length; i++){
    //if match: update and return
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      return cart;
    }
  }
  //since no match from above
  console.log('That item is not in your cart.')
}

function placeOrder(cardNumber) {
  // write your code here
  if(!parseInt(cardNumber)){
    console.log(`Sorry, we don\'t have a credit card on file for you.`)
    return;
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart=[];
    return
  }
}
