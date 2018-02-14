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
let sum=0;

for (let i=0; i<cart.length; i++){
  sum+=(Object.values(cart[i])[0]);
}
return sum;
}

function removeFromCart(item) {
  for (let i=0; i<cart.length; i++){
  if (cart[i].hasOwnProperty([item])){
   cart.splice(i, 1);
   return cart;
    }
  }
    console.log("That item is not in your cart.");
    return cart;
  }

function placeOrder(cardNumber) {
  if(cardNumber){
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
      cart.splice(0, cart.length);
  }
  else{
    console.log("Sorry, we don't have a credit card on file for you.");
  }
}
