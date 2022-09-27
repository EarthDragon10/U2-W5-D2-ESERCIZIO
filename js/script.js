let budget = 100;
// document.querySelector("#show-budget").innerHTML = `${budget}`;
let halfBudget = budget / 2;

for (let i = budget; i > 0; i--) {
	if (budget === halfBudget) {
		alert("Sei arrivato a metá budget!");
	}
	document.getElementById("show-budget").innerHTML = `<p>${i}</p>`;
	budget--;
}
