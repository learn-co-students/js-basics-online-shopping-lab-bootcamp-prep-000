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
 var val = Math.floor((Math.random() * 100) + 1) ;
 var itemToAdd = {[item]: val};
 cart.push(itemToAdd);
 console.log(item +" has been added to your cart.");
 return cart;
}

function viewCart() {
  // write your code here
  var text;
  if(cart.length === 0)
  {
    text = "Your shopping cart is empty.";
  }
  else {
    text = "In your cart, you have ";
    for(var i = 0; i < cart.length; i++)
    {
      var key = Object.keys(cart[i])[0];
      if (i === cart.length-1 && cart.length > 1)
      {
        if (cart.length === 2) {
          text = text + ' and ';
        }
        else{
            text = text + 'and ';
        }
      }

      text = text + Object.keys(cart[i])[0] + " at $" + cart[i][key];
      if (i< cart.length-1 && cart.length > 2)
      {
        text = text + ', ';
      }

    }
    text = text + '.';
  }
  console.log(text);
}

//viewCart();

function total() {
  // write your code here
  var total = 0;
  for(var i = 0; i < cart.length; i++)
  {
    var key = Object.keys(cart[i])[0];
    var v = parseInt(cart[i][key]);
    total = total + v ;
  }
  return total;
}
function removeFromCart(item) {
  // write your code here
  var flag = 0;
  for(var i = 0; i < cart.length; i++)
  {
    if(cart[i].hasOwnProperty(item))
    {
      cart.splice(i,1);
      flag = 1;
    }
  }
  if (flag === 0) {
    console.log("That item is not in your cart.");
  }
  return cart;
}
function placeOrder(cardNumber) {
  // write your code here
  var text;
  const cartTotal = total();
  if (cardNumber) {

    text = "Your total cost is $"+ cartTotal+ ", which will be charged to the card " + cardNumber +".";
    cart = [];
  }
  else {
    text = "Sorry, we don't have a credit card on file for you.";
  }
  console.log(text);
}
