var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getPrice() {
  return Math.floor(Math.random()*100)
}

function addToCart(item) {
  var newItem = {itemName: item, itemPrice: getPrice()}
  cart.push(newItem)
  return `${newItem.itemName} has been added to your cart.`

}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    var sentence = []
    for (var i = 0; i < cart.length; i++){
      var item = cart[i]
      if (i === 0 && cart.length === 1) {
        console.log("i is 0: ")
        sentence.push(`In your cart, you have ${item.itemName} at $${item.itemPrice}.`)
      } else if (i === 0){
        console.log("i is 0 and length is 1: ")
        sentence.push(`In your cart, you have ${item.itemName} at $${item.itemPrice}`)

      }  else if (i === cart.length-1) {
        console.log("i is 1 less than length: ")
        sentence.push(`, and ${item.itemName} at $${item.itemPrice}.`)
      } else {
        console.log("else: ")
        sentence.push(`, ${item.itemName} at $${item.itemPrice}`)
      }
    } return sentence.join("")
  }
}



function total() {
  var total = 0
  for (var i = 0; i < cart.length; i++){
    total = total + cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      console.log('item:',item)
      console.log('i:',i)
      console.log('cart[i].itemName:',cart[i].itemName)
      console.log('cart[i]:', cart[i])
      console.log(cart)
      cart.splice(i,1);
      console.log(cart)
      return cart
    }
  }
return 'That item is not in your cart.'
}

function test(){
  return 'b'
}

function placeOrder(cardNumber) {
  if (cardNumber !== undefined){
    var charged = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return charged
  } else {
    return ("Sorry, we don't have a credit card on file for you.")
  }
}
/*
    console.log('i:', i)
    console.log('cart length:', cart.length)

      console.log('cart before:', cart)
      cart.pop()
      console.log('cart before:', cart)
  */
