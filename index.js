var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here

 var itemPrice = Math.floor((Math.random() * 100) + 1);
 var x = {[itemName]: itemPrice};
 console.log(`${itemName} has been added to your cart.`);
 cart.push(x);
 return cart;
}



function viewCart() {

  if(cart.length === 0){
     console.log("Your shopping cart is empty.");
  }

  if(cart.length === 1){
    console.log("In your cart, you have"+" "+ Object.keys(cart[0])+ " "+"at"+" "+"$"+ cart[0][Object.keys(cart[0])]+".");

  }else if(cart.length ===2) {
  console.log("In your cart, you have " + Object.keys(cart[0])+ " at $"+ cart[0][Object.keys(cart[0])]+" and " + Object.keys(cart[1])+ " at $"+ cart[1][Object.keys(cart[1])]+".");
  }else{
        let strings = [];
        for(let i = 0; i < cart.length; i++) {
        let item = Object.keys(cart[i])
        let price = cart[i][item]

        strings.push(item+" "+"at"+" " + "$"+price);
  }

        let last = strings[strings.length - 1];
        strings.pop();
        strings.push("and "+last);

        console.log("In your cart, you have" + " " + strings.join(", ")+".");
  }
}


function total() {

  let value = [];
  for(let i=0; i < cart.length; i++){
      let items = Object.keys(cart[i])
      let prices = cart[i][items]
      value.push(prices);
  }

     let sum = 0;
     for(var x in value){
       sum += value[x];
     }

     return parseInt(`${sum}`)
}


function removeFromCart(remove){
     for(var i = 0; i < cart.length; i++){

       if(cart[i].hasOwnProperty(remove)){
         cart.splice(i, 1);
       }

     }

    console.log("That item is not in your cart.")
    return cart
}



function placeOrder(cardNumber) {

  if(!cardNumber){
  console.log("Sorry, we don't have a credit card on file for you.");
  }else{
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  }

  for(var i in cart){
    cart.splice(i, 1);

  }


}
