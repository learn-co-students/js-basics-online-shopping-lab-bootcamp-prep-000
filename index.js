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
 let obj = {}
 obj[item] = Math.floor(Math.random()*100)
 cart.push(obj)
 console.log(`${item} has been added to your cart.`)

 return cart;
}

function viewCart() {
  // write your code here
  let str = 'In your cart, you have ';
  if (cart.length < 1){
    console.log(`Your shopping cart is empty.`)
  }
    if (cart.length === 1){
      str += `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`

    } else if (cart.length === 2){
      str+= `${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}`
      str+= ` and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`
    } else {
      for(let i = 0; i < cart.length; i++){
        if(i < cart.length - 1){
          str+= `${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}, `
        } else{
          str+= `and ${Object.keys(cart[i])} at $${cart[i][Object.keys(cart[i])]}.`
        }
      }
    }
  console.log(str);
}

function total() {
  // write your code here
  let sum = 0;
  for(let i = 0; i< cart.length; i++){
    sum += cart[i][Object.keys(cart[i])]
  }
  return sum
}

function removeFromCart(item) {
  // write your code here
  for(let i = 0; i < cart.length; i++){
    let obj =  cart[i];
    if(obj.hasOwnProperty(item)){
      cart.splice(i,1)
    }

  }
 console.log("That item is not in your cart.")
  //return 'That item is not in your cart.'
  return cart;
}


function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
  console.log(`Sorry, we don't have a credit card on file for you.`)
}
