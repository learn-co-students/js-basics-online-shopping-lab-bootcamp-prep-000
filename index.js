var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = `${item}`
  var itemPrice = Math.floor(Math.random() * 100)
  var itemandprice = {[itemName]: parseInt(itemPrice)}
  cart.push(itemandprice)
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var itemlist = [];
  var itemprice = [];
  var string2 = [];
  var string = `In your cart, you have`
  for (var i = 0; cart.length > i; i++){
  itemlist.push(`${Object.keys(cart[i])}`);
  itemprice.push(`${cart[i][itemlist[i]]}`)
  string2.push(`${itemlist[i]} at $${itemprice[i]}`)
}
  if (cart.length === 0){
  return console.log(`Your shopping cart is empty.`)
} else if (cart.length === 1){
  return console.log (`${string} ${string2}.`)
} else if (cart.length === 2){
    string2.splice(-1, 0, `and`)
    return console.log(`${string} ${string2.join(` `)}.`)
} else (cart.length >= 3)
    var lastitem = string2.slice(-1);
    string2.splice(-1, 1, `and ${lastitem}`)
    return console.log(`${string} ${string2.join(`, `)}.`)
}

function total(){
  var total = 0
  for (var i = 0; cart.length > i; i++){
      total += cart[i][Object.keys(cart[i])];
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; cart.length > i; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i, 1)
      return cart;
    }
  }
    console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  if (!cardNumber){
  console.log("Sorry, we don't have a credit card on file for you.")
  } else {
     console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
     cart = []
   }
}
