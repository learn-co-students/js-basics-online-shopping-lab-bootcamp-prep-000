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
 var itemName = item
    var itemPrice = Math.floor((Math.random() * 100) + 1)
    item = {
            [itemName]: itemPrice
           }
        cart.push(item)

    console.log(`${itemName} has been added to your cart.`)
    return (cart)

}

function viewCart() {
  // write your code here
    var string = "In your cart, you have "
    var string2 = "Your shopping cart is empty."
    var i;
    var output = ""
    var finalOutput = ""

    if(cart.length === 0) {
        finalOutput = string2
    }

    for(i=0; i<cart.length; i++){

        if(cart.length === 1) {
            output += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`
            finalOutput = string + output
        }

        else if(cart.length === 2) {
            output += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]} and `
            finalOutput = string + output.slice(0,-5) + "."

        }

        else if(cart.length > 2) {
            output += `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `
            var output2 = output.slice(0,-2)
            finalOutput = string + output2.replace((/(.*,)/gm),('$1 and')) + "."

        }

    }

    console.log(finalOutput)
}

function total() {
  var total = 0
    var array = []
    var sum = 0

    for(var i=0; i<cart.length; i++){
        total = parseInt(`${cart[i][Object.keys(cart[i])]}`)
        array.push(total)
        sum += array[i]
    }
    return(sum)
    }

    function removeFromCart(item) {

    //  return cart
  //  }
    for (var i=0; i<cart.length; i++) {
       if (cart[i].hasOwnProperty(item)) {
            cart.splice(i,i)
        }

    } //end for loop
    if (!(item in cart)) {
      console.log('That item is not in your cart.')
    }

      return cart

}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber == null){
    console.log("Sorry, we don't have a credit card on file for you.")
  }
  //`Your total cost is $71, which will be charged to the card 83296759.`
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }

}
