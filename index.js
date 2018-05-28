
// var cart = [];
//
// function getCart() {
//  return cart;
// }
//
// function setCart(c) {
//   cart = c;
//   return cart;
// }
//
// function addToCart(item) {
//  // write your code here
//  var price = Math.floor(Math.random()*100) + 1
//  cart.push({[item] : price})
//  console.log(`${item} has been added to your cart.`)
//  return cart
// }
//
// function viewCart() {
//   // write your code here
//   if (cart.length === 0) {
//     console.log("Your shopping cart is empty.")
//   }
//     var newarray = [];
//     for (var i = 0; i < cart.length; i++) {
//         var keys = Object.keys(cart[i])[0]
//         newarray.push(keys + " at $" + cart[i][keys])
//       }
//   var mystring = "In your cart, you have "
//     if(newarray.length === 1) {
//       mystring += newarray + "."
//     }
//     else if (newarray.length === 2) {
//        var variable = newarray.join(" and ")
//        mystring += variable + "."
//     }
//     else if (newarray.length > 2) {
//       var lastelement = newarray.pop()
//       var otheritem = newarray.join(", ")
//       mystring += otheritem + ", and " + lastelement + "."
//     }
//     console.log(mystring)
//   }
//
// function total() {
//   // write your code here
//   var z = 0;
//   for (var i =0; i < cart.length; i++) {
//     z += cart[i][Object.keys(cart[i])]
//   }
//     return z
//   }
//
//
// function removeFromCart(item) {
//   // write your code here
//   for (var i=0; i<cart.length; i++) {
//     if (Object.keys(cart[i]) == item) {
//       cart = [...cart.slice(0,i), ...cart.slice(i+1)];
//       return cart
//     }
//   }
//   console.log("That item is not in your cart.")
//   return cart
// }
//
// function placeOrder(cardNumber) {
//   // write your code here
//   if (cardNumber == null) {
//     console.log("Sorry, we don't have a credit card on file for you.")
//   }
//   console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
//   cart = [];
// }



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
 var price = Math.ceil(Math.random()*100)
 cart.push({[item] : price})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  var newarray = [];
       for (var i = 0; i < cart.length; i++) {
           var keys = Object.keys(cart[i])[0]
           newarray.push(keys + " at $" + cart[i][keys])
           debugger;
        }
        var mystring = "In your cart, you have "
         if (newarray.length === 1) {
           mystring += newarray + "."
         } else if (newarray.length === 2) {
           mystring += (newarray[0] + " and " + newarray[1] + ".")
         } else if (newarray.length > 2) {
           var lastelement = newarray.pop()
           var other_item = newarray.join(", ")
           mystring += (other_item + ", and " + lastelement + ".")
         }
          console.log(mystring)
  }

function total() {
  // write your code here
  var z = 0
  for (var i = 0; i < cart.length; i++) {
     z += cart[i][Object.keys(cart[i])]
  }
  return z;
  }


function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++)
    if (Object.keys(cart[i]) == item) {
      cart = [...cart.slice(0,i), ...cart.slice(i+1)];
      return cart;
    }
    console.log("That item is not in your cart.")
    return cart;
}

function placeOrder(cardNumber) {
  // write your code here
if (cardNumber == null) {
  console.log("Sorry, we don't have a credit card on file for you.")
} else {
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
}

}
