var cart;

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
    var price = Math.floor(Math.random() * 100) + 1;
    cart[item] = price;
    console.log(`${item} has been added to your cart.`);
    return cart;
}

function viewCart()
{
    if (cart.length == 0) {
        console.log('Your shopping cart is empty.');
        return;
    }
    var result = 'In your cart you have';
    for (var it in cart) {
        result += ` ${it} ${cart[it]}`;
    }
    console.log(result);
}

function removeFromCart(item)
{
    if (cart.hasOwnProperty(item)) {
        delete cart.item;
    } else {
        console.log("That item is not in your cart.");
    }
    return cart;
}

function placeOrder(cardNumber = null)
{
    if (cardNumber == null) {
        console.log("We don't have a credit card on file for you to place your order.");
    } else {
        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
        cart = [];
    }
}
