var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 101) +1;
  let obj = {};
  obj.itemName = item;
  obj.itemPrice = price;
  cart.push(obj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length===0)
  return "Your shopping cart is empty.";
  
  else{
  let newArray = cart.slice(0);
  for (let i=0; i<newArray.length; i++){
      let name = newArray[i].itemName;
      let price = newArray[i].itemPrice;
      newArray[i] = `${name} at $${price}`;
    }
    if (newArray.length===1)
  return `In your cart, you have ${newArray}.`;
    else {
      newArray[newArray.length-1] = `and ${newArray[newArray.length-1]}`;
  return `In your cart, you have ${newArray.join(', ')}.`;
    }
  }
}

function total() {
  let counter = 0;
  for (let i=0; i<cart.length; i++){
    let price = cart[i].itemPrice;
    counter = counter + price;
  }
  return counter;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
