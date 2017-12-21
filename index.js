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
 var price = Math.floor(Math.random() * 100);
 var cartObj = { [item] : price};
 cart.push(cartObj);
 console.log (`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  var item =[];
  if (cart.length===0){
    console.log("Your shopping cart is empty.");
  }
  
  for (var i=0; i<cart.length;i++){
    var key = Object.keys(cart[i])[0];
    var price = cart[i][key];
    item.push(key+" at $"+price);
  }
  
    if(cart.length==1) console.log (`In your cart, you have ${item[0]}.`);
    else if (cart.length ==2){
      console.log(`In your cart, you have ${item.join(' and ')}.`);
      
    }
    else{
      item[cart.length-1] = `and ${item[cart.length - 1]}`;
      console.log(`In your cart, you have ${item.join(', ')}.`);
    }
   return cart;  
  }
 


function total() {
  // write your code here
  var sum=0;
  for(var i=0; i<cart.length; i++){
    for (var item in cart[i]){
      sum = sum + cart[i][item];
    }
  }
  
  return sum;
}

function removeFromCart(item) {
  // write your code here
  for (var i=0; i<cart.length; i++){
    var itemInCart = Object.keys(cart[i])[0];
    if (item==itemInCart){
      cart.splice(i,1);
      return cart;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
  
  if (cardNumber == undefined){
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  
  else{
    var totalPrice=total();
    console.log(`Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`);
    cart =[];
    return cart;
  }
}
