const prompt = require("prompt-sync")({ sigint: true });

let Begrüßung = prompt(
	"Willkommen Held. In dieser Welt bewegst du dich mit den Tasten W, A, S und D."
);

let map = [
	["▢", "▢", "▢"],
	["▢", "▢", "▢"],
	["▢", "▢", "▢"],
];

const held = {
	x: 1,
	y: 1,
}; //"߷"

for (let health = 5000; health >= 0; ) {
	for (let i = 0; i < map.length; i++) {
		let row = "";
		for (let j = 0; j < map[i].length; j++) {
			if (i === held.y && j === held.x) {
				row += "߷";
			} else {
				row += "▢";
			}
		}
		console.log(row);
	}

	move();
}

function move() {
	let dec1 = prompt("Wohin willst du gehen ?");
	if (dec1.toLowerCase() === "w") {
		held.y -= 1;
	} else if (dec1.toLowerCase() === "s") {
		held.y += 1;
	} else if (dec1.toLowerCase() === "a") {
		held.x -= 1;
	} else if (dec1.toLowerCase() === "d") {
		held.x += 1;
	} else {
		move();
	}
}

// function expansion(){
//     if(held.x > )
// }
