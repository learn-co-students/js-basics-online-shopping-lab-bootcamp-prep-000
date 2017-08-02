var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getPrice(){
  return Math.floor(((Math.random()*100)+1))
}

function addToCart(item) {
 //writing my code here
 let price = getPrice()
 let new_item = new Object({[item]: price})
 cart.push(new_item)
 let cout = `${item} has been added to your cart.`
 console.log(cout)
 return cart
 }

function viewCart() {
  // write your code here
  if (cart.length < 1)
  {
    console.log("Your shopping cart is empty.")
  }
  else {
    let item = ""
    let in_cart = "In your cart, you have "    
    const size = cart.length
    for(let i=0;i<size;i++)
    {
      item = Object.keys(cart[i])
      in_cart += `${item} at $${cart[i][item]}`
      if(size==2&&i!=size-1)
      {
        in_cart += " and "
      }
      if(size>2)
      {
        if(i==size-2)
        {
          in_cart += ", and "
        }
        if(i<size-2)
        {
          in_cart += ", "
        }
      }    
  }
  in_cart += "."
  console.log(in_cart)
}
}

function total() {
  // write your code here
  var cost = 0
  for (let i=0;i<cart.length;i++)
  {
    let item = Object.keys(cart[i])
    cost += cart[i][item]
  }
  return cost
}

function removeFromCart(item) {
  // write your code here
  for(let i=0;i<cart.length;i++)
  {
    
    if(item == Object.keys(cart[i]))
    {
      cart.splice(i,1)
      break;
    }
  }
  console.log("That item is not in your cart.")
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber)
  {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  else {
  let sum = total()
  var cout = `Your total cost is $${sum}, which will be charged to the card ${cardNumber}.`
  console.log(cout)
  cart.splice(0,cart.length)
  }
}
