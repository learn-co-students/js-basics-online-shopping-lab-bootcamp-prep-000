var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {itemName: (item),
                   itemPrice: (Math.floor(Math.random() * 100) + 1)};
	cart.push(newItem)
  return(`${item} has been added to your cart.`)
}

function viewCart() {
  if (cart.length === 0){
    return("Your shopping cart is empty.")
  }else {
    var the_cart = "In your cart, you have "
    for (let i = 0; i < cart.length; i++){
      if (cart.length === 1) {
        var next_item = `${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
      else if (i === cart.length - 1) {
        var next_item = `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }else{
        var next_item = `${cart[i].itemName} at $${cart[i].itemPrice}, `
      }
      the_cart = the_cart + next_item
    }
  return the_cart
  }
}

function total() {
  var total = 0
  for (let i = 0; i < cart.length; i++){
    var price = cart[i].itemPrice
    total = total + price
  }
  return total
}

function removeFromCart(item) {
  var returned = "That item is not in your cart."
  for (var i = 0; i < cart.length; i++) {
    if (item === cart[i].itemName) {
      cart.splice(i, 1);
    }else {
      returned = "That item is not in your cart."
    }
  }
  return returned
}

function placeOrder(cardNumber) {
  var sum_statement = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  if (cardNumber === undefined) {
        return("Sorry, we don't have a credit card on file for you.")
  }else {
    sum_statement = (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
    cart.length = 0
    return sum_statement
  }
}
