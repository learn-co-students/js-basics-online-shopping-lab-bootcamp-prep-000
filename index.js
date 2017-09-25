var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  var itemPrice = {[item]: price}
  cart.push(itemPrice)
  console.log(`${item} has been added to your cart.`)
  return cart

 // write your code here
}

function viewCart() {
  // check if the cart is empty
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
    return; // which exits the function
  }

  var newArray = []
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i]; // item will equal an object: example {orange: 31}
    var itemName = Object.keys(item)[0]// 'orange'
    var price = item[itemName]
    // itemName at $price
    newArray.push(`${itemName} at $${price}`)
  }

  if (cart.length === 1){
    console.log(`In your cart, you have ${newArray}.`)
  } else if (cart.length === 2) {
    console.log(`In your cart, you have ${newArray.join(" and ")}.`)
  } else{
    newArray[newArray.length - 1] = `and ${newArray[newArray.length - 1]}`
    console.log(`In your cart, you have ${newArray.join(", ")}.`)
  }
}
function total() {

  var i = 0
  var totalCost = 0

  for (let i = 0; i < cart.length; i++){
    var item = cart[i]; // item will equal an object: example {orange: 31}
    var itemName = Object.keys(item)[0]// 'orange'
    var price = item[itemName]
    // itemName at $price
    totalCost += price
  }
  return  totalCost
  // write your code here
}


function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) {
    var x = cart[i];

  if (x.hasOwnProperty(item)){
      cart.splice(i, 1)
      return cart

    }


    // itemName at $price
  }
  console.log('That item is not in your cart.')
  // write your code here
}

function placeOrder(cardNumber) {
    if (cardNumber == undefined){
      console.log("Sorry, we don't have a credit card on file for you.")
      return false;
    }


        console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
        cart =[]
        return cart







  }

  // write your code here


  //write your code here
