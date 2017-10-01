var cart = [];

function getCart(){
  return cart;
}

function setCart(c){
  cart = c;
  return cart;
}


function addToCart(item) {
  var randomPrice = Math.floor((Math.random()*100)+1)
  var output = Object.assign({[item]: randomPrice});
  cart.push(output)
  console.log(`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  var output = "In your cart, you have "
  if (cart.length===0){
    console.log("Your shopping cart is empty.")
  }
  if(cart.length===1){
    var item1 = Object.keys(cart[0])[0]
    console.log(`In your cart, you have ${item1} at $${cart[0][item1]}.`)
  }
  if (cart.length === 2){
      var item1 = Object.keys(cart[0])[0]
      var item2 = Object.keys(cart[1])[0]
      console.log(`In your cart, you have ${item1} at $${cart[0][item1]} and ${item2} at $${cart[1][item2]}.`)
  }
  for(let i = 0 ; i < cart.length; i++){
    //console.log(`${i} key is ${Object.keys(cart[i])[0]} and value is $${Object.values(cart[i])[0]}`)
   var objKey = Object.keys(cart[i])[0];
   var objValue = cart[i][objKey]
  if(cart.length>2) {
    if (i < (cart.length-1))
      output += `${objKey} at $${objValue}, `;
    else if(i === (cart.length-1))
      output += `and ${objKey} at $${objValue}.`;
  }
  }
  console.log(output);
}

function total(){
  var total = 0;
  for(let i = 0 ; i < cart.length; i++){
   var objKey = Object.keys(cart[i])[0];
   var objValue = cart[i][objKey]
   console.log(`objValue is ${objValue}`)
   total += objValue
   console.log(`total is ${total}`)
  }
  return total;
}

function placeOrder(creditCardNumber){
  if(creditCardNumber === undefined)
    console.log("Sorry, we don't have a credit card on file for you.")
  else {
    var cartTotal = parseInt(total())
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${creditCardNumber}.`)
    cart = [];
  }
}

function removeFromCart(keyToBeRemoved){
  var duplicateCounter = 0;
  for(let i = 0 ; i < cart.length; i++){
    var objKey = Object.keys(cart[i])[0];
    if(objKey === keyToBeRemoved)
    {
      cart.splice(i,1);
      duplicateCounter ++;
      return cart;
    }
  }
  if(duplicateCounter===0){
    console.log("That item is not in your cart.")
    return cart;
  }
}
