var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let newItem = {
    itemName: `${item}`,
    itemPrice: getRandomPrice(), //<-----Oxford Comma!!
  };
  cart.push(newItem);
  return `${newItem.itemName} has been added to your cart.`;
}

function getRandomPrice(){
  let min = 1, max = 100;
  return (Math.floor(Math.random() * (max - min + 1) + min));
}

function viewCart() {
  let msg = "In your cart, you have";
  
  if (cart.length === 1){ //If my cart has only 1 item
    msg += (` ${cart[0].itemName} at $${cart[0].itemPrice}.`);
  }
  
  else if(cart.length > 0){ //If my cart is not empty
    for(var i = 0; i < cart.length; i++){
      if (i == cart.length - 1){ //If this is the last element
        msg += (` and ${cart[i].itemName} at $${cart[i].itemPrice}.`);
      }
      else{ //Otherwise for any other element
        msg += (` ${cart[i].itemName} at $${cart[i].itemPrice},`);
      }
    }
  }
  
  else{ //Otherwise, my cart is empty
    msg = "Your shopping cart is empty.";
  }
  
  return msg;
}

function total() {
  let runningTotal = 0;
  cart.forEach(function(item){
    runningTotal += parseInt(item.itemPrice);
  });
  return runningTotal;
}

function removeFromCart(item) {
  let thisItemIndex = cart.findIndex(x => x.itemName == item);
  if (thisItemIndex < 0){ //Couldn't find this item
    return "That item is not in your cart.";
  }
  else{ //Found the item
    console.log(`Item removed from cart: ${cart.splice(thisItemIndex, 1).itemName}`);
    return cart;
  }
}

function placeOrder(cardNumber) {
  if (cardNumber){ //If cardNumber is NOT empty
    let msg = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart = new Array();
    return msg;
  }
  else{ //Otherwise cardNumber is empty
    return "Sorry, we don't have a credit card on file for you.";
  }
}
