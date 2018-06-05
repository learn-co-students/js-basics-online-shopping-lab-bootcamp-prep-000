var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newItemObj = {
   itemName: item,
   itemPrice: Math.floor(Math.random()*100)
 };
 cart.push(newItemObj);
 return `${newItemObj.itemName} has been added to your cart.`
}


function viewCart() {
  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
  }
  
  let inYourCart = `In your cart, you have `;
  
  if (cart.length === 1) {
    return inYourCart += `${Object.values(cart[0])[0]} at $${Object.values(cart[0])[1]}.`
  } else if (cart.length === 2) {
    return inYourCart += `${Object.values(cart[0])[0]} at $${Object.values(cart[0])[1]}, and ${Object.values(cart[1])[0]} at $${Object.values(cart[1])[1]}.`
  } else if (cart.length > 2) {
    for (let i = 0; i < cart.length; i++) {
      let currentItem = cart[i];
      let nameItem = currentItem.itemName;
      let priceItem = currentItem.itemPrice;

      if (i < cart.length - 1) {
        inYourCart += `${nameItem} at $${priceItem}, `
      } else if (i === (cart.length -1)) {
        inYourCart += `and ${nameItem} at $${priceItem}.`
      }
    }
  }
  return inYourCart;
}


function total() {
  let sumOfCart = 0;

    for (let i = 0; i < cart.length; i++) {
      let currentItem = cart[i];
      let priceItem = currentItem.itemPrice;
      sumOfCart += priceItem;
    }

  return sumOfCart;
}


function removeFromCart(item) {

  for (let i = 0; i < cart.length; i++) {
    let currentItem = cart[i];
    let nameItem = currentItem.itemName

    if (nameItem === item) {
      cart.splice(i, 1);
      return cart;
    }
  }

  return `That item is not in your cart.`
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return `Sorry, we don't have a credit card on file for you.`
  }
  
  let order = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  cart = [];
  return order;
}