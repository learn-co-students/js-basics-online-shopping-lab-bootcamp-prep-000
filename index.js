var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var obj = {[item]: price};
  cart.push(obj);
  console.log(`${item} has been added to your cart.`);
  return cart
}

function viewCart() {
  if(cart.length === 0){
    console.log(`Your shopping cart is empty.`)
  } else{
    var itemsandPrices = [];
    for(let i = 0; i < cart.length; i++){
      var itemandPrice = cart[i];
      var item = Object.keys(itemandPrice);
      var price = itemandPrice[item];
      itemsandPrices.push(`${item} at $${price}`)
    } if (cart.length === 1){
      console.log(`In your cart, you have ${itemsandPrices}.`)
    }else if(cart.length === 2){
      console.log(`In your cart, you have ${itemsandPrices.join(" and ")}.`)
    }else if(cart.length > 2){
      console.log(`In your cart, you have ${itemsandPrices.slice(0,-1).join(", ") + ", and " + itemsandPrices.slice(-1)}.`)
    }
  }
}

function total() {
  var total = 0
  for(let i = 0; i < cart.length; i++) {
  total += cart[i][Object.keys(cart[i])[0]];
  }
return total
}
  // write your code here

function removeFromCart(item) {
for(var i = 0; i < cart.length; i++) {
  if (cart[i].hasOwnProperty(item)) {
    cart.splice(i, 1);
    return cart;
  }
}
console.log(`That item is not in your cart.`)
return cart
}
  // write your code here


function placeOrder(cardNumber){
  if (typeof cardNumber === "undefined"){
    console.log("Sorry, we don't have a credit card on file for you.");
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);

}
cart = [];
}
