var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var newItem = {[itemName]: Math.floor(Math.random()*100)}
  cart.push(newItem)
  console.log(`${itemName} has been added to your cart.`)
  return cart
  }

  function viewCart() {
  var text = ["In your cart, you have "]

  if(Object.keys(cart).length === 0) {
      console.log("Your shopping cart is empty.");
      }
  else if(Object.keys(cart).length === 1) {
        text.push(`${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}.`);
        console.log(text.join(""));
      }
  else if(Object.keys(cart).length === 2) {
        for(var i = 0; i < Object.keys(cart).length; i++) {
        if(i === 0) {
        text.push(`${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}`)
         }
        else {
        text.push(` and ${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}.`);
         }
        }
        console.log(text.join(""))
      }
  else if(Object.keys(cart).length === 3) {
        for(var i = 0; i < Object.keys(cart).length; i++) {
        if(i === 0) {
        text.push(`${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}, `)
           }
        else if(i === 1) {
        text.push(`${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}, `);
          }
        else {
        text.push(`and ${Object.keys(cart[2])[0]} at $${cart[2][Object.keys(cart[2])[0]]}.`);
        }
      }
        console.log(text.join(""))
     }
   else {
       for(var i = 0; i < Object.keys(cart).length; i++) {
       if(i === 0) {
       text.push(`${Object.keys(cart[0])[0]} at $${cart[0][Object.keys(cart[0])[0]]}, `)
         }
       else if(i === 1) {
       text.push(`${Object.keys(cart[1])[0]} at $${cart[1][Object.keys(cart[1])[0]]}, `);
        }
       else if(i === 2) {
       text.push(`${Object.keys(cart[2])[0]} at $${cart[2][Object.keys(cart[2])[0]]}, `);
        }
       else {
       text.push(`and ${Object.keys(cart[3])[0]} at $${cart[3][Object.keys(cart[3])[0]]}.`);
         }
        }
       console.log(text.join(""))
      }
  }

function total() {
  var totalCost = 0
for(var i = 0; i < cart.length; i++) {
  var itemCost = cart[i][Object.keys(cart[i])[0]]
totalCost += itemCost
}
return totalCost
}

function removeFromCart(item) {
  for (var i =0; i < Object.keys(cart).length; i++) {
     if (cart[i].hasOwnProperty(item)) {
       cart = cart.slice(0, i).concat(cart.slice(i + 1))
     }
   }
   if (cart.hasOwnProperty(item) === false) {
  console.log(`That item is not in your cart.`)
}
return cart 
}
  
function placeOrder(cardNumber) {
  const cartTotal = total();
  if (cardNumber === undefined) {
     console.log(`Sorry, we don't have a credit card on file for you.`)
   }
  else {
     console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
     console.log(cart)
     cart = []
       }
     }
