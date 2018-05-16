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
    let totalReturn = 'In your cart, you have';
    
    for(let i = 0; i < array.length; i++) {
      if(i < (array.length - 1)) {
        totalReturn += ` ${cart[i].itemName} at ${cart[i].itemPrice},`;
      }
      else if (i === array.length - 1) {
        totalReturn += ` and ${cart[i].itemName} at ${cart[i].itemPrice}.`;
      }
    }
    return totalReturn;
  }
}

function total() {
  let sumTotal = 0;
  
  for(let i = 0; i < cart.length; i++) {
    sumTotal += cart[i].itemPrice;
  }
}

function removeFromCart(item) {
  
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i, 1);
    }
    else if (i === array.length - 1 && cart[i] !== cart[cart.length - 1]) {
      return "That item is not in your cart.";
    }
  }
}
