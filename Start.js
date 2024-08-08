const prompt = require("prompt-sync")({ sigint: true });

let Begrüßung = prompt(
	"Willkommen Held. In dieser Welt bewegst du dich mit den Tasten W, A, S und D."
);

let karte = [
	["▢", "▢", "▢"],
	["▢", "▢", "▢"],
	["▢", "▢", "▢"],
];

let neuePosition;

const held = {
	x: 0,
	y: 0,
}; //held.x und held.y Werte auslesen und bearbeiten

const icon = "߷";

let Startposition = (karte[1][1] = icon);

// console.log(Karte.join("\r\n"));

for (const i of karte) {
	console.log(i.join(" "));
}

function Bewegung() {
	let dec1 = prompt("Wohin willst du gehen?");

	if (dec1.toLowerCase() === "w") {
		karte.unshift();
	}
	if (dec1.toLowerCase() === "a") {
	}
	if (dec1.toLowerCase() === "s") {
	}
	if (dec1.toLowerCase() === "d") {
	} else {
		Bewegung();
	}
}
