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
 var itemName=item;
 var itemPrice = Math.floor((Math.random() * 100) +1);
 var obj= {[itemName] : itemPrice};
 cart.push(obj);
 console.log(`${itemName} has been added to your cart.`);
 return(cart);
}


function viewCart() {
  // write your code here
  var string="In your cart, you have";
  if(cart.length===0) {
    console.log("Your shopping cart is empty.");
  } else {
    const a =[];
    for(let i=0; i<cart.length;i++) {
      let object_key = Object.keys(cart[i])
      let object_price = cart[i][object_key]
      if(cart.length===1) {
        a.push(`${object_key} at $${object_price}.`);
      }
      else if (cart.length === 2) {
  console.log(`${string} ${a.join(" and ")}`);
  }
      else if(i < (cart.length-1)) {
        a.push(`${object_key} at $${object_price},`);
      }
        else {
        a.push(`and ${object_key} at $${object_price}.`);
      }
    }
    console.log(`${string} ${a.join(" ")}`);
  }
}






function total() {
  // write your code here
  var itemPrice=0;

  for(var i=0; i < cart.length; i++)
  {
    let object_key = Object.keys(cart[i]);
    let object_price = cart[i][object_key];

    itemPrice += object_price ;

  }
return(itemPrice);
}


function removeFromCart(item) {
  // write your code here
  for(var i = 0, l = cart.length; i < l; i++){

     for(var list in cart[i]){
        if(item === list){
       cart.splice(i,1)
           return cart
          }
       }
     }

     console.log("That item is not in your cart.")
     return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined){
     console.log("Sorry, we don't have a credit card on file for you.")
   }
   else{

     console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
     cart = []
     return cart
   }

}
