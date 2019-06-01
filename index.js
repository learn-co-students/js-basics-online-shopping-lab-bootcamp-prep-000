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
 var rand = Math.floor(Math.random() * 100);
 var obj = {itemName: item, itemPrice: rand};
 var arr = getCart();
 arr.push(obj);
 
 if(setCart(arr)){
   return `${item} has been added to your cart.`;
 }
}

function viewCart() {
  // write your code here
  var arr = getCart();
  
  if(arr.length === 0){
    return `Your shopping cart is empty.`;
  }else{
    var str = `In your cart, you have`;
    for (let i = 0; i < arr.length; i++){
      if (i < arr.length - 2){
        str += ` ${arr[i].itemName} at $${arr[i].itemPrice},`;
      }else if (i === arr.length - 2){
        str += ` ${arr[i].itemName} at $${arr[i].itemPrice}, and`;
      }else {
        str += ` ${arr[i].itemName} at $${arr[i].itemPrice}.`;
      }
    }
    return str;
  }
}

function total() {
  // write your code here
  var total = 0;
  var arr = getCart();
  
  for (let i = 0; i < arr.length; i++){
    total += arr[i].itemPrice;
  }
  
  return total;
}

function removeFromCart(item) {
  // write your code here
  var arr = getCart();
  
  for (let i = 0; i < arr.length; i++){
    if(arr[i].itemName === item){
      arr.splice(i, 1);
      return arr;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
    var price = total();
    setCart([]);
    return `Your total cost is $${price}, which will be charged to the card ${cardNumber}.`;
  }else{
    return `Sorry, we don't have a credit card on file for you.`;
  }
}
