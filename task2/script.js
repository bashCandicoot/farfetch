const axios = require('axios');

async function getProductCategories({ api, productId }) {
	const { data: product } = await axios.get(api + productId);
	const categories = product.categories.map(c => c.name);
	console.log(categories);
	return categories;
}

const api = 'https://www.farfetch.com/uk/api/ecommerce/products/';
const productId = '12964802';
const productCategories = getProductCategories({ api, productId });