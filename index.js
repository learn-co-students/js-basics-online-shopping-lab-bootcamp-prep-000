var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.round(Math.random() * 100);
 cart.push({[item]: price})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var keys = [];
  for(var i =0; i < cart.length; i ++){
    if(Object.keys(cart[i]).length === 0){break}
    keys.push(Object.keys(cart[i])[0])
  }
  var output = keys.length <= 0 ? `Your shopping cart is empty.` : `In your cart, you have `
  for(var i = 0 ; i < keys.length; i++){
    if(i !== 0 && i !== keys.length - 1){
      output += `, `
    }else if(i !== 0 && i === keys.length - 1 && keys.length === 2){
      output += ` and ` 
    }else if(i !== 0 && i === keys.length - 1){
      output += `, and `
    }
    var price = getValueForKey(keys[i])
    output += `${keys[i]} at $${price}`
    if(i === keys.length - 1){output += `.`}
  }
  console.log(output)
  return output
}

function getValueForKey(key){
  var i = 0;
  while(!cart[i].hasOwnProperty(key)){
    i++;
  }
  return cart[i][key]
}

function total() {
  var total = 0;
  for(var i = 0; i < cart.length; i++){
    total += parseInt(getValueForKey(Object.keys(cart[i])[0]))
  }
  return total;
}

function removeFromCart(item) {
  var found = false
  for(var i = 0; i < cart.length; i++){
    if(cart[i].hasOwnProperty(item)){
      setCart([...cart.slice(0,i),...cart.slice(i+1)])
      found = true;
    }
  }
  if(found === false){
    console.log("That item is not in your cart.")
  }
  
  console.log(cart)
  return cart
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined || cardNumber.isNaN){
    console.log("Sorry, we don't have a credit card on file for you.")
    return;
  }
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  setCart([])
  
}
