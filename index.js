let cart = [];

function addToCart(item) {
  let newItem = {
    itemName: item,
    itemPrice: Math.floor(Math.random(100) + 1),
  };
  
  cart.push(newItem);
  return `${itemName} has been added to your cart`;
}

function viewCart() {
  
  if(cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at ${cart[0].itemPrice}`;
  } else if (cart.length === 2) {
    return `In your cart you have ${cart[0].itemName} at ${cart[0].itemPrice},  and ${cart[1].itemName} at ${cart[1].itemName}.`;
  } else if (cart.length <= 3) {
    let totalReturn = '';
      for(let i = 0; i < array.length; i++) {
        if(i < (array.length -1)) {
          
        }
  }
  }
}