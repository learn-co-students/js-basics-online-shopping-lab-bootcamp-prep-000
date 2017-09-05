var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var obj = {[item]:Math.floor(Math.random()*100)}
 cart.push(obj)
console.log(`${item} has been added to your cart.`)
return cart
}

function viewCart() {
  // write your code here
  var curobj = {}
  var keyarr = []
  var key = ""
  var logstring = ``

  if(cart.length===0)
  {
    console.log("Your shopping cart is empty.")
  }
  else if (cart.length===1) {

    curobj=cart[0]
    keyarr = Object.keys(curobj)
    key = keyarr[0]
    console.log(`In your cart, you have ${key} at $${curobj[key]}.`)

  }
  else if (cart.length===2)
  {
    for(var i = 0; i<cart.length; i++)
    {
      curobj=cart[i]
      keyarr = Object.keys(curobj)
      key = keyarr[0]


      if(i<cart.length-1)
      {
      logstring += `${key} at $${curobj[key]} `
      }
      else {
      logstring = logstring + `and ${key} at $${curobj[key]}`
      }

    }

    console.log(`In your cart, you have ${logstring}.`)
  }
  else {
    for(var i = 0; i<cart.length; i++)
    {
      curobj=cart[i]
      keyarr = Object.keys(curobj)
      key = keyarr[0]

      if(i<cart.length-1)
      {
      logstring += `${key} at $${curobj[key]}, `
      }
      else {
      logstring = logstring + `and ${key} at $${curobj[key]}`
      }
    }

    console.log(`In your cart, you have ${logstring}.`)
  }
}

function total() {
  // write your code here
  var sum = 0
  var curobj = {}
  var keyarr = []
  var key = ""
  var curprice = 0

  for(var i = 0; i<cart.length; i++)
  {
    curobj = cart[i]
    keyarr = Object.keys(curobj)
    key = keyarr[0]
    sum += parseInt(curobj[key])

  }
  return sum
}

function removeFromCart(item) {
    // write your code here

var itemInCart=false

 for (let i = 0 ; i < cart.length ; i++)
 {
   if (cart[i].hasOwnProperty(item))
   {
     itemInCart = true;
     cart = cart.slice(0, i).concat(cart.slice(i + 1));
     //l--;
   }
 }

 if (!itemInCart) {
   console.log("That item is not in your cart.");
 }

 return cart;
    }



function placeOrder(cardNumber) {
  // write your code here
var cardnum = cardNumber
var tot= total()
if (cardNumber > 0 && Number.isInteger(cardNumber))
{
  console.log(`Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`)
  cart=[]
}
else {
  console.log("Sorry, we don't have a credit card on file for you.")
}

}
