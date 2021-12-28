const axios = require("axios");
const cheerio = require("cheerio");

const classes = {
	carrefour: {
		list: '.product-listing',
		listItem: '.product-listing-item',
		outOfStock: '.outOfStock',
		unitPrice: '.item-price-unit',
		price: '.item-price',
		name: '.item-name',
		imageURL: 'a .thumb img',
		link: '.product_click a'
	}
}

async function getSearchResults(marketType, query) {
	let itemsArr = [];
	query = encodeURIComponent(query);
	if (marketType === 'Carrefour') {
		const { data } = await axios
			.get(`${getMarketLinkByType(marketType)}/search/?text=${query}`,
				{ headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36' } })

		const $ = cheerio.load(data, {
			normalizeWhitespace: true,
		});

		$(classes.carrefour.list).find(classes.carrefour.listItem).each((idx, item) => {
			if ($(item).find(classes.carrefour.outOfStock).text()) {
				return
			}
			let unitPrice = $(item).find(classes.carrefour.unitPrice)
			let price = $(item).find(classes.carrefour.price)
			let name = $(item).find(classes.carrefour.name);
			let imageURL = $(item).find(classes.carrefour.imageURL).attr('data-src');

			let link = $(item).find(classes.carrefour.link).attr('href');
			
			itemsArr.push({
				name: name.text().trim(),
				imageURL,
				unitPrice: unitPrice.text().trim(),
				price: price.text().trim(),
				link: `${getMarketLinkByType(marketType)}${link}`
			})
		});
	}

	return itemsArr
}

function getMarketLinkByType(marketType) {
	switch (marketType) {
		case 'Carrefour':
			return 'https://www.carrefoursa.com'
		default:
			break;
	}
}

module.exports = getSearchResults