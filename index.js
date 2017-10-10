var cart = [];

function getCart() {
 return cart;
};

function setCart(c) {
  cart = c;
  return cart;
};

function addToCart(item) {
  var itemPrice = Math.floor(Math.random()*100);
  var cartItem = {[item]:itemPrice};
  cart.push(cartItem);
  console.log (`${item} has been added to your cart.`);
  return cart;
};

function getItemProperty(itemNumber){
  itemName= Object.keys(cart[itemNumber]);
  itemValue = cart[itemNumber][itemName.toString()];
};

function viewCart() {
  if (cart.length > 0){
    console.log ("In your cart, you have ");
      for (i = 0; i < cart.length-1; i++){
        getItemProperty(i);
        console.log(`${itemName[0]} at $${itemValue}, `);
      };
      getItemProperty(i);
      console.log(`and ${itemName[0]} at $${itemValue}.`);
    }else{
    console.log("Your shopping cart is empty.");
  };
};


function total() {
  var itemsTotal = 0;
    for (i = 0; i < cart.length; i++){
      getItemProperty(i);
      itemsTotal = itemsTotal + itemValue;
    };
  return itemsTotal;
};


function removeFromCart(item) {
  for (i = 0; i < cart.length; i++){
    if (cart[i].hasOwnProperty(item)){
      cart.splice(i,1);
    }else{
      console.log("That item is not in your cart.");
      return cart;
    };
  };
};


function placeOrder(cardNumber) {
  if (cardNumber){
    total = total();
    console.log(`Your total cost is $${total}, which will be charged to the card ${cardNumber}.`);
    cart = [];
  }else{
    console.log("Sorry, we don't have a credit card on file for you.");
  };
};
