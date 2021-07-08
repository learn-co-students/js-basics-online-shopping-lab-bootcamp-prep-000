var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101);
  cart.push({[item]: price});
  console.log(`${item} has been added to your cart.`);
  return cart;
}

//function that clears that returns itemName and itemPrice in a string
function itemsAndPrices(index){
  return `${Object.keys(cart[index])} at $${getCart()[index][Object.keys(cart[index])]}`;
}

function viewCart() {
   var inCartLabel1 = "In your cart, you have";
   var inCartLabel2 = "and ";
   var totalCartContent = "";

  if(cart.length === 0){
      console.log("Your shopping cart is empty.");
  } else {
     var items = "";
     for(var i = 0; i <= cart.length - 1; i++){
           if(i === 0 && cart.length === 1){
            items = ` ${itemsAndPrices(i)}`;
           } else if(i === 1 && cart.length === 2){
            items = `${items.slice(0, -1)} ${inCartLabel2}${itemsAndPrices(i)}`;
           } else if(i === cart.length -1){
            items += ` ${inCartLabel2}${itemsAndPrices(i)}`;
           }
           else {
            items += ` ${itemsAndPrices(i)},`;
           }
           totalCartContent = `${inCartLabel1}${items}`;
        }
     console.log(totalCartContent + ".");
     }
}



function total() {
   var total = 0;
   for(var i = 0; i <= cart.length - 1; i++){
     total += getCart()[i][Object.keys(cart[i])];
   }
 return total;
}

function removeFromCart(item) {
   for(var i = 0; i <= cart.length - 1; i++){
    if(cart[i].hasOwnProperty(item)){
      console.log(`Inside if; deleting ${item}`);
      cart.splice(i,1);
      return cart;
    }
   }
   console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
   if (cardNumber){
      console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
      cart = new Array();
   } else {
      console.log("Sorry, we don't have a credit card on file for you.");
   }
}
