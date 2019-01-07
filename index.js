var cart = [];

function getCart(name) {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 const price = Math.floor(Math.random() * 100);

 cart.push({[item]: price});
 console.log(`${item} has been added to your cart.`);
  return cart// write your code here
}

function viewCart() {
  if (!cart.length) {
     console.log("Your shopping cart is empty.")  // write your code here
   } else {

       var products = [];

       for (let i = 0; i < cart.length; i++) {
         let item = Object.keys(cart[i])[0];
         let price = cart[i][item];
         products.push(`${item} at \$${price}`);
       }

       if (products.length === 1) {
             products;
           } else if (products.length === 2) {
             products = products.join(" and ");
           } else {
             products[products.length - 1] = ", and ".concat(products[products.length - 1]);
             products = products.splice(0, products.length - 1).join(", ") + products[products.length - 1];
             // in js, you call the last element by [array.length - 1]
           }
         }
         console.log(`In your cart, you have ${products}.`)
        }

        function total() {
        // write your code here
         let t = 0;

         for (let i = 0; i < cart.length; i++) {
           let item = Object.keys(cart[i])[0];
           let price = cart[i][item];
           t += price;
         }
         return t;
        }

        function removeFromCart(item) {
         // write your code here
         for (let i = 0; i < cart.length; i++) {
           if (cart[i].hasOwnProperty(item)) {
             return cart = [...cart.slice(0,i),...cart.slice(i+1)]
           }
         }
         console.log("That item is not in your cart.")
        }


        function placeOrder(cardNumber) {
         // write your code here
         if (!cardNumber) {
           console.log("Sorry, we don't have a credit card on file for you.")
         } else {
           console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`);
           cart = [];
         }
        }
