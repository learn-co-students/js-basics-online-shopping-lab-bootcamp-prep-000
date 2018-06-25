var cart = []

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100)
  cart.push({[item]: price})
  console.log(item + " has been added to your cart.")
  return cart
}

/* function viewCart() {
+  if (cart.length === 0) {
+    console.log("Your shopping cart is empty.")
+  }  else {
+    //  let str = "In your cart, you have "
+      for (var i = 0; i < cart.length; i++) {
+        for (var key in cart[i]) {
+          console.log("In your cart, you have: "+key+" $"+cart[i][key]);
+        }
+      }
+    }
+}
+
+*/


function viewCart() {

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }  else {
    const itemsAndPrices = [];
    const l = cart.length
      for (let i = 0; i < l; i++) {
        let itemAndPrice = cart[i]
        let item = Object.keys(itemAndPrice)[0]
        let price = itemAndPrice[item]
    itemsAndPrices.push(`${item} at \$${price}`)
  }
  console.log(`In your cart, you have ${itemsAndPrices.join(', ')}.`)
}
}

function removeFromCart(removeitem) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(removeitem)) {
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    } 
  }
    console.log("That item is not in your cart.")


  return cart
}

function placeOrder(number) {
  if (number === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
      console.log (`Your total cost is $${total()}, which will be charged to the card ${number}.`)
  }
  return cart = []
}