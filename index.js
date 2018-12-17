var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let obj = 
  { itemName: item,
    itemPrice: 1 + getRandomInt(99)  
  };
 cart.push(obj);
 return `${item} has been added to your cart.`;
}

  function viewCartAux(name, dollars){
    return `${name} at $${dollars}`;
  }
  function msg(m){
    return `In your cart, you have ${m}.`
  }
  function indexAux(n){
    let obj = cart[n];
    return viewCartAux(obj.itemName, obj.itemPrice)
  }

function viewCart() {
  let len = cart.length;
  if (len === 0){
  return "Your shopping cart is empty.";
  }
  if (len === 1){
  return msg(indexAux(0));
  }
  if (len === 2){
  return msg(`${indexAux(0)}, and ${indexAux(1)}`);
  }
  if (len >= 3){
    let end = `and ${indexAux(len - 1)}`;
    let str2 = "";
  for(let i = 0; i < len - 1; i++){
    str2 = `${str2}${indexAux(i)}, `;
  }
  return msg(`${str2}${end}`);
  }
}

function total() {
  let len = cart.length;
  let total = 0;
  for(let i = 0; i < len; i++){
    total += cart[i].itemPrice;
  }
  return total;
}

function findItemByName(name){
  let len = cart.length;
  for(let i = 0; i < len; i++){
    if(cart[i].itemName === name){
      return i;
    }
  }
  return null;
}

function removeFromCart(item) {
  let index = findItemByName(item);
  if (index){
  return cart.splice(index, 1);
  } else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  if (cardNumber){
        let msg = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = [];
    return msg;
  } else {
    return "Sorry, we don't have a credit card on file for you.";
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
