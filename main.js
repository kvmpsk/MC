const player1 = {
	name: 'Subzero',
	hp: '',
	img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	weapon: ['gun', 'sword'],
	attack: function () {
		console.log(this.name + ' Fight...');
	},
};

player1.attack();

const player2 = {
	name: 'Sonya',
	hp: '',
	img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
	weapon: ['gun', 'sword'],
	attack: function () {
    console.log(this.name + ' Fight...');
  },
};

player2.attack();

function createPlayer(player, clas) {

	const $player = document.createElement('div');
	$player.classList.add(clas);

	const $progressbar = document.createElement('div');
	$progressbar.classList.add('progressbar');
	$player.appendChild($progressbar);

	const $character = document.createElement('div');
	$character.classList.add('character');
	$player.appendChild($character);

	const $life = document.createElement('div');
	$life.classList.add('life');
	$life.style.width = '100%';
	$life.style.width = player.hp + ' %';
	$progressbar.appendChild($life);

	const $name = document.createElement('div');
	$name.classList.add('name');
	$name.innerText = player.name;
	$progressbar.appendChild($name);

	const $img = document.createElement('img');
	$img.src = player.img;
	$character.appendChild($img);

	const $arenas = document.querySelector('.arenas');
	$arenas.appendChild($player);
}

createPlayer(player1, 'player1', 'Subzero', 50);
createPlayer(player2, 'player2', 'Sonya', 80);


