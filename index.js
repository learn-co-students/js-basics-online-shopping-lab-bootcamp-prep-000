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
 let obj = {[item]:Math.floor(Math.random()*100)}
 cart.push(obj)
 console.log(item + " has been added to your cart.")
 return cart
}

function viewCart() {
  // write your code here

  if (cart.length == 0){
    console.log("Your shopping cart is empty.")
  } else{



    let s = "In your cart, you have "
  for (let i=0; i<cart.length;i++){
    let item = cart[i]
    let key = Object.keys(item)[0]
    let price = item[key]

    if (cart.length == 1){
      s += key+ " at $" + price +"."
    } else if (cart.length == 2 && i== cart.length - 1){
      s = s.slice(0,-2);
      s += " and " + key+ " at $" + price +"."

    } else if (i== cart.length - 1){
      s += "and " + key + " at $" +  price +"."
    } else {
        s += key + " at $" + price +", "
    }

  }
console.log(s)
}



}

function total() {
  // write your code here
  return cart.reduce(function(sum,item){

    return sum + item[Object.keys(item)[0]]
  },0)
}

function removeFromCart(item) {
  // write your code here

  for (let i=0; i<cart.length;i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1)
      return cart
    }
  }


    console.log("That item is not in your cart.")



}

function placeOrder(cardNumber) {
  // write your code here
  if (arguments.length == 0){
    console.log("Sorry, we don't have a credit card on file for you.")
  } else{
    console.log("Your total cost is $"+ total() + `, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
}
