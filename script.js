const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//user input
let rows = Number(prompt('Enter a number of rows not bigger than 100:'));
let columns = Number(prompt('Enter a number of columns not bigger than 100'));

const container = $('#container');
container.style.gridTemplateRows = `repeat(${rows}, 1fr)`; //using repeat() like this allows the grid to be dynamic  
container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

for(i = 0; i < rows * columns; i++) {
	const div = document.createElement('div');
	div.classList.add('etch-a-sketch');
	container.append(div);
};

const etch = $$('.etch-a-sketch');
const reset = $('#reset');
const grey = $('#grey');
const black = $('#black');
const colors = $('#colors');

reset.addEventListener('click', (e) => {
	location.reload(); //this resets the entire page, I need to figure out how to refresh the game without refreshing the enter page.
});


etch.forEach(etch => {
	etch.addEventListener('mouseover', (e) => { 
		etch.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16); //allows the color to change to a different color everytime we hover over a div.
	});

	reset.addEventListener('click', (e) => {
		etch.style.width = 0;
		etch.style.height = 0;
	});

	grey.addEventListener('click', (e) => {
		etch.addEventListener('mouseover', (e) => {
			etch.style.backgroundColor = 'grey';
		});
	});

	black.addEventListener('click', (e) => {
		etch.addEventListener('mouseover', (e) => {
			etch.style.backgroundColor = 'black';
		});
	});

	colors.addEventListener('click', (e) => {
		etch.addEventListener('mouseover', (e) => {
			etch.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
		});
	});
});
