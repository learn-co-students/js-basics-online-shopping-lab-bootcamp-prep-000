var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100) + 1; 
 var obj = Object.assign({[item]: price});
 cart.push(obj);
 console.log(`${item} has been added to your cart.`);
 return cart ;
}

function viewCart() {
  if (cart.length == 0){
    return console.log("Your shopping cart is empty.");
  } else {
    var li = "In your cart, you have ";
    for(var i = 0; i < cart.length; i++){
      var currItem = cart[i];
      var itemName = Object.getOwnPropertyNames(currItem);
      var itemPrice = currItem[itemName];
      if (cart.length >= 3){
        //3 plus items
          if(i == cart.length - 1){ 
            li = `${li}and ${itemName} at $${itemPrice}.`;
          } else {
            li = `${li} ${itemName} at $${itemPrice},`
          }
      } else if (cart.length == 2){
        var nextItem = cart[1];
        var nitemName = Object.getOwnPropertyNames(nextItem);
        var nitemPrice = nextItem[nitemName];
        li = `${li} ${itemName} at $${itemPrice} and ${nitemName} at $${nitemPrice}.`;
        //2 items in cart
      } else if(cart.length == 1){ 
        li = `${li}${itemName} at $${itemPrice}.`;
        //1 item in cart
      }
    }
    return console.log(li);
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
