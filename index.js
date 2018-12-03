var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({
   itemName: item,
   itemPrice: Math.floor(Math.random() * 100) + 1
 });
 return `${item} has been added to your cart.`;
}



function viewCart() {
  // write your code here
  if(!cart.length){
    return`Your shopping cart is empty.`;
  }
  
  else{
     var array = [];
     for(var i = 0; i < cart.length; i++){
 array.push(`${cart[i].itemName} at $${cart[i].itemPrice}`);
     }
     var output = `In your cart, you have `;
     if(cart.length===1){
       output += `${array[0]}.`;
     }
     else if(cart.length===2){
       output += `${array[0]}, and ${array[1]}.`;
     }
      else if(cart.length>2){
          var last = array.pop();
        var middle = array.join(', ');
       output += `${middle}, and ${last}.`;
     }
     return`${output}`;
   }
}


function total() {
  var sum = 0;
  for(let i = 0; i < cart.length; i++) {
    sum += getCart()[i].itemPrice;
  }
  return sum;
}

/*
describe("total()", function() {
  it("adds up the price of all items in the cart", function() {
    addToCart("sorghum");
    addToCart("tarragon");

    const sorghumCost = getCart()[0].itemPrice;
    const tarragonCost = getCart()[1].itemPrice;

    let totalCost = sorghumCost + tarragonCost;

    expect(total()).toBe(totalCost);

    addToCart("urchin");

    const urchinCost = getCart()[2].itemPrice;

    totalCost += urchinCost;

    expect(total()).toBe(totalCost);
  });
});
*/

 function removeFromCart(item) {
  
}

/*
describe("removeFromCart()", function() {
  it("removes the specified item from the cart", function() {
    addToCart("vanilla");
    addToCart("watermelon");
    addToCart("yams");

    removeFromCart("watermelon");

    const firstItemName = getCart()[0].itemName;
    const secondItemName = getCart()[1].itemName;

    expect(firstItemName).toEqual("vanilla");
    expect(secondItemName).toEqual("yams");

    removeFromCart("yams");

    expect(getCart().length).toEqual(1);
  });

  it("alerts you if you're trying to remove an item that isn't in your cart", function() {
    // Repeat item name from previous test to prevent hard-coding.
    expect(removeFromCart("yams")).toEqual("That item is not in your cart.");
  });
});
*/



function placeOrder(cardNumber) {
  
}
