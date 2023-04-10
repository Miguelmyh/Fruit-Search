const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const possibleFruit = document.querySelector('.fruits');
const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];
// const colors = {
// 	apple: rgba(),
// 	banana: rgba()
// };

function search(str) {
	// let results = [];
	const results = fruits.filter((fruit) => {
		fruit = fruit.toLowerCase();
		if(!str)return;
		return fruit.includes(str.toLowerCase());
	})
	console.log(results);
	return results;
}

function searchHandler(e) {
	const userInput = e.target.value;
	const results = search(userInput);
	addList(results, possibleFruit);

};

function addList(arr, ul){
	ul.innerHTML = '';

	if(!arr.length) return;
	else{
		arr.forEach(fruit => {
			let li = document.createElement('li');
			li.innerHTML = fruit;
			ul.append(li);
		});
	}
}

function useSuggestion(e) {
		input.value = e.target.innerHTML;
		suggestions.innerHTML = '';
		changeUI(input.value);
 }

//  function changeUI(fruit, colors){///get the input value, if fruit is banana, 
// 	let color = colors.find(fruits => fruits === fruit);
// 	document.body.style.backgroundImage = color;//set background to banana or diff color
//  }

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);