var cart = Array()

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}




function getCart(){
 return cart
}

function addToCart(item){
     var price = Math.floor(Math.random(0,1)*100)
     var itemObject = Object()
     itemObject[item] = price
     cart.push(itemObject)
    console.log(`${item} has been added to your cart.`)
    return cart
}



function viewCart(){
  if(cart.length===0){console.log("Your shopping cart is empty.")}
  else{ var cartMessage = "In your cart, you have "

      for (var i = 0, l = cart.length; i < l; i++) {
       //ok so now we have a loop that iterates over every item in the array


      for (var cartItem in cart[i]) {
                  if(i===cart.length-1)     //now we need a loop that iterates over ever key-value in each object
                            {cartMessage = cartMessage + `${cartItem} at $${cart[i][cartItem]}.`;}

                        else{cartMessage = cartMessage + `${cartItem} at $${cart[i][cartItem]}, `}
                      }//closes second for

                    }//closes first floor
}//closes main else
console.log(cartMessage)
return cartMessage;


}//closes function

function removeFromCart(nameOfItem){

for (var i=0;i<cart.length;i++){

  if (cart[i].hasOwnProperty(nameOfItem)===true)
      // {delete cart[i];console.log("removed"+ ` ${nameOfItem}`); return cart }
      {var newCart = cart.splice(i);console.log("removed"+ ` ${nameOfItem}`); return newCart }



  }
console.log("That item is not in your cart.");
}



function placeOrder(cardNumber){
  if (cardNumber>0){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
      cart = Array()
    return cart;
  }

  else if (cardNumber === undefined){console.log( 'We don\'t have a credit card on file for you to place your order.')}
  else console.log("error")
}
