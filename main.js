const player1 = {
	name: 'Demon',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	weapon: ['gun', 'sword'],
	attack: function () {
		console.log(player1.name + ' Fight...');
	},
};

const player2 = {
	name: "Monstr",
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
	weapon: ['gun', 'sword'],
	attack: function () {
    console.log(player2.name + ' Fight...');
  },
};

function createPlayer(player, pers) {

	const $player1 = document.createElement('div');
	$player1.classList.add('player1');

	const $progressbar = document.createElement('div');
	$player1.classList.add('progressbar');
	$player1.appendChild($progressbar);

	const $character = document.createElement('div');
	$player1.classList.add('character');
	$player1.appendChild($character);

	const $life = document.createElement('div');
	$life.classList.add('life');
	$life.style.width = '100%';
	$life.style.width = pers.hp + '%';
	$progressbar.appendChild($name);

	const $name = document.createElement('div');
	$name.classList.add('name');
	$name.innerText = pers.name;
	$progressbar.appendChild($name);

	const $img = document.createElement('img');
	$img.src = pers.img;
	$character.appendChild($img);

	const $arenas = document.querySelector('.$arenas');
	$arenas.appendChild($player1);	
};

createPlayer('player1', player1);
createPlayer('player2', player2);

