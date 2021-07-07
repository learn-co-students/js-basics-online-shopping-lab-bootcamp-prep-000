var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100);
  var newObject = {itemName: item, itemPrice: price};
  
  cart.push(newObject);
  
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var cartContents = `In your cart, you have `;

  if (cart.length === 0) {
    return `Your shopping cart is empty.`;
    }

    else if (cart.length === 1) {
      let accessItem = cart[0].itemName;
      let accessPrice = cart[0].itemPrice;

      return cartContents.concat(`${accessItem} at $${accessPrice}.`)
    }

    else if (cart.length >= 2) {
      var contentsArray = [];

      for ( let i = 0; i < cart.length; i++ ) {
        let accessItem = cart[i].itemName;
        let accessPrice = cart[i].itemPrice;

        contentsArray.push(`${accessItem} at $${accessPrice}`);
      }
      
      return cartContents.concat(`${contentsArray.slice(0, -1).join(', ')}, and ${contentsArray.slice(-1)}.`);
    }
}

function total() {
  var itemTotal = 0;
  for ( let i = 0; i < cart.length; i++ ) {
    let accessPrice = cart[i].itemPrice; 
    itemTotal += accessPrice; 
  }
  return itemTotal;
}

function removeFromCart(item) {
  for ( let i = 0; i < cart.length; i++ ) {
    if (cart[i].itemName === item) {
      cart.splice(i, 1)
      return cart;
      }
    }
  return `That item is not in your cart.`;
}  


function placeOrder(cardNumber) {
  if (arguments.length === 0) {
    return `Sorry, we don't have a credit card on file for you.`;
  }

  var orderTotal = total();
  cart = [];
  return `Your total cost is $${orderTotal}, which will be charged to the card ${cardNumber}.`
}