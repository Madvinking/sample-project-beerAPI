function CreateBeerArticle({ imgSrc, titleText, descriptionText }) {

	function ElementWithClassName(type, className)  {
		const elm = document.createElement(type);
		elm.className = className;
		return elm;
	}

	const beerContainer = ElementWithClassName('article', 'beerContainer');
	const img = ElementWithClassName('img', 'beerImg');
	img.src = imgSrc;

	const infoContainer = ElementWithClassName('div', 'beerInformationContainer');
	const title = ElementWithClassName('div', 'beerTitle');
	title.innerHTML = titleText;
	const description = ElementWithClassName('div', 'beerDescription');
	description.innerHTML = descriptionText;
	const favoriteIcon = ElementWithClassName('div', 'FavoriteIcon');

	infoContainer.appendChild(title);
	infoContainer.appendChild(description);

	beerContainer.appendChild(img);
	beerContainer.appendChild(infoContainer);
	beerContainer.appendChild(favoriteIcon);

	return beerContainer;

}

function pushResults(arr)  {
	const results = document.getElementById('results');
	for (const { imgSrc, titleText, descriptionText } of arr) {
		const element = CreateBeerArticle({ titleText, imgSrc, descriptionText});
		results.appendChild(element);
	}
}
