var cart = [];

function getCart(itemName) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var obj = {};
  const min = 1;
  const max = 100;
  var itemPrice = Math.floor(Math.random() * (max - min) + min);
  obj[itemName] = itemPrice;
  cart.push(obj);
  console.log(`${itemName} has been added to your cart.`);
  console.log(cart);  //[ { banana: 53 } ] 
 return cart;
 
}

function viewCart() {
  var string = "In your cart, you have";
  var cartLength = cart.length;
  //console.log(cartLength);
  switch (cartLength) {
    case 0:
      string = "Your shopping cart is empty.";
      break;
    case 1:
      const [obj] = cart;
      //console.log(obj);          // i.e., {banana: 22}
      for (let prop in obj) {
        //console.log(obj[prop]);  // i.e., 22
        string = `${string} ${prop} at \$${obj[prop]}.`;
      }
      break;
    case 2:
      var lastElementKey = Object.keys(cart[cart.length - 1]);
      //console.log('Last element: ' + lastElementKey);
      for (let elem of cart) {
        var objProp = elem;
        //console.log(objProp);
        var objKey = Object.keys(objProp)[0];
        var objVal = Object.values(objProp)[0];
        //console.log(typeof(objKey)); //string typeof
        //console.log(typeof(lastElementKey));  //object typeof
        if (objKey == lastElementKey) {
          string = `${string} and ${objKey} at \$${objVal}.`;
        } else {
          string = `${string} ${objKey} at \$${objVal}`;
        }
      }
      break;
    default:
      var lastElementKey = Object.keys(cart[cart.length - 1]);
      //console.log('Last element: ' + lastElementKey);
      for (let elem of cart) {
        var objProp = elem;
        //console.log(objProp);
        var objKey = Object.keys(objProp)[0];
        var objVal = Object.values(objProp)[0];
        //console.log(typeof(objKey)); //string typeof
        //console.log(typeof(lastElementKey));  //object typeof
        if (objKey == lastElementKey) {
          string = `${string} and ${objKey} at \$${objVal}.`;
        } else {
          string = `${string} ${objKey} at \$${objVal},`;
        }
      }
      break;
    }
    console.log(string);
    return;
}

function total() {
  var cartLength = cart.length;
  var totalVal = 0;
  if (cartLength === 0) return totalVal;
  for (let elem of cart) {
        var objProp = elem;
        var objVal = Object.values(objProp)[0];
        totalVal = totalVal + objVal;
  }
  //console.log(totalVal);
  return totalVal;
}

function removeFromCart(item) {
  var foundIt = 0;
  for (let i=0; i<cart.length; i++){
    var objProp = cart[i];
    console.log(objProp);
    if (objProp.hasOwnProperty(item)){
      foundIt = 1;
      cart.splice(i,1);
    }
  }
  if (!foundIt) {
    console.log("That item is not in your cart.")
  }
  console.log(cart);
  return cart;
}

function placeOrder(cardNumber) {
  if (arguments.length === 0){
    console.log("Sorry, we don't have a credit card on file for you.");
    return;
  }
  console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
  cart = [];
  console.log(cart);
}

viewCart();
addToCart("mango");
addToCart("nuts");
addToCart("eggs");
viewCart();
total();
removeFromCart("strawberry");
removeFromCart("nuts");
placeOrder(6543210);