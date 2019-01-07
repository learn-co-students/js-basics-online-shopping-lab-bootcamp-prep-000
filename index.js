var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let itemToAdd = {itemName: item, itemPrice: Math.floor(Math.random() * 100 + 1)}
 cart.push(itemToAdd)
  return `${item} has been added to your cart.`
}


function viewCart() {
  // write your code here
  if(cart.length === 0){
    return "Your shopping cart is empty."
  }else{
    var str = "In your cart, you have "
    for(let i = 0; i < cart.length; i++){
      str += `${cart[i].itemName} at $${cart[i].itemPrice}`
      if(i != cart.length - 1){
        str += ", "
        if(i+1 === cart.length-1){
          str += "and "
        }
      }else{
        str += "."
      }
      
    }
    return str
  }
}

function total() {
  // write your code here
  var sum = 0;
  for(let i = 0; i<cart.length;i++){
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {
  // write your code here
  var present = false;
  var position = -1;
  for(let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      present = true;
      position = i;
      break;
    }
  }
  if(!present){
    return "That item is not in your cart."
  }else{
    cart = [...cart.splice(0,position), ...cart.splice(position)]
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  }else{
    var sum = total()
    do{
      cart.pop()
    }while(cart.length !== 0)
    return `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  }
}

