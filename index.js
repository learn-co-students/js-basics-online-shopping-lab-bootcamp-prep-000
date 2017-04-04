
//Cart is an array of objects.
//Each member of the array is an object with an item name and price.
var cart=[];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]    // e.g. cart[0]["ketchup"]=price of ketchup
    }
  }
  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price=Math.random()*100;
  price = Math.floor(price);
  cart.push({[item]:price}); //add object to array
  console.log (item + " has been added to your cart.");
  return cart;
}

function viewCart() {
  var rtnStr="";
  if (cart.length===0) {
    rtnStr="Your shopping cart is empty."
  }
  else {
    rtnStr="In your cart, you have ";
    for (var i = 0, l = cart.length; i < l; i++) {
      for (var item in cart[i]) {
        rtnStr = rtnStr + item + " at $" + cart[i][item];
        if (i<(l-1)) {
          rtnStr=rtnStr+", "
        }
      }
    }
    rtnStr=rtnStr+"."
  }
  console.log (rtnStr);
}

function removeFromCart(itemName) {
  var propFound=false;
  var arrNum;

  for (var i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(itemName)===true) {
      propFound=true;
      arrNum=i;
    }
  }
  if (propFound===true) {
    cart.splice(arrNum,1);
  } else {
    console.log("That item is not in your cart.");
  }
  return cart;
}

function placeOrder(ccNum) {
    var rtnStr="";
    var ttl=0;
   if (ccNum===undefined) {
     console.log("We don't have a credit card on file for you to place your order.");
   } else {
       console.log("success");
       ttl = total();
       console.log("Your total cost is $" + ttl + ", which will be charged to the card " + ccNum + ".")
       cart=[];
   }
}
