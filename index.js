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
 var min = Math.ceil(1)
 var max = Math.floor(100)
 var price = Math.floor(Math.random() * (max - min + 1)) + min
cart.push(Object.assign({},  { [item]:price }) )
console.log(item + " has been added to your cart.")
return cart;
}

function viewCart() {
  // write your code here
  var arrayLen = cart.length
  if(arrayLen ===0)
  {
    console.log("Your shopping cart is empty.")
  }
  else
  {
    var str = "In your cart, you have "
      for(var i = 0; i <cart.length; i++)
      {
        var itemName = Object.keys(cart[i])[0]
        var itemPrice = cart[i][itemName]
        if(arrayLen===1)
          {
            str += itemName+" at $"+ itemPrice +"."
          }
          else if(cart.length===2)
          {
           str += itemName+" at $"+ itemPrice +" and "
          }
          else if(arrayLen==2 )
          {
            str += itemName+" at $"+ itemPrice +", and "
          }
          else if(arrayLen>2)
          {
            str += itemName+" at $"+ itemPrice +", "
          }
          --arrayLen
        }
        console.log(str)
      }
    }

function total() {
  // write your code here
  var sum =0;
  for(var i =0; i<cart.length;i++)
  {
    var itemName = Object.keys(cart[i])[0]
    var itemPrice = cart[i][itemName]
    sum += itemPrice
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  for(var i =0; i<cart.length; i++)
  {
    var object = cart[i]
    var firstItem = Object.keys(object)[0]
    if(object.hasOwnProperty(item))
    {
      cart.splice(i, 1)
      return cart
    }
}
//if(cart.length=== 0)
console.log("That item is not in your cart.")
return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber)
  {
    console.log("Sorry, we don\'t have a credit card on file for you.")
  }
  else
  {
    var totalCost = total()
    console.log('Your total cost is $'+totalCost+', which will be charged to the card '+cardNumber+'.')
    cart=[];
  }
}
