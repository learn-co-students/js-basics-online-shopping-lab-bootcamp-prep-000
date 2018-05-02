var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var randPrice = Math.floor(Math.random() * 101);
  var itemObj = {"itemName": item,"itemPrice": randPrice };
  cart.push(itemObj);
  return `${item} has been added to your cart.`;
}


addToCart("apple")
addToCart("grape")
var key = Object.keys(cart)[0];
var value = cart[key]
console.log("item ", key,value); 



function viewCart() {
  var len = cart.length;
  
  if (len === 0){
    return `Your shopping cart is empty.`;
  }
  
  for (var i = 0; i < len; i++){
    
    var item = cart[i],
    name = item["itemName"],
    price = item["itemPrice"];
    
    console.log(i)
    console.log(len)
    
    if (len === 1){
      statement = `${name} at $${price}`;
      return `In your cart, you have ${statement}.`
    }
    
    else{
      var str2 = "",
      statement = "";
      
      if (i + 1 < len){
      console.log("i: " + i)
      console.log("len: " + len)
      str2 =`, ${name} at ${price}`;
      console.log(str2)
      statement += str2;
      console.log(statement);
      }
      
      else if (i + 1 === len){
      console.log("i: " + i)
      console.log("len: " + len)
      str2 =`, and ${name} at $${price}`;
      console.log(str2)
      statement += str2;
      console.log(statement);
      }
    // statement += str2
  }
  console.log(`In your cart, you have${statement}.`)
  return `In your cart, you have${statement}.`;
}


viewCart()







function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
