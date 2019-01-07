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
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
function getCart(){
  return cart;
}
function addToCart(item)
{
  var itemPrice = Math.floor(Math.random()*100);
  cart.push({[item]: itemPrice});
  console.log(`${item} has been added to your cart.`);
  return cart;
}
function viewCart()
{

  if(cart.length == 0)
  {
    console.log("Your shopping cart is empty.");
  }
  else
  {
    var message = "In your cart, you have ";
  for(let i =0; i<cart.length;i++)
  {
    for(let items in cart[i])
    {
    (message= message+`${items} at $${cart[i][items]}`);
    (i < cart.length - 1) ? message += ', ' : message += '.';
    }
  }
  console.log(message);
}
}
function removeFromCart(itemName)
{
  var logic=1;
  for(let i=0;i<cart.length;i++)
  {
  for(let items in cart[i])
  {
    if (items==itemName)
    {
      cart.splice(i)
      logic = 0
      return cart
    }
    else
      {
        logic=1
      }

  }
  }
  if(logic==1)
  {
    console.log("That item is not in your cart.")
  }
}
function placeOrder(ccNumber)
{
  if(ccNumber==null)
  {console.log("We don't have a credit card on file for you to place your order.")}
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${ccNumber}.`)
    cart.length=0;
  }
}
