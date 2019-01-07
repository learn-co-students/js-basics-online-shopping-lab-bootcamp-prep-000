var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push(item);
  cart = cart.map(list => ({
    itemName: list,
    itemPrice: Math.floor(Math.random() * (100 - 1)) + 1,
  }));
  return `${item} has been added to your cart.`
};

function viewCart() {
  let message = "In your cart, you have ";
  const cartLength = cart.length;

  if (cartLength === 0) {
    return "Your shopping cart is empty."
  };

  cart.map((obj, index) => {
    const item = obj.itemName;
    const price = obj.itemPrice;
    const itemPricePair = `${item} at $${price}`;

    if (cartLength === 1) {
      message += `${itemPricePair}.`
    } else {
      message += index === cartLength-1 ? `and ${itemPricePair}.` : `${itemPricePair}, `
    };
  });
  return message;
};

function total() {
  let prices = cart.map(obj => obj.itemPrice);
  const reducer = (sum, value) => sum + value;
  return prices.reduce(reducer);
};

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
