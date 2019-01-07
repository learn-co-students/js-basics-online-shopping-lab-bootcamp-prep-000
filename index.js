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
let price = Math.floor(Math.random()*100) + 1;  //setting price, could change with coupons but not overwriting completely so made a constant. Var also works
var adding = { [item]: price }; // 
//code for adding onto the array below
cart.push(adding);
//code 
console.log(`${item} has been added to your cart.`);
return cart  ;
}

function viewCart() {
  // write your code here
  const cL = cart.length;  // don't want to change relationship, setting to variable decreases risk of spelling mistakes
  if (!cL){
   return console.log(`Your shopping cart is empty.`);
  }
 var itemKeys= []; //since added onto, constant variable works?
 var itemPrices = [];
//setting up arrays and variables for loop
  let i=0; // defining "i"
  let j = 0 ;  //iteratorfor second loop if list has  . Put it here not in between if stamements (i.e. don't put before if (cL>2); it won't work)
  
     for(i=0; i < cL; i++) {
  let itemObject = cart[i]; // each object has price property
  let itemKey = Object.keys(itemObject) ; // /*maybe instead have it create an array I can use outside the function?*/
  itemKeys.push(itemKey);
  let itemPrice = Object.values(itemObject);
  itemPrices.push(itemPrice);
   }
   
 if (cL === 1) {
  console.log (`In your cart, you have ${itemKeys[0]} at $${itemPrices[0]}.`);
 }
 
 if (cL === 2) { 
   console.log(`In your cart, you have ${itemKeys[0]} at $${itemPrices[0]} and ${itemKeys[1]} at $${itemPrices[1]}.`);
 }
 if (cL > 2){
   const stringStart ="In your cart, you have";
   const stringEnd = ` and ${itemKeys[cL-1]} at $${itemPrices[cL-1]}.`;
   let stringParts = [ ];  // array where will put eachstring generated in viewCart Loop
   
     for (j=0; j < cL-1; j++){
     let itemAndPrice = ` ${itemKeys[j]} at $${itemPrices[j]}`;
     stringParts.push(itemAndPrice);
     }
     stringParts.push("") // ending in blank means comma when converted to string
     stringParts= stringParts.toString();
   console.log(stringParts); //for checking as go on
   console.log(stringEnd)
   
   const stringFinal=stringStart.concat(stringParts,stringEnd);
   console.log(stringFinal);
   
 }
 
 } // end of viewCart
 
  function total() {
  const cL = cart.length
  let i=0; // defining "i"
  var itemKeys= []; //since added onto, constant variable works?
  var itemPrices = [];
  let sumPrices= 0
  for(i=0; i < cL; i++) {
      let itemObject = cart[i]; // each object has price property
      let itemPrice = Object.values(itemObject);
      let priceNum=itemPrice[0]
      console.log(priceNum)
      sumPrices= sumPrices + priceNum  ;
  }
  return sumPrices
}// end of total function 


function placeOrder(creditNum){
   if  ( (typeof creditNum) !== "number"){
   console.log("Sorry, we don't have a credit card on file for you.")
   } 
 else {
 let  creditCard= total()
   console.log(`Your total cost is $${creditCard}, which will be charged to the card ${creditNum}.`)
   cart = cart.splice() // sets the cart to blank array since no argument in splice
   return cart 
 }
}

function removeFromCart(item){
   //Convert item to string first if not a string, so that hasOwnProperty willl work
  if(typeof item !== "string") {
    item = String(item);
  }
//loop check and delete
//Actually I should make another list of keys then delete from the cart[] using   delete Obj[key]; so the [i] isn't changed with each deletion
  const copyCart= cart 
  let counter=0 
  for(let i=0; i < cart.length; i++) {
// since not search by price, I should probably separate the keys out of cart first.
    // may need to iterate through
    let itemObject = cart[i]
    console.log(itemObject)
    let checkThru = itemObject.hasOwnProperty(item); 
    console.log(checkThru);
    if (checkThru === true){ 
    cart.splice(i,1)
    counter= counter + 1
    }  
  }// end of loop
// let checkThru = itemObject.hasOwnProperty(item);
 if (counter===0 ){
   console.log("That item is not in your cart.");
 }

 return cart;
}