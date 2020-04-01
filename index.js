var cart = []

// var cart = [{itemName: "pencil", itemPrice: 53},{itemName: "cash", itemPrice: 24}, {itemName: "dust", itemPrice: 56} ];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price =  Math.floor(Math.random() * (100 * 1) + 1)
 cart.push(Object.assign({},{itemName: item, itemPrice: price}))
 return `${item} has been added to your cart.`
// console.log(viewCart())
// console.log(total())
 return cart 
}

// console.log(addToCart("pencil"))
// console.log(addToCart("car"))
// console.log(addToCart("bed"))

function viewCart() {
  var group = ""
  if(cart.length > 1){
  for (var i = 0; i < cart.length-1; i++){
    group = group + `${cart[i].itemName} at $${cart[i].itemPrice}, `
  }
  return `In your cart, you have ${group}and ${cart[i].itemName} at $${cart[i].itemPrice}.`
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else {
    return "Your shopping cart is empty."
  }
}

// console.log(viewCart())

function total() {
  var add = 0
  for (let i = 0; i < cart.length; i++){
    add = add + cart[i].itemPrice
  }
  return add
}



function removeFromCart(item) {
  var removedItem = ""
  for (let i = 0; i < cart.length; i++){
    if (item === cart[i].itemName){
      removedItem =+ cart.splice(i,1)
      return cart
    } 
  }
  if (removedItem === ""){
    return"That item is not in your cart."
  } else {
    return cart
  }
}

// console.log(removeFromCart("cash"))

function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  } else if (typeof cardNumber === 'number'){
    var tot = total()
    cart = []
    return `Your total cost is $${[tot]}, which will be charged to the card ${cardNumber}.`
  }
}

// console.log(placeOrder(33334434))
// console.log(total())
