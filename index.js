var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.random() * 100
var whatever = new Object ({ 
  itemName: item,
  itemPrice: price
})
cart.push(whatever)
return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
    return `Your shopping cart is empty.`
  } else if (cart.length === 1) {
  return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
} else if (cart.length === 2) {
  var array = []
  for (let i = 0; i < cart.length; i++){
    array.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
  } 
    return `In your cart, you have ${array.join(", and ")}.`
} else {  
var otherArray = []
  for (let i = 0; i < cart.length; i++){
    if (i === cart.length - 1){
      otherArray.push(`and ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
    } else {
    otherArray.push(`${getCart()[i].itemName} at $${getCart()[i].itemPrice}`)
}    
} 
} return `In your cart, you have ${otherArray.join(", ")}.`
}

function total() {
var x = 0
for (let i = 0; i < cart.length; i++){
  x = x + getCart()[i].itemPrice
}
return x
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++){
  if (item === cart[i].itemName){
    cart.splice(i, 1)
    return cart
  } 
  } return `That item is not in your cart.`
}

function placeOrder(cardNumber) {
if (cardNumber === undefined){
  return `Sorry, we don't have a credit card on file for you.`
} else {
  var fullCart = total();
  cart = []
  return `Your total cost is $${fullCart}, which will be charged to the card ${cardNumber}.`
}
}