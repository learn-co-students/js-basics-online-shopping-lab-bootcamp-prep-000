var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random() * 100 + 1);
  let newItem = {itemName: item, itemPrice: price};
  
  cart.push(newItem);
  console.log(cart);
  
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let cartIntro = 'In your cart, you have';
  
    if (!cart.length) {
      return 'Your shopping cart is empty.';
    } else if (cart.length === 1) {
        return `${cartIntro} ${cart[0].itemName} at $${cart[0].itemPrice}.`;
      } else if (cart.length === 2) {
      return `${cartIntro} ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
      } else {
        let cartList = [];
        let lastItem = cart[cart.length - 1];
        for (let i = 0; i < cart.length -1; i++) {
          cartList.push(` ${cart[i].itemName} at $${cart[i].itemPrice}` );
          } 
        return `${cartIntro}${cartList}, and ${lastItem.itemName} at $${lastItem.itemPrice}.`;
      
        }
  
}

function total() {
  let total = 0;
  for (let i = 0; i < cart.length; i++ ) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if(!cardNumber) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    let cost = total() ;
    
    cart = [];
    
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`;
  }
}
