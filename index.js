//PENDING REV
//FROM LEARN.CO SOLUTION


var cart;

function setCart(newCart) {
  cart = newCart;
}

function getCart()
{
  return cart;
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

function addToCart(item)
{
  var price= undefined//Math.floor(Math.random()*100);
  cart.push({item: price});
  console.log(item+" has been added to your cart.");
  return cart;
}

function viewCart()
{
  var str="In your cart, you have ";
  
  if (cart.length===0)
  console.log("Your shopping cart is empty.");
  
  else {    
   for (var i=0; i<cart.length; i++)
   {
     for (var prod in cart[i])
      str+=prod+" at "+cart[prod];
    }
    console.log(str+".");
  }

}

function removeFromCart(item)
{
  for (var i=0; i<cart.length; i++)
  {
    if (cart[i].hasOwnProperty(item))
    delete cart[i];
    else {
      console.log("That item is not in your cart.");
    }
  }
}

function placeOrder(cardNumber)
{
  if(cardNumber===undefined)
  console.log("We don't have a credit card on file for you to place your order.");
  else {
    for(var i=0; i<cart.length; i++) {
      cart.pop();
    }
    console.log("Your total cost is $"+total()+", which will be charged to the card "+cardNumber);
  }
}