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
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100)
 }
 cart.push(newItem);
 return `${newItem["itemName"]} has been added to your cart.`;
}

function viewCart() {
  if ( cart.length == 0 ) { return "Your shopping cart is empty." }
  let output = "In your cart, you have ";
  cart.map( ( c, i ) => {
    output += c.itemName + " at $" + c.itemPrice;
    if ( i == cart.length - 1) { output += "." }
    if ( i == cart.length - 2) { output += ", and " }
    if ( i < cart.length - 2) { output += ", " }
  })
  return output;
}

function total() {
  return cart.reduce( (a, { itemPrice } ) => a + itemPrice, 0);
}

function removeFromCart(item) {
  let i = -1;
  cart.map( ( { itemName }, ind ) => i = item == itemName ? ind : i );
  if ( i == -1 ) { return "That item is not in your cart." }
  cart = [...cart.slice( 0, i ), ...cart.slice( i + 1 ) ]
  return cart;
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) { return "Sorry, we don't have a credit card on file for you."}
  let amtDue = total();
  cart = [];
  return `Your total cost is $${amtDue}, which will be charged to the card ${cardNumber}.`;
}
