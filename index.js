var cart = [];

function getCart(){
  return cart
}

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}


function addToCart(item){
var price = Math.floor(Math.random()*10);
cart.push({[item]: price});
console.log (`${item} has been added to your cart.`);
return cart;
}

function viewCart(){
if (cart.length === 0)
{
  return console.log('Your shopping cart is empty.')
}
else
{
const cartSentence = [];
for (var i = 0, l = cart.length; i < l; i++)
{
var itemAndPrice = cart[i];
var itemSolo = Object.keys(itemAndPrice)[0]
var itemPrice = itemAndPrice[itemSolo];
cartSentence.push(`${itemSolo} at \$${itemPrice}`);
}
{
  console.log(`In your cart, you have ${cartSentence.join(', ')}.`)
}
}
}

function removeFromCart(item)
{
  var foundIt = false;
  for (var i = 0, l = cart.length; i < l; i++);
  {
    if (cart[i].hasOwnProperty(item))
    {
      var itemAndPrice = cart[i];
      delete itemAndPrice[item];
      foundIt = true;
    }
}
  if (foundIt === false){console.log("That item is not in your cart.")}
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
}
