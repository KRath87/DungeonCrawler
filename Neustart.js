const prompt = require("prompt-sync")({ sigint: true });

let Begrüßung = prompt(
	"Willkommen Held. In dieser Welt bewegst du dich mit den Tasten W, A, S und D."
);

let map = [
	["▢", "▢", "▢"],
	["▢", "▢", "▢"],
	["▢", "▢", "▢"],
];

const held = { x: 1, y: 1 };

for (let health = 5000; health >= 0; ) {
	for (let i = 0; i < map.length; i++) {
		let row = "";

		for (let j = 0; j < map[i].length; j++) {
			if (i === held.y && j === held.x) {
				row += " X ";
			} else {
				row += " ▢ ";
			}
		}

		console.log(row);
	}
	move();
}

function move() {
	let dec1 = prompt("Wohin willst du gehen? ");

	if (dec1.toLowerCase() === "w") {
		if (held.y === 0) {
			map.unshift(map[0]);
			held.y++;
		}

		held.y--;
	} else if (dec1.toLowerCase() === "s") {
		if (held.y === map.length - 1) {
			map.push(map[0]);
		}
		held.y++;
	} else if (dec1.toLowerCase() === "a") {
		if (held.x === 0) {
			for (let i = 0; i < map.length; i++) {
				map[i].unshift("");
			}
			held.x++;
		}
		held.x--;
	} else if (dec1.toLowerCase() === "d") {
		if (held.x === map[0].length - 1) {
			for (let i = 0; i < map.length; i++) {
				map[i].push("");
			}
		}
		held.x++;
	} else {
		move();
		endofmap();
	}
}

function endofmap() {
	for (let c = 0; c < map.length; c++) {
		for (let d = 0; d < map[c].length; d++) {
			if (held.x < 0 || held.y <= 0) {
				let e = map[c].length + 1;
				let f = map[c].length - 1;
				map[c].push(0);
				map[c][e] = map[c][f];
			}
		}
		// } else {
		//   return false;
	}
}
