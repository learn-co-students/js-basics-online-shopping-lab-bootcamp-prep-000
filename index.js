var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
cart.push(genItem(item));
return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0){
    return 'Your shopping cart is empty.'
  }
  var latte = 'In your cart, you have';
  for(var i=0; i<cart.length; i++){
    latte = `${latte} ${cart[i].itemName} at $${cart[i].itemPrice}`;
    if((i+1)==cart.length){
      latte =`${latte}.`;
      return latte;
    }
    else{
      latte =`${latte},`;
    }
    if (i+2==cart.length){
      latte = `${latte} and`
    }
  }
  return latte;
}

function total() {
  var sum = 0
  for(var i=0; i<cart.length; i++){
    sum  = sum + cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  var tarInd = indexName(item);
  if (tarInd == null){
    return 'That item is not in your cart.'
  }
  else{
    delete cart[tarInd]
    cutOut(tarInd)
  }
}

function placeOrder(card) {
  if(card == null){
    return 'Sorry, we don\'t have a credit card on file for you.'
  }
  else{
    var tot = total()
    cart = []
    return `Your total cost is $${tot}, which will be charged to the card ${card}.`
  }
}

function genItem(item){
  var tuptup = {itemName:item ,itemPrice:(Math.floor(Math.random() * 100)+1)}
  return tuptup
}

function indexName(target){
  for(var i=0; i < cart.length; i++){
    console.log(cart[i].itemName)
    if(cart[i].itemName == target){
      console.log('Found Target')
      console.log(i)
      return i;
    }
  }
  console.log('nothing found')
  return null
}

function cutOut(ind){
  cart = [...cart.slice(0, ind),...cart.slice(ind+1)]
}
