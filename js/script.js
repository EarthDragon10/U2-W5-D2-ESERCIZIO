let budget = Number(prompt("Inserisci il tuo budget iniziale:"));
document.querySelector("#show-budget").innerHTML = `<div>${budget}</div>`;
// document.querySelector("#show-budget").innerHTML = `${budget}`;
let halfBudget = budget / 2;

function decrementBudget() {
	if (budget === halfBudget) {
		alert("Sei arrivato a metá budget!");
	}

	if (budget === 0) {
		alert("Budget Esaurito");
	}

	budget--;

	document.querySelector("#show-budget").innerHTML = `<div>${budget}</div>`;
}
