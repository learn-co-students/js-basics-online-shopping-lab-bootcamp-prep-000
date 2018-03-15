var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

let addToCart = (item) => {
  cart.push( {itemName: item, itemPrice: Math.floor( Math.random() * 100 ) + 1} );
  return `${item} has been added to your cart.`;
}


let viewCart = () => {

  if (cart.length === 0) {
    return "Your shopping cart is empty.";
  }

  let allItems = `In your cart, you have `;

  for(let item of cart) {

    if (cart.length > 1 && item === cart[cart.length - 1]) {
      allItems += `and ${item.itemName} at $${item.itemPrice}.`;
      return allItems;
    }

    allItems += `${item.itemName} at $${item.itemPrice}, `;
  }

  return allItems.slice(0, -2) + ".";
}


let total = () => {
  let totalCost = 0;
  cart.forEach( (item) => {
    totalCost += item.itemPrice;
  });
  return totalCost;
}


let removeFromCart = (item) => {

  for (let i = 0; i < cart.length; i++) {

    if (cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }

  }
  return "That item is not in your cart.";
}


let placeOrder = (cardNum) => {

  if (!cardNum) {
    return "Sorry, we don't have a credit card on file for you."
  }

  let finalMessage = `Your total cost is $${total()}, which will be charged to the card ${cardNum}.`
  cart = [];
  return finalMessage;

}
