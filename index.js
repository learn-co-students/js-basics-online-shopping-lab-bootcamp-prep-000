var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item
  var itemPrice = Math.floor(Math.random()*100)+1
  item = new Object ({[itemName]: itemPrice});
  cart.push(item)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  var line = `In your cart, you have `
  var items = []
  for (var i = 0; i < cart.length; i++) {
    var object = cart[i]
    var item = Object.keys(cart[i])
    var price = object[item]
    items.push(`${item} at $${price}`)
  }
// ['{apple: 15}']
  if (cart.length == 1){
    line = line + items[0] + "."
      console.log(line)
      return cart
    }
    if (cart.length == 2){
        line = `${line}${items[0]} and ${items[1]}.`
        console.log(line)
        return cart
  }
    if (cart.length == 3){
        line = `${line}${items[0]}, ${items[1]}, and ${items[2]}.`
        console.log(line)
        return cart
  }
    if (cart.length == 4){
        line = `${line}${items[0]}, ${items[1]}, ${items[2]}, and ${items[3]}.`
        console.log(line)
        return cart
}else{
    console.log(`Your shopping cart is empty.`)
      return cart
}
}

function total() {
  var sum=0
  var prices = []
  for (var i = 0; i < cart.length; i++) {
    var object = cart[i]
    var item = Object.keys(cart[i])
    var price = object[item]
    prices.push(price)
  }
  for (var n = 0; n < cart.length; n++) {
    if(!isNaN(prices[n]))
    sum = sum + prices[n];{
    }
  }
return sum;
}


function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){
    console.log(cart[i])
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1)
      return cart
    }
  }
  console.log(`That item is not in your cart.`)
  return cart
}
  // write your code here will need a splice



function placeOrder(cardNumber) {
  var card = cardNumber
  if (Number.isInteger(cardNumber)) {
    var totalcost = total(cart);
    var line = `Your total cost is $${totalcost}, which will be charged to the card ${card}.`
  }else{
    line = `Sorry, we don\'t have a credit card on file for you.`
}
  cart = []
  console.log(line)
  return cart
}
