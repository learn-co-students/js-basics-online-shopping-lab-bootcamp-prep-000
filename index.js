var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var min = Math.ceil(1);
  var max = Math.floor(100);
  var price = Math.random() * (max - min) + min; 
  var newItem = {
    itemName: item,
    itemPrice: price
  };
 cart.push(newItem);
 return `${item} has been added to your cart.`;
 // write your code here
}

function viewCart() {
  var newArray = [];
  for (let i = 0; i < cart.length; i++){
    var item = cart[i];
    var itemName = Object.keys(item)[0];
    var Name = item[itemName];
    var itemPrice = Object.keys(item)[1];
    var Price = item[itemPrice];
    newArray.push(`${Name} at $${Price}`);
  }
  
  if (newArray.length === 0){
    return "Your shopping cart is empty.";
  }
  else if (newArray.length <= 2){
    return `In your cart, you have ${newArray.join(", and ")}.`;
  }
  else{
    var poppEd = newArray.pop();
    return `In your cart, you have ${newArray.join(", ")}, and ${poppEd}.`;
  }
  return newArray;
  // write your code here
  //saved
}

function total() {
  var sum = 0;
  
  for (let i = 0; i < cart.length; i++){
    var item = cart[i];
    var itemPrice = Object.keys(item)[1];
    var price = item[itemPrice];
    sum += parseFloat(price);
  }
  
  return sum;
  // write your code here
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
    var newCart = cart[i];
    var newitem = Object.keys(newCart)[0];
    var itemName = newCart[newitem];
    if (itemName === item){
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
  // write your code here
}

function placeOrder(cardNumber) {
  var sum = total();
  if (!cardNumber){
    return ("Sorry, we don't have a credit card on file for you.");
  }
  
  else{
    cart = [];
  }
  
  return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`;
  
  // write your code here
}
