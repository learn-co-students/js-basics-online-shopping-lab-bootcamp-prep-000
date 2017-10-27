var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var meals = {[item]:Math.floor((Math.random() * 100) + 1)};
cart.push(meals);
console.log(`${[item]} has been added to your cart.`);
return cart
}

function viewCart() {
  var contents = []
  if (cart.length === 0){
    return console.log (`Your shopping cart is empty.`)
   }  else {
      for (let i=0; i < cart.length; i++) {
        var item = cart[i] // => {mango: 12, orange: 14}
        var itemName = Object.keys(item)[0] // 'mango'
        var itemPrice = item[itemName] // 12
        contents.push(` ${itemName} at $${itemPrice}`)
      }
    //content ['mango at 12', 'orange at 15']
        if (cart.length === 1){
          console.log (`In your cart, you have` + contents[0] + `.`)
        } else if (cart.length === 2){
          console.log (`In your cart, you have` + contents[0] + ` and` + contents[1] + `.`)
        } else {
          var start = contents.slice(0, -1)
          var ending = contents.slice(-1)
          console.log (`In your cart, you have` + start.join(',') + `, and` + ending + `.`)
        }
      }
}
function total() {
  var totalPrice = 0;

  for (let i=0; i < cart.length; i++) {
    var item = cart[i]; // => {mango: 12, orange: 14}
    var itemName = Object.keys(item)[0]; // 'mango'
    var itemPrice = item[itemName]; // 12

    totalPrice += parseInt(itemPrice);
  }
    return totalPrice
}

function removeFromCart(item) {

  for (let i=0; i < cart.length; i++) {
    var itemName = cart[i] // {mango: 20}

    if (itemName.hasOwnProperty(item)){
      cart.splice(i, 1)
      return cart
    }
  }
  console.log (`That item is not in your cart.`)
  return  cart
}


function placeOrder(cardNumber) {
  var cartTotal = total()

  if (cardNumber){
  console.log (`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
  cart = []
  return cart
  } else {
    console.log (`Sorry, we don't have a credit card on file for you.`)
  }
cart = []
return cart
}
