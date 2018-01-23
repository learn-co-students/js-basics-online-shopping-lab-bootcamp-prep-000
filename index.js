var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 var itemPrice= Math.floor(Math.random()*100);
 var item={[itemName]: itemPrice};
 cart.push(item);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  if (cart.length===0){
    console.log("Your shopping cart is empty.");
  } else{
  let items=Object.keys(cart);
  let prices=Object.values(cart);
for (var i=0; i<items.length; i++);{
  if (i===0){
  console.log(`In your cart, you have ${items[i]} at $${prices[i]}.`);
}else if (i===1){
  console.log(`In your cart,you have ${items[i-1]} at $${prices[i-1]} and ${items[i]} at $${prices[i]}.`
);    
  }else {
    console.log(`In your cart, you have ${item[i-2]} at $${prices[i-2]}, ${items[i-1]} at $${prices[i-1]}, and ${items[i]} at $${prices[i]}.`);
  }
}
}
}

function total() {
//write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
