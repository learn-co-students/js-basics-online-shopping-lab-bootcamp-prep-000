var cart = [];

function getRandomPrice() {
  return Math.floor(Math.random() * Math.floor(100));
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  getCart().push({ itemName: item, itemPrice: getRandomPrice()});
  return `${item} has been added to your cart.`;
}

function getItemNameAndPrice(i)
{
  if(getCart()[i]) {
  return `${getCart()[i].itemName} at \$${getCart()[i].itemPrice}`;
  }
}

//`In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.`
function viewCart() {

    if(getCart().length == 0)
    {
      return `Your shopping cart is empty.`;
    } else {
      var line = `In your cart`
      if(getCart().length == 1){
        line += `, you have ${getItemNameAndPrice(0)}.`
      } else {
        line += `, you have ${getItemNameAndPrice(0)}`
        for(let i = 1; i < getCart().length - 1; i++)
        {
          line += `, ${getItemNameAndPrice(i)}`;
        }
        line += `, and ${getItemNameAndPrice(getCart().length - 1)}.`
      }

      return line;
  }

}

function total() {
  var tot = 0;
  for(let i = 0; i < getCart().length; i++)
  {
    tot += getCart()[i].itemPrice;
  }
  return tot;
}

function removeFromCart(item) {

  for(let i = 0; i < getCart().length; i++)
  {
    if(getCart()[i].itemName === item)
    {
      return getCart().splice(i, 1);
    }
  }
  return `That item is not in your cart.`;

}

function placeOrder(cardNumber) {
  if(cardNumber === undefined || cardNumber === null || cardNumber === "")
  {
    return `Sorry, we don't have a credit card on file for you.`;
  } else {
    var line = `Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`
    setCart([]);
    return line;
  }

}
