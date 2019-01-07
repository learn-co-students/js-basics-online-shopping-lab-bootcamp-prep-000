var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor((Math.random() * 100))});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0){
    console.log('Your shopping cart is empty.');
    return;
  }
  var items = [];
  var item_str;
  for(let item of cart){
    for(let name in item){
      items.push(`${name} at \$${item[name]}`);
    }
  }
  if (items.length > 1) items[items.length - 1] = "and " + items[items.length - 1];
  if (items.length > 2){
    item_str = items.join(', ');
  }else {
    item_str = items.join(' ');
  }
  console.log("In your cart, you have " + item_str + ".");
}

function total() {
  var total = 0;
  for(let item of cart){
    for(let product in item){
      total += item[product];
    }
  }

  return total;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++){
    let product = cart[i];
    for(let name in product){
      if (name == item){
        cart.splice(i,1);
        return;
      }
    }
  }
  console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) return console.log("Sorry, we don't have a credit card on file for you.");
  let _total = total();
  cart = [];
  console.log(`Your total cost is \$${_total}, which will be charged to the card ${cardNumber}.`);
}
