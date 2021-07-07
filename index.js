var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var newitem = {itemName:`${item}`}
 newitem.itemPrice = Math.floor(Math.random()*100)
 cart.push(newitem)
 return `${cart[cart.length-1].itemName} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }
  else {
    var report = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
    for (let i = 1; i<cart.length; i++){
      if (i === cart.length - 1){
        report = report + `, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}`
      }
      else{
        report = report + `, ${cart[i].itemName} at $${cart[i].itemPrice}`
      }
    }
    report = report + "."
    return report
  }
}

function total() {
  var totalcost = 0
  for (let i = 0; i<cart.length; i++){
    totalcost = totalcost + parseInt(cart[i].itemPrice)
  }
  return totalcost
}

function removeFromCart(item) {
  for (let i = 0; i<cart.length;i++){
    if (cart[i].itemName === item){
      cart = [...cart.slice(0,i),...cart.slice(i+1,cart.length)]
      return cart    
      }
    }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  if (!cardNumber){
    return "Sorry, we don't have a credit card on file for you."
  }
  else{
  var totalcost = total()
  cart = []
  return `Your total cost is $${totalcost}, which will be charged to the card ${cardNumber}.`
  }
}
