//Init a cart array
var cart = [];

//Input: void
//Output: array (a shopping cart)
function getCart() {
    return cart;
}

//Input: a cart
//Output: array (the cart)
function setCart(c) {
    cart = c;
    return cart;
}

//Input: string (an item name)
//Output: string (notification w/ item name)
function addToCart(item) {
    //Generate a random price 'n' [1,100)
    var n = parseInt(Math.floor(Math.random() * 100) + 1);
    //check for duplicate item
    var duplicate = false;
    for (var i = 0; i < cart.length; i++) {
        //if duplicate found
        if (item === cart[i].itemName) {
            //add new price to original price
            cart[i].itemPrice = cart[i].itemPrice + n
            //toggle duplicate to true
            duplicate = true
            //add quatity to item object
        }
    }
    if (duplicate) {
        return `Another ${item} has been added to your cart.`;
    }
    else {
        //Init a new item object (dictionary)
        var itemObj = {'itemName': item, 'itemPrice': n};
        //Add new item object to end of cart array
        cart.push(itemObj);
        return `${item} has been added to your cart.`;
    }
}

//Input: void
//Output: string (formatted list of items and their prices in the cart)
function viewCart() {
    //cart array must exist and have at least one entry
    if (cart === undefined || cart.length < 1) {
        return "Your shopping cart is empty.";
    }
    //generate a formatted string backwards
    else {
        //start index at last entry in array
        var i = cart.length - 1;
        //init a string with final '.'
        var str = ".";
        //step through array from index n to 1 if n =/= 1
        while (i > 0) {
            //add name and price values from array at index 'i' key
            str = cart[i].itemName + ' at $' + cart[i].itemPrice + str;
            //add formatting for last item in array (solves 2+ item case)
            if (i == cart.length - 1) {
                str = ', ' + 'and ' + str;
            }
            //add formatting for 3+ item case
            else {
                str = ', ' + str;
            }
            //decrement i
            i--;
        }
        //solve for 1 item case
        str = cart[i].itemName + ' at $' + cart[i].itemPrice + str;
        //return fully concat-ed string
        return "In your cart, you have " + str;
    }
}

//Input: void
//Output: integer (total price of items in cart)
function total() {
    //init total variable at 0
    var grandTotal = 0;
    //step through array
    for (var i = 0; i < cart.length; i++) {
        //add price value at current index to total
        grandTotal = grandTotal + cart[i].itemPrice;
    }
    return grandTotal;
}

//Input: string (item)
//Output: array if item in array, string if not
//Potential for error if duplicate item names are in cart array
//Fixed in addToCart function
function removeFromCart(item) {
    //init check variable with false value to know if item is in cart array
    var check = 0;
    //step through array
    for (var i = 0; i < cart.length; i++) {
        //check if item in array
        if (cart[i].itemName === item) {
            //at index 'i' remove one item from cart array
            cart.splice(i, 1);
            //toggle check to true
            check = 1;
        }
    }
    //trivial return conditional
    if (check == 1) {
        return cart;
    }
    else {
        return "That item is not in your cart.";
    }
}
//Input: string (long? int?) card cardnumber
//Output: error message if invalid input, confirmation message if valid
function placeOrder(cardNumber) {
    //trivial error
    if (cardNumber === undefined) {
        return "Sorry, we don't have a credit card on file for you.";
    }
    else {
        //store foramtted string with cart toatal
        var str = 'Your total cost is $' + total() + `, which will be charged to the card ${cardNumber}.`;
        //empty cart
        cart = [];
        return str;
    }
}

//Test cases
console.log(getCart());
console.log(addToCart("Chicken"));
console.log(viewCart());
console.log(addToCart("Ham"));
console.log(viewCart());
console.log(addToCart("Cheese"));
console.log(viewCart());
console.log(addToCart("Chicken"));
console.log(viewCart());
console.log(total());
console.log(removeFromCart("Beef"));
console.log(total());
console.log(viewCart(removeFromCart("Ham")));
console.log(total());
console.log(placeOrder());
console.log(placeOrder("123456890"));
