const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
	player: 1,
	name: 'Subzero',
	hp: 100,
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
	hp: 100,
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

	$life.style.width = playerObj.hp +'%';
	$name.innerText = playerObj.name;
	$img.src = playerObj.img;

	$progressbar.appendChild($name);
	$progressbar.appendChild($life);

	$character.appendChild($img);

	$player.appendChild($progressbar);
	$player.appendChild($character);

	return $player;
}

function changeHP(player) {
	const $playerLife = document.querySelector('.player' + player.player +' .life');
	player.hp -= Math.ceil(Math.random()*20);
	$playerLife.style.width = player.hp +'%';

	if (player.hp < 0) {
		$arenas.appendChild(playerWin(player.name));
	}
}

function playerWin(name) {
	const $loseTitle = createElement('div', 'loseTitle');
	$loseTitle.innerText = name + ' Win';

	return $loseTitle;
}

$randomButton.addEventListener('click', function () {
	console.log('####: Click Random Button');
	changeHP(player1);
	changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));



