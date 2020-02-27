var cart = [];

function getCart() {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

const addToCart = (item) =>{
  var obj = {itemName:`${item}`, itemPrice: Math.floor(Math.random()*100)}

  cart.push(obj);
  return obj.itemName + " has been added to your cart."
}


const viewCart = ()=>{
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var myString = "In your cart, you have "
    for(var i = 0; i < cart.length - 1; i++) {
      myString = myString + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    return myString + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  }
}


const total = () =>{
  
  let subTotal= cart.reduce((accumulator,currentValue) =>{
    return accumulator+currentValue.itemPrice
  },0)
  return subTotal
}

const removeFromCart =item=>{
  for(let i = 0; i<cart.length; i++){
    if(item === cart[i].itemName){
      cart.splice(i,1)
      return cart
    }
  }
  
  if(item !== cart[item]){
      return "That item is not in your cart."
  }
  
   
}

const placeOrder = cardNum =>{
  let newTotal = ""
  if(typeof(cardNum) === "undefined"){
    newTotal += "Sorry, we don't have a credit card on file for you."
  }else{
    newTotal+=`Your total cost is $${total()}, which will be charged to the card ${cardNum}.`
    cart = []
  }
  return newTotal;
}

