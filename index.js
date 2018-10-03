var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


//ADD TO CART FUNCTION!!

function addToCart(item) {
 let price = Math.floor(Math.random() * 100) + 1  
 let i = cart.length
 let nameAndPrice = {itemName: item,
                     itemPrice: price} 
cart.push(nameAndPrice)
return `${cart[i].itemName} has been added to your cart.`
}

//VIEW CART FUNCTION


function viewCart() {

let currentCart = []  
  
let str = "In your cart, you have "; 
    if (!cart.length) {
    return ("Your shopping cart is empty.")
  }
  
  
  else if (cart.length===1) {
     for (let i=0; i<cart.length; i++)
      currentCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
      return (str) + (currentCart) + (".")
  }
      else if (cart.length===2) {
     for (let i=0; i<cart.length; i++)
      currentCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
      return (str) + (currentCart.join(", and "))  + (".")
     }
   else { for (let i=0; i<cart.length; i++)
      currentCart.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
      let lastItem = currentCart.pop()
      return (str) + (currentCart.join(", ")) + (", and ") + (lastItem) + (".")
     }
}

//TOTAL FUNTION

   function total() {

var currentCart=[]
     for (let i=0; i<cart.length; i++)
      currentCart.push(cart[i].itemPrice)
function getSum(total, num) {
    return total + num;}
return currentCart.reduce(getSum)
     }


//REMOVE FROM CART


function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++) 
    if (cart[i].itemName==item) {
      cart.splice(i, 1);
      return cart;}
  {return ("That item is not in your cart.")}
}


// PLACE ORDER 

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return ("Sorry, we don't have a credit card on file for you.")
  }
  else {
let totalCost = total()
cart = []
   return ("Your total cost is $" + totalCost +`, which will be charged to the card ${cardNumber}.`)
  }
  
}


