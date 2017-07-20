//Before Each Test: cart = []
//Part 1 addToCart() Test
    addToCart("apples")
    expect(getCart().length).toEqual(1)
    addToCart("bananas")
    expect(getCart().length).toEqual(2)

  //Turns items into JavaScript objects before adding them to the cart
    addToCart("carrots")
    let itemConstructor = getCart()[0].constructor
    expect(itemConstructor).toEqual(Object)
  //Properly structures objects in the { itemName: itemPrice } format
    addToCart("daikon")
    let itemName = Object.keys(getCart()[0])[0]
    let itemPrice = getCart()[0][itemName]
    expect(itemName).toEqual("daikon");
    expect(Number.isInteger(itemPrice)).toBe(true)
  //Sets the price as an integer between 1 and 100
    addToCart("eggplant")
    let itemPrice = getCart()[0]["eggplant"];
    expect(itemPrice).toBeLessThanOrEqualTo(100)
                     .toBeGreaterThanOrEqualTo(1)
  //Chooses the price at random (Note: this test has a 1-in-10,000 chance of a false negative.)
    addToCart("figs")
    addToCart("grapes")
    addToCart("halloumi")
    let prices = getCart().map(c => c[Object.keys(c)[0]]);
    let pricesEqual = prices[0] === prices[1] && prices[1] === prices[2]
    expect(pricesEqual).toBe(false)
  //Prints a message to the console indicating that the item has been added
    addToCart("ice cream")
    expect(console.log).toHaveBeenCalledWith("ice cream has been added to your cart.")
    addToCart("juice")
    expect(console.log).toHaveBeenCalledWith("juice has been added to your cart.")
  //Returns the cart
    expect(addToCart("kale")).toEqual(getCart())

//Part 2 viewCart() Test
  //Prints 'Your shopping cart is empty.' if the cart is empty
    viewCart()
    expect(console.log).toHaveBeenCalledWith("Your shopping cart is empty.")
  //Correctly prints a one-item cart
    addToCart("lemons");
    const lemonsCost = getCart()[0]["lemons"];
    viewCart()
    expect(console.log).toHaveBeenCalledWith(`In your cart, you have lemons at $${lemonsCost}.`)
  //Correctly prints a two-item cart
    addToCart("mango")
    addToCart("nuts")
    const mangoCost = getCart()[0]["mango"]
    const nutsCost = getCart()[1]["nuts"]
    viewCart()
    expect(console.log).toHaveBeenCalledWith(`In your cart, you have mango at $${mangoCost} and nuts at $${nutsCost}.`)
  //Correctly prints a three-or-more-item cart
    addToCart("orange")
    addToCart("pear")
    addToCart("quince")
    const orangeCost = getCart()[0]["orange"]
    const pearCost = getCart()[1]["pear"]
    const quinceCost = getCart()[2]["quince"]
    viewCart()
    expect(console.log).toHaveBeenCalledWith(`In your cart, you have orange at $${orangeCost}, pear at $${pearCost}, and quince at $${quinceCost}.`)
    addToCart("rhubarb")
    const rhubarbCost = getCart()[3]["rhubarb"]
    viewCart()
    expect(console.log).toHaveBeenCalledWith(`In your cart, you have orange at $${orangeCost}, pear at $${pearCost}, quince at $${quinceCost}, and rhubarb at $${rhubarbCost}.`)

//Part 3 total() Test
  //Adds up the price of all items in the cart
    addToCart("sorghum")
    addToCart("tarragon")
    const sorghumCost = getCart()[0]["sorghum"]
    const tarragonCost = getCart()[1]["tarragon"]
    let totalCost = sorghumCost + tarragonCost
    expect(total()).toBe(totalCost)
    addToCart("urchin")
    const urchinCost = getCart()[2]["urchin"]
    totalCost += urchinCost
    expect(total()).toBe(totalCost)

//Part 4 removeFromCart() Test
  //Removes the specified item from the cart
    addToCart("vanilla")
    addToCart("watermelon")
    addToCart("yams")
    removeFromCart("watermelon")
    const firstItem = Object.keys(getCart()[0])[0]
    const secondItem = Object.keys(getCart()[1])[0]
    expect(firstItem).toEqual("vanilla")
    expect(secondItem).toEqual("yams")
    removeFromCart("yams")
    expect(getCart().length).toEqual(1)
  //Alerts you if you're trying to remove an item that isn't in your cart
    // Repeat item name from previous test to prevent hard-coding.
    removeFromCart("yams")
    expect(console.log).toHaveBeenCalledWith("That item is not in your cart.")

//Part 5 placeOrder() Test
  //Doesn't place the order if a credit card number is not provided
    placeOrder()
    expect(console.log).toHaveBeenCalledWith("Sorry, we don't have a credit card on file for you.")
  //Places an order when a credit card number is provided
    addToCart("zucchini")
    const cartTotal = total()
    const cardNumber = Math.floor(Math.random() * 100000000)
    placeOrder(cardNumber)
    expect(console.log).toHaveBeenCalledWith(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
  //Empties the cart
    addToCart("apples")
    placeOrder(12345678)
    expect(getCart()).toEqual([])
