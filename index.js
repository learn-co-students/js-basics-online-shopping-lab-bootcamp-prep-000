var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  //create price between 1-100
 function createPrice(){
   return Math.floor(Math.random()*100)+1;
 };
 var itemPrice=createPrice();
 var itemName=item;
 cart.push({[itemName] : itemPrice})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  var intro=`In your cart, you have `
  if (cart.length===0) {
console.log(`Your shopping cart is empty.`);
} else if (cart.length===1) {
  var obj1 = cart[0]
  var itemName = Object.keys(obj1)
  var itemPrice = obj1[itemName]
  console.log(`In your cart, you have ${itemName} at $${itemPrice}.`);

} else if (cart.length===2) {
  var obj1= cart[0]
  var itemName1 = Object.keys(obj1)
  var itemPrice1 = obj1[itemName1]
  var obj2 = cart[1]
  var itemName2 = Object.keys(obj2)
  var itemPrice2 = obj2[itemName2]
  console.log(`In your cart, you have ${itemName1} at $${itemPrice1} and ${itemName2} at $${itemPrice2}.`);
} else {
  var cartList="";
  for (var i = 0; i < cart.length -1; i++) {
    var obj=cart[i]
    var item=Object.keys(obj)[0];
    var price=obj[item];
    cartList=`${cartList} ${item} at $${price},`;
  }
  var item=Object.keys(cart[(cart.length-1)])[0];
  var price=cart[(cart.length-1)][item];
  cartList=`${cartList} and ${item} at $${price}.`;
  console.log(`In your cart, you have${cartList}`);
}
}

function total() {
  var totalPrice=0
  for (var i = 0; i < cart.length; i++) {
    var obj=cart[i]
    var item=Object.keys(obj)[0];
    totalPrice += obj[item];
  }
return totalPrice;
  }


function removeFromCart(item) {
  var itemReal = 0
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)){
      itemReal=1
      cart.splice(i,1)
      return cart;
    }
  }
  if (itemReal==0){
  console.log(`That item is not in your cart.`);
  return cart;
}
}

function placeOrder(cardNumber) {
  if ((parseFloat(cardNumber) == parseInt(cardNumber)) && !isNaN(cardNumber)) {
    var totalAmount=total()
    console.log(`Your total cost is $${totalAmount}, which will be charged to the card ${cardNumber}.`)
    cart=[];
    } else {
    console.log(`Sorry, we don\'t have a credit card on file for you.`)

  }
}
