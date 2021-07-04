var cart = [ { itemName:"bananas", itemPrice: 17 }, { itemName:"pancake batter",itemPrice: 5 }, { itemName:"eggs", itemPrice: 49 }];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let price = Math.floor(Math.random() * 100) + 1;
 var itemWithPrice = {itemName: item,
                      itemPrice: price
                      };
  cart.push(itemWithPrice);
  return `${item} has been added to your cart.`;
  
}

function viewCart() {
  if(cart === undefined || cart.length === 0) {
    return "Your shopping cart is empty."
  }else if(cart.length === 1){
    return `In your cart, you have ${cart[0]['itemName']} at $${cart[0]['itemPrice']}.`;
  }else {
    let content = "In your cart, you have";
    for(let i = 0; i < cart.length; i++){
      if(i === cart.length-1){
        content += ` and ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`;
      }else {
        content += ` ${cart[i]['itemName']} at $${cart[i]['itemPrice']},`;
      }
    }
    return content;
  }
}

function total() {
  let total = 0;
  for(var i of cart){
    total += parseInt(i['itemPrice']);
  }
  return total;
}

function removeFromCart(item) {
  let index = -1;
  for(let i=0; i < cart.length; i++){
    if (cart[i]['itemName'] === item){
      index = i;
      break;
    }
  }
  if(index < 0){
    return "That item is not in your cart.";
  }else {
    return cart.splice(index,1);
  }
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    return `Sorry, we don't have a credit card on file for you.`;
  }else {
    var cartTotal = total();
    cart = [];
    return `Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`; 
  }
}


