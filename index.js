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
    for(var i = 0; i < cart.length; i++){
      var li = "In your cart, you have ";
      var currItem = cart[i];
      var itemName = Object.getOwnPropertyNames(currItem);
      var itemPrice = currItem.itemName;
      if (cart.length >= 3){
        //3 plus items
          if(i + 1 == cart.length){ 
            li = `${li}and ${itemName} at $${itemPrice}.`;
            return console.log(li);
          } else {
            li = `${li} ${itemName} at $${itemPrice}, `
          }
      } else if (cart.length == 2){
        var nextItem = cart[i + 1];
        var nitemName = Object.getOwnPropertyNames(nextItem);
        var nitemPrice = nextItem.nitemName;
        li = `${li} ${itemName} at $${itemPrice} and ${nitemName} at $${nitemPrice}.`;
        return console.log(li);
        //2 items in cart
      } else if(cart.length == 1){ 
        li = `${li}${itemName} at $${itemPrice}.`;
        return console.log(li);
        //1 item in cart
      }
    }
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
