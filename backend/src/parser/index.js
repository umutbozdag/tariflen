const axios = require("axios");
const cheerio = require("cheerio");

async function getSearchResults(marketType, query) {
	let itemsArr = [];
	if (marketType === 'Carrefour') {
		const { data } = await axios
			.get(`${getMarketLinkByType(marketType)}/search/?text=${query}`,
				{ headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36' } })

		const $ = cheerio.load(data, {
			normalizeWhitespace: true,

		});

		$('.product-listing').find('.product-listing-item').each((idx, item) => {
			if ($(item).find('.outOfStock').text()) {
			 	return
			}
			let unitPrice = $(item).find('.item-price-unit')
			let price = $(item).find('.item-price')
			let name = $(item).find('.item-name');
			let imageURL = $(item).find('a .thumb img').attr('data-src');


			itemsArr.push({
				name: name.text().trim(),
				imageURL,
				unitPrice: unitPrice.text().trim(),
				price: price.text().trim()
			})
		});

		console.log(itemsArr);

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