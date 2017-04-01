var cart =[];

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

function getCart()
{
  return cart;
}

function addToCart(item)
{
  var price = Math.floor(Math.random() * 100);
  cart.push({[item] : price});
  console.log(item + " has been added to your cart.");
  return cart;
}

function viewCart()
{
  if(cart.length === 0)
  {
    console.log("Your shopping cart is empty.");
    return;
  }
    var list = "In your cart, you have";
   for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        if(i ===0)
        {
          list = list + " " + [item] + " at $" + cart[i][item];
        }
        else
        {
          list = list + ", " + [item] + " at $" + cart[i][item];
        }
      }
    }
    list = list + ".";
    console.log(list);
}
function removeFromCart(item)
{
  for (var i = 0, l = cart.length; i < l; i++) {
    if(cart[i].hasOwnProperty(item))
    {
      cart = [...cart.slice(0, i), ...cart.slice(i+1)];
      return;
    }
  }
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber)
{
  if(cardNumber === undefined)
  {
    console.log("We don't have a credit card on file for you to place your order.");
    return
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  var newCart = [];
  setCart(newCart);
}
