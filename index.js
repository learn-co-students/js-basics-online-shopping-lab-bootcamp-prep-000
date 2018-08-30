var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  // set each item price with a randomly generated integer between 1 and 100
  let itemPrice = Math.floor((Math.random() * 100) + 1);
  let itemName = item;
  // turn items into JavaScript object
  let newItemObject = {itemName, itemPrice};
  // add items to the cart
  cart.push(newItemObject);
  return `${newItemObject.itemName} has been added to your cart.`;

}

function viewCart() {
  // Loop through the cart and return the items in the following format: In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
  let result = [];
  let beautifullySaid = '';
  let itemName, itemPrice;
  if (cart.length === 0){
    return `Your shopping cart is empty.`;
  } else {
      for (var i = 0; i < cart.length; i++) {
        itemName = cart[i].itemName;
        itemPrice = cart[i].itemPrice;  
          
    
    if(cart.length === 1){
            result.push(`${itemName} at $${itemPrice}`);
            beautifullySaid =  `In your cart, you have ${result}.`;
           } else if (cart.length === 2) {
            result.push(`${itemName} at $${itemPrice}`);

            beautifullySaid = `In your cart, you have ${result.join(', and ')}.`

           } else {
            result.push(`${itemName} at $${itemPrice}`);
            beautifullySaid = `In your cart, you have ${result.slice(0, -1).join(', ')}, and ${result.slice(-1)}.`;

           }
                     

  }

 return beautifullySaid;

  }}


function total() {
  let totalPrice =[];
  let itemPrice;
  let totalItemValue = '';
  for (let i = 0; i < cart.length; i++){
    itemPrice = cart[i].itemPrice;
    totalPrice.push(itemPrice);
    totalItemValue = totalPrice.reduce((a, b) => a + b, 0);


  }
return totalItemValue;

}

function removeFromCart(item) {
  // Check each object's itenName value key 
  let itemName;
  let itemToDelete;
  let items = [];
  for (var i = 0; i < cart.length; i++){
    itemName = cart[i].itemName;
    items.push(itemName);
    }
      if (items.includes(item)){
        itemToDelete = items.indexOf(item);
        cart.splice(itemToDelete, 1);
        return cart;
      } 
      else {
        return `That item is not in your cart.`;      
      }
  }
  
function placeOrder(cardNumber) {
  const totalCost = total();
  if (cardNumber === undefined){
    return `Sorry, we don't have a credit card on file for you.`
  } 
  else {
    // Empty cart
    cart.splice(0);
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`;
  }
}
