var cart = [];

//debug//////////////////////////
// var temp = []
// temp = addToCart("bby")
// temp = addToCart("sda")
// temp = addToCart("ewe")
// console.log(temp, temp.length)
// removeFromCart("bby")
// removeFromCart("ssd")
// total();
// viewCart();

///////////////////////////////////

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  //random price from 1 to 100
  var price = Math.floor(Math.random() * Math.floor(99)+1)

  // console.log(cart)
  cart.push({[item]:price})
  //Object.assign(cart, {[item]:price})
  console.log(`${item} has been added to your cart.`)
  // console.log(cart, cart.length)
  return cart

 // write your code here
}

function viewCart() {
  var item={}
  var temp="In your cart, you have "
  if(cart.length < 1){
    console.log("Your shopping cart is empty.")
    return
  }else {
    for(let i =0; i < cart.length; i++){
      item = cart[i]
      if(i == 1 && cart.length ==2 ){
        temp = temp.slice(0,temp.length-2)+" and "
      }
      if(i>1 && i == cart.length -1){
        temp += "and "
      }
      temp += `${Object.keys(item)} at $${Object.values(item)}, `
    }
    temp = temp.slice(0,temp.length-2)+"."
    console.log(temp)
    return
  }
  // write your code here
}

function total() {
  // write your code here
  var sum = 0;
  var item ={};

  for(let i =0; i < cart.length; i++){
    item = cart[i]
    sum += parseInt (Object.values(item))
  }
  //console.log(sum)
  return sum
}


function removeFromCart(item) {

  var tempItem ={}

  for(let i =0; i < cart.length; i++){
    tempItem = cart[i]
    if(tempItem.hasOwnProperty(item)){
      cart.splice(i,1)
      return cart
    }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(cardNumber) {
  if(!cardNumber){
    console.log("Sorry, we don't have a credit card on file for you.")
  }else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    for(let i =0; i < cart.length; i++){
      cart.shift()
    }
  }

}
