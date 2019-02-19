var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newPrice = Math.floor(Math.random() * 101);
  var newObj = {  itemName: item,
                  itemPrice: newPrice  }
                    
  cart.push(newObj)
  //console.log(cart)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
    return "Your shopping cart is empty."
  }
  
  else
  {
    var sentence = "In your cart, you have"
    
    for (var i = 0; i < cart.length; i++)
    {
      if(cart.length > 1 && i + 1 === cart.length)
      {
        sentence = `${sentence} and`
      }
    sentence = `${sentence} ${cart[i].itemName} at $${cart[i].itemPrice},`
    }
    
    return `${sentence.slice(0, -1)}.`
  }
}

function total() {
  var tally = 0
  for (var i = 0; i < cart.length; i++)
  {
    tally += cart[i].itemPrice
  }
  return tally
}

function removeFromCart(item) {
  var id = 0
  for (var i = 0; i < cart.length; i++)
  {
    if (cart[i].itemName === item)
    {
      id = i
    }
  }
  
  if (id !== 0)
  {
    cart.splice(id, 1)
    return cart
  }
  else
  {
    return `That item is not in your cart.`
  }
  
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined)
  {
    return `Sorry, we don't have a credit card on file for you.`
  }
  else
  {
    var a = total()
    cart = []
  
    return `Your total cost is $${a}, which will be charged to the card ${cardNumber}.`
  }
}

addToCart("Apples")
console.log(total())
console.log(placeOrder(123))