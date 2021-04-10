
const $arenas = document.querySelector('.arenas');

const player1 = {
	player: 1,
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
	player: 2,
	name: 'Sonya',
	hp: '',
	img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
	weapon: ['gun', 'sword'],
	attack: function () {
    console.log(this.name + ' Fight...');
  },
};

player2.attack();

function createElement (tag, className) {
	const $tag = document.createElement(tag);
	if (className) {
		$tag.classList.add(className);
	}

	return $tag;
}

function createPlayer(playerObj) {

	const $player = createElement('div', 'player' + playerObj.player);
	const $progressbar = createElement('div', 'progressbar' );
	const $character = createElement('div', 'character');
	const $life = createElement('div', 'life' );
	const $name = createElement('div', 'name');
	const $img = createElement('img');

	$life.style.width = playerObj.hp + ' %';
	$name.innerText = playerObj.name;
	$img.src = playerObj.img;

	$progressbar.appendChild($name);
	$progressbar.appendChild($life);

	$character.appendChild($img);

	$player.appendChild($progressbar);
	$player.appendChild($character);

	return $player;
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));



