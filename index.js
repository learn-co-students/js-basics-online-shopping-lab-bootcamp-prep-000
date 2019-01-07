var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemName = `${item}`;
  let itemPrice = Math.floor(Math.random() * 100 + 1); //Returns random price between 1 and 100
  cart.push({ [itemName]: itemPrice });              //Adds item to cart
  console.log(`${itemName} has been added to your cart.`);  //confirmation
  return cart;
}

function viewCart() {
  if(cart.length === 0){
    console.log(`Your shopping cart is empty.`);
  }
  let list = [];
  for(let i = 0; i < cart.length; i++){
    let item = cart[i];
    let itemName = Object.keys(item)[0];
    let itemPrice = item[itemName];
    list.push(`${itemName} at $${itemPrice}`)
  }
  switch(list.length){
    case 1:
      break;
    case 2:
      list = list.join(` and `)
      break;
    default:
      list[list.length - 1] = `and `.concat(list[list.length - 1]);
      list = list.join(`, `)
  }
  console.log(`In your cart, you have ${list}.`)
}

function total() {
  let sum = 0;
  for(let i = 0; i < cart.length; i++){
    for(let item in cart[i]){
      sum += cart[i][item];
    }
  }
  return sum;
}

function removeFromCart(item) {
let itemPresent = false;
for(let i = 0, length = cart.length; i < length; i++){
  if(cart[i].hasOwnProperty(item)){ //locate the item
    cart = cart.slice(0, i).concat(cart.slice(i + 1)); //reconstruct array around selected item
    length--;
  }
};
/*var ind = cart.findIndex(item);  //attempted shortcut, try again later?
delete cart(ind); */
if(!itemPresent){
  console.log(`That item is not in your cart.`);
  }
return cart;
}


function placeOrder(cardNumber) {
  if(typeof cardNumber === `number`){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = [];
    return cart
  }else{
    console.log(`Sorry, we don't have a credit card on file for you.`)
  }
}
