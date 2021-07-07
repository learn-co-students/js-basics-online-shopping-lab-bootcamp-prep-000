var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {}
  newItem['itemName'] = item;
  newItem['itemPrice'] = Math.floor(Math.random() * Math.floor(100));
  cart.push(newItem)
  return `${item} has been added to your cart.`
 
}

function viewCart() {
  if (cart.length === 1) {
    return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}.`
  }
  else if (cart.length === 2) {
    return `In your cart, you have ${cart[0]["itemName"]} at $${cart[0]["itemPrice"]}, and ${cart[1]["itemName"]} at $${cart[1]["itemPrice"]}.`
  }
  else if (cart.length > 2) {
    let newStr = "In your cart, you have "
    for (let i=0;i<cart.length-1; i++) {
      newStr+= `${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}, `
    }
    newStr+= `and ${cart[cart.length-1]["itemName"]} at $${cart[cart.length-1]["itemPrice"]}.`
    return newStr
  }
  else {
    return "Your shopping cart is empty."
  }
}

function total() {
  let newTotal = 0;
  if (cart.length > 0) {
   for (let i=0; i<cart.length; i++) {
     newTotal += cart[i]["itemPrice"]
   }
  return newTotal 
 } else {
   return "$0"
 }
}

function removeFromCart(item) {
    let testArr = []
    for (let i=0; i<cart.length; i++) {
      if (item === cart[i]["itemName"]){
        testArr.push(item);
        cart.splice(i,1);
      }
      }       
      if (testArr.length === 1) {
        return `You have removed ${testArr[0]} from your cart`
    }
    else {
        return "That item is not in your cart."
    }
  } 

function placeOrder(cardNumber) {
  let newTotal = total();
  if (cardNumber) {
    cart = [];
    return `Your total cost is $${newTotal}, which will be charged to the card ${cardNumber}.`
  }else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
