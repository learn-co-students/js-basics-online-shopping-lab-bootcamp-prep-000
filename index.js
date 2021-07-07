var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor((Math.random()*100)+1)
 var obj = {[item]: price}
 cart.push(obj)
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  let l = cart.length
  
  if (l === 0) {
    console.log("Your shopping cart is empty.");
    return
  }
  
    let itemList = []
  
      for(let i = 0; i < l; i++){
        let items = cart[i]
        let value = Object.keys(items)
        let price = items[value]
      
          itemList.push(`${value} at $${price}`)
          
        }
      if (itemList.length === 1) {
      
      } else if (itemList.length === 2) {
        
          itemList = itemList.join(" and ")
      
        }
        else if (itemList.length > 2) {
           itemList[l-1] = "and ".concat(itemList[l-1])
           itemList = itemList.join(", ")
        }
        
      console.log(`In your cart, you have ${itemList}.`)
}

function total() {
  let l = cart.length
  var cartTotal = 0
  for(let i = 0; i < l; i++) {
      let items = cart[i]
      let value = Object.keys(items)
      let price = items[value]
      
     cartTotal += price
  }
  return cartTotal
}

function removeFromCart(item) {
  let newItem = false
  var l = cart.length
  for(let i = 0; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      newItem = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
      l--
    }
  }
  if (newItem !== null) {
      console.log("That item is not in your cart.")
    }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
    return false
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    
  cart = []
  
}
