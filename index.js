var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // write your code here
  let price = Math.floor((Math.random() * 100) + 1);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  // write your code here
  let cartList = getCart();
  if (cartList.length === 0){
    console.log('Your shopping cart is empty.');
  } else {
    let keys = [];
    let itemCost = [];
    for (var i = 0; i < cartList.length; i++){
      let key = Object.keys(cartList[i]);
      keys.push(key[0]);
      itemCost.push(cartList[i][key]);
    }
    let statement = `In your cart, you have`
    for (var j = 0; j < keys.length; j++){
      statement += ` ${keys[j]} at $${itemCost[j]}`;
      if (keys.length > 2 && j < keys.length - 1){
        statement += `,`;
      }
      if (j === keys.length - 2){
        statement += ` and`;
      }
    }
    statement += `.`;
    console.log(statement);
  }
}

function total() {
  // write your code here
  let cartList = getCart();
  let total = 0;
  let itemCost = [];
  for (var i = 0; i < cartList.length; i++){
    let key = Object.keys(cartList[i]);
    itemCost.push(cartList[i][key]);
  }
  for (var j = 0; j < itemCost.length; j++){
    total += itemCost[j];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  let cartList = getCart();
  for (var i = 0; i < cartList.length; i++){
    if (cartList[i].hasOwnProperty(item)){
      cartList.splice(i, 1);
      return cartList;
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
    console.log('Sorry, we don\'t have a credit card on file for you.');
  } else {
    const cartTotal = total();
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`);
  }
  cart = [];
}
