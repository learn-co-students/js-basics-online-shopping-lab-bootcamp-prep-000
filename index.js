var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let newItem = {
   "itemName": item,
   "itemPrice": Math.floor(Math.random()*100)
 }
 getCart().push(newItem);
 return `${newItem.itemName} has been added to your cart.`;
}

function viewCart() {
  let list = [];
  if(getCart().length === 1){
    for(let i=0; i < getCart().length; i++){
      list.push(`In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`);
    }
  } else if (getCart().length > 1) {
    list.push(`In your cart, you have`);
    for (let i=0; i < getCart().length-1; i++) {
      list.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice},`);
    }
      list.push(`and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}.`)
  } else {
    return "Your shopping cart is empty.";
  }
  return list.join(" ");
}

function total() {
  let total = 0;
  for(let i=0; i < getCart().length; i++) {
    total = total + getCart()[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  let itemToRemove = '';
  for (let i=0; i< getCart().length; i++) {
    if (getCart()[i].itemName=== item) {
      itemToRemove=getCart()[i]
    }
  }
  if (itemToRemove) {
    let index = getCart().indexOf(itemToRemove);
    getCart().splice(index, 1);
  } else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    console.log("total=", total())
    let cartTotal = total();
    setCart([]);
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
  }
}
