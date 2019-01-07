
var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}



function addToCart(item) {
var obj= {[item]:(Math.floor(Math.random()*100))}
cart.push(obj)
console.log(`${item} has been added to your cart.`)
return cart
}




function viewCart() {
  if (cart.length > 0 ) {
    var currentitem = []
    var currentprice = []
    var currentlist = []
      for (var i = 0; i < cart.length; i++) {
            for (var key in cart[i]) {
              currentitem.push(key);
              currentprice.push(cart[i][key]);
                if ( i === 0) {currentlist.push(`you have ${currentitem[i]} at $${currentprice[i]}`)}
                else if (i !== 0 && cart.length === 2) {currentlist = []
                  currentlist.push(`you have ${currentitem[i-1]} at $${currentprice[i-1]} and ${currentitem[i]} at $${currentprice[i]}`)}
                else if (i < (cart.length -1) && cart.length !== 1) {currentlist.push(` ${currentitem[i]} at $${currentprice[i]}`)}
                else if (i === (cart.length -1)) {currentlist.push(` and ${currentitem[i]} at $${currentprice[i]}`)}
      }
    }
      console.log(`In your cart, ${currentlist}.`)
      return `In your cart` + currentlist + `.`
}  else { console.log(`Your shopping cart is empty.`)
   return `Your shopping cart is empty.`
}
}


/*
addToCart('banana')
  addToCart('apple')
addToCart('cream')
  console.log(cart)
  console.log(cart.length)
viewCart()
*/




function total() {
  var subtotal = 0
  var currentprice = []
    for (var i = 0; i < cart.length; i++) {
      for (var key in cart[i]) {
        currentprice.push(cart[i][key]);
        subtotal += parseFloat(currentprice[i])
        console.log(currentprice)
        console.log(subtotal)
  }
}
  console.log(subtotal)
  return subtotal
}

/*
total()
*/


function removeFromCart(item) {
  var checkitem = 0
    for (var i = 0; i < cart.length; i++) {
        for (var key in cart[i]) {
          console.log(key)
          console.log(key === item)
          console.log(i)
          if (key === item) {
            cart = [...cart.slice(0,i), ...cart.slice(i+1)]
            checkitem += 1
          }
        }
        }
   if (checkitem === 0) {
     console.log(`That item is not in your cart.`)
     return `That item is not in your cart.`
   }
  console.log(cart)
  return cart
}
/*
removeFromCart('apple')
*/

function placeOrder(cardNumber) {
  if (cardNumber) {
    var subtotal = total()
    cart = []
    console.log(`Your total cost is $${subtotal}, which will be charged to the card ${cardNumber}.`)
    return `Your total cost is $${subtotal}, which will be charged to the card ${cardNumber}.`
  }
  else {
    console.log(`Sorry, we don't have a credit card on file for you.`)
    return `Sorry, we don't have a credit card on file for you.`
  }
}
/*
placeOrder(12344)
*/
