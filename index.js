let cart = [];

const cartStrings = {
	added: ' has been added to your cart.',
	empty: 'Your shopping cart is empty.',
	contents: 'In your cart, you have '
};

const generateRandomPrice = () => Math.round(Math.random() * 10);

const getCart = () => cart;

const setCart = c => (cart = c);

function addToCart(item) {
	cart.push({
		itemName: item,
		itemPrice: generateRandomPrice()
	});

	return item + cartStrings.added;
}

const lastItem = () => {
	const lastItem = cart[cart.length - 1];
	return `${lastItem.itemName} at $${lastItem.itemPrice}.`;
};

const oneItem = () => lastItem();

const multipleItems = () => {
	const itemsAndPrices = [];
	for (let i = 0; i < cart.length - 1; i++) {
		const item = cart[i];
		itemsAndPrices.push(`${item.itemName} at $${item.itemPrice}`);
	}
	return itemsAndPrices.join(', ') + ', and ' + lastItem();
};

const formatCartContents = () => cartStrings.contents + (cart.length > 1 ? multipleItems() : oneItem());

const viewCart = () => (cart.length === 0 ? cartStrings.empty : formatCartContents());

const total = () => {
	let priceCounter = 0;
	for (const i in cart) {
		priceCounter += cart[i].itemPrice;
	}
	return priceCounter;
};

const removeFromCart = item => {
	const newCart = cart.filter(itemObj => itemObj.itemName !== item);

	if (newCart.length === cart.length) {
		return 'That item is not in your cart.';
	}
	cart = newCart;
};

const placeOrder = cardNumber => {
	if (!cardNumber) {
		return "Sorry, we don't have a credit card on file for you.";
	}
	const totalPrice = total();
	cart = [];
	return `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`;
};
