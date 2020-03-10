var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var kart = {
   itemName: item,
   itemPrice: Math.floor(Math.random() * 101)
 };
 cart.push(kart);
 return `${kart.itemName} has been added to your cart.`;
}

function viewCart() {
  let vCart = "In your cart, you have ";
  let sectionB = " at $";
  let sectionC = ", and ";
  let tString = "";
  for(let i=0;i<cart.length;i++){
    if(cart.length === 1){
      return `${vCart}${cart[i].itemName}${sectionB}${cart[i].itemPrice}.`
    }
    else if(cart.length === 2){
      tString = `${tString}${cart[i].itemName}${sectionB}${cart[i].itemPrice}`
      if(i === 0){
        tString = `${tString}${sectionC}`;
      }
      if(i === 1){
        vCart = `${vCart}${tString}.`
        return vCart;
      }
    }
    else if(cart.length>2){
      if(i<cart.length -2){
        tString = `${tString}${cart[i].itemName}${sectionB}${cart[i].itemPrice}, `
      }
     else if(i<cart.length -1){
        tString = `${tString}${cart[i].itemName}${sectionB}${cart[i].itemPrice}`
      }
      if(i===cart.length -1){
        vCart = `${vCart}${tString}${sectionC}${cart[i].itemName}${sectionB}${cart[i].itemPrice}.`;
        return vCart;
      }
    }
  }
  return `Your shopping cart is empty.`
}

function total() {
  let tot = 0;
  for(let i=0;i<cart.length;i++){
    tot = tot + cart[i].itemPrice;
  }
  return tot;
}

function removeFromCart(item) {
  for(let i=0;i<cart.length;i++){
    if(cart[i].itemName === item){
      cart.splice(i,1);
      return;
    }
  }
  return `That item is not in your cart.`;
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined){
    return `Sorry, we don't have a credit card on file for you.`
  }
  else{
    let tot = total();
    for(let i=0;i<cart.length;i++){
      cart.pop();
    }
    return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`
  }
}
