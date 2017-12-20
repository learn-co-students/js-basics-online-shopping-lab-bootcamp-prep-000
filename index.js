var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var itemPrice = Math.floor(Math.random() * 100)  
var additem = {}
var itemName = item
additem[itemName] = itemPrice
cart.push(additem)
console.log(`${item} has been added to your cart.`)
return cart 
}

function viewCart() {
  var buz = cart[0];
  var array = [];
if (cart.length === 0) {console.log("Your shopping cart is empty.")} 
else if (cart.length === 1) {for (var name in buz) {
    console.log(`In your cart, you have ${name} at $${buz[name]}.`);
  } } 
else if (cart.length === 2) {for (var j = 0; j < cart.length; j++) {var leys = Object.keys(cart[j]); var tuz = cart[j]; 
if (j === 0) 
  {array.push(`In your cart, you have ${leys[0]} at $${tuz[leys[0]]}`)}
   else {array.push(`and ${leys[0]} at $${tuz[leys[0]]}.`)}} 
  var line = array.join(' ');
  console.log(line);
}
  else if (cart.length > 2) {for (var i = 0; i < cart.length; i++) {var keys = Object.keys(cart[i]); var suz = cart[i]; if (i === 0) 
  {array.push(`In your cart, you have ${keys[0]} at $${suz[keys[0]]}`)}
  else if (i > 0, i < ((cart.length) - 1)) {array.push(`${keys[0]} at $${suz[keys[0]]}`)} 
  else {array.push(`and ${keys[0]} at $${suz[keys[0]]}.`)}}
  var fine = array.join(', ');
  console.log(fine); 
}}
/*{ if (i === 0) {array.push( "The line is currently: 1. " + line[i]) }
else {array.push((line.indexOf(line[i]) + 1) + ". " + line[i]) }}*/

function total() {
  var array = [];
  for (var i = 0; i < cart.length; i++) {
  var keys = Object.values(cart[i]); 
  array.push(keys[0]) }
  const sum = array.reduce((total, amount) => total + amount);
return sum ;
}

function removeFromCart(item) {
var lart = [...cart] 
for (var i = 0; i < cart.length; i++) {var yoyo = cart[i];
if (yoyo.hasOwnProperty(item)) {lart.splice(i, 1) }
else {} }
if (lart.length === cart.length) {console.log("That item is not in your cart.") }
else {cart = [...lart]} 
}

function placeOrder(cardNumber) {
if (typeof cardNumber == 'number') {var digits = cardNumber.toString(); }
else {digits = cardNumber }
if (cardNumber === undefined ){console.log("Sorry, we don't have a credit card on file for you.")}
else if (digits.length === 9, typeof cardNumber == 'number') {
 console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
} 
else {console.log("Sorry, we don't have a credit card on file for you.") }
  cart = []
} 

/*


describe("placeOrder()", function() {
  it("doesn't place the order if a credit card number is not provided", function() {
    placeOrder();

    expect(console.log).toHaveBeenCalledWith(
      "Sorry, we don't have a credit card on file for you."
    );
  });

  it("places an order when a credit card number is provided", function() {
    addToCart("zucchini");

    const cartTotal = total();
    const cardNumber = Math.floor(Math.random() * 100000000);

    placeOrder(cardNumber);

    expect(console.log).toHaveBeenCalledWith(
      `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`
    );
  });

  it("empties the cart", function() {
    addToCart("apples");

    placeOrder(12345678);

    expect(getCart()).toEqual([]);
  });
}); */