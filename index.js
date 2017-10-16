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
 var set = { [item] : Math.floor(Math.random()*100)}
 cart.push(set)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  var items = []

  if(!cart.length){
    console.log("Your shopping cart is empty.")
    return;
  }
  for(let i=0; i<cart.length; i++){
    //items.push(`${item}`);
    var itemName = Object.keys(cart[i])
    var itemValue = cart[i][itemName]
    items.push(itemName+" at $"+itemValue)

  }//`In your cart, you have lemons at $${lemonsCost}.`
  if(items.length==1) {
    console.log(`In your cart, you have ${items[0]}.`);
  }
  else if (items.length==2) {
    console.log( `In your cart, you have ${items[0]} and ${items[1]}.`);
  }
  else {
    console.log(`In your cart, you have ${items.slice(0, items.length-1).join(", ")}, and ${items.slice(-1)}.`)
  }
  return;
}

function total() {
  // write your code here
  var sum = 0;
  for(let i=0; i<cart.length; i++){
    //items.push(`${item}`);
    var itemName = Object.keys(cart[i])
    sum+= cart[i][itemName]
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  var matched = 0;
  for(let i=0; i<cart.length; i++){
    //items.push(`${item}`);

    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      matched++;
    }
  }
  if(matched<1){
    console.log("That item is not in your cart.")
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here

  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.")

    return;
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = [];
  return cart;

}
