var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


  

function addToCart(item) {
  
  let newItem = { itemName: item, itemPrice: (Math.floor(Math.random() * (100 - 1 + 1)) + 1) };
  
  getCart().push(newItem);
  
  return `${newItem.itemName} has been added to your cart.`;
  
}

function viewCart() {
  
  if (getCart().length === 0) {
    
    return "Your shopping cart is empty.";
    
  }
  
  if (getCart().length === 1) {
    
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
  }
  
  if (getCart().length === 2) {
    
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`;
    
  }
  
  if (getCart().length > 2) {
  
    let currentCart = [];
    
    for (let i = 0; i < getCart().length; i++) {
      
      if (i < getCart().length - 1) {
        
        currentCart.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}, `);
        
      } else if (i === getCart().length - 1) {
        
        currentCart.push(`and ${getCart()[getCart().length - 1].itemName} at $${getCart()[getCart().length - 1].itemPrice}`);
      }
      
    }
    
    return `In your cart, you have ${currentCart.join('')}.`;
  }
  
}


function total() {
  
  let sum = 0;
  
  for (let i = 0; i < getCart().length; i++) {
    
    sum = sum + getCart()[i].itemPrice;

  }
  return sum;
}

function removeFromCart(item) {
  

  
  for (let i = 0; i < getCart().length; i++) {
    
    if (getCart()[i].itemName === item) {
      
      getCart().splice([i], 1);
    }
    
  }
  
  
  
  if (getCart().indexOf(item) === -1) {
    
    return "That item is not in your cart.";
 
  }
    
  
}

function placeOrder(cardNumber) {
  
  if (cardNumber) {
    
    let cardTotal = total();
    
    setCart([]);
    
    return `Your total cost is $${cardTotal}, which will be charged to the card ${cardNumber}.`;
    
  } else {
    
    return "Sorry, we don't have a credit card on file for you.";
    
  }
  
}
