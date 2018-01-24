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
  let newArray=[];
  if (cart.length>0){
for (var i=0; i<cart.length; i++){
  let item=Object.keys(cart[i])[0];
  let price=cart[i][item];
  newArray.push(`${item} at $${price}`);
}
if (newArray.length===1){
console.log(`In your cart, you have ${newArray.join(", ")}.`);
} else if (newArray.length===2){
console.log(`In your cart, you have ${newArray.join(" and ")}.`);
} else if (newArray.length>2){
 newArray[newArray.length-1]="and ".concat(newArray[newArray.length-1]);
 console.log(`In your cart, you have ${newArray.join(", ")}.`);
}
     
  } else {
  console.log("Your shopping cart is empty.");
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
