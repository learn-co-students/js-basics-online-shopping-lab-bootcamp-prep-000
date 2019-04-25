var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = new Object();
  newItem.itemName = item;
  newItem.itemPrice = Math.floor(Math.random() * 100);

  cart.push(newItem);

  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  let statement;
  
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    for(let i=0; i<cart.length; i++) {
      statement += cart[i].itemName + "at" + cart[i].itemPrice
      
      
      
      // let current = cart[i];
      // let currentInfo = `${current.itemName} at $${current
      // .itemPrice}` ;
      //statement += currentInfo;
    }
    
    return `In your cart, you have ${statement}.`;
  };
  
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
