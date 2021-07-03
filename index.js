var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({[item]:(Math.floor(Math.random() * 100 + 1))})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  const l = cart.length
  if (!l){
    console.log(`Your shopping cart is empty.`);
  }
  else{
    let itemsAndPrices = [];

    for (let i = 0; i < l; i++) {
      let itemAndPrice = cart[i];
      let item = Object.keys(itemAndPrice)[0];
      let price = itemAndPrice[item];

      itemsAndPrices.push(`${item} at \$${price}`);
    }

    switch(itemsAndPrices.length) {
      case 1:
        break;
      case 2:
        itemsAndPrices = itemsAndPrices.join(" and ");
        break;
      default:
        itemsAndPrices[l-1] = "and ".concat(itemsAndPrices[l-1]);
        itemsAndPrices = itemsAndPrices.join(", ");
    }
    console.log(`In your cart, you have ${itemsAndPrices}.`);
  }
}

function total() {
  var total = 0;
  for (let i = 0; i<cart.length; i+=1){
    for (let item in cart[i]){
    total+=cart[i][item]}
  }
  return total;
}

function removeFromCart(item) {
  let sku = false;
  for (let i=0, l=cart.length; i<l; i+=1){
    if(cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
      sku = true;
      l-=1;
    }
  }
  if (!sku) {
    console.log(`That item is not in your cart.`)}
  return cart;
}
//alternative solution
/*function removeFromCart(item) {
  var items = [];
  var finalArray;
  for(var i=0; i<cart.length; i++){
   var object = cart[i];
   var itemName = Object.keys(object);
   finalArray = items.push(itemName[0]); }
  var index = items.indexOf(item);
  if(index === -1){
    console.log('That item is not in your cart.'); }
  else {
    cart.splice(index, 1); console.log(cart);
  }
}*/

function placeOrder(cardNumber) {
  if (!cardNumber){
    console.log(`Sorry, we don't have a credit card on file for you.`);
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }
  cart = []
}
