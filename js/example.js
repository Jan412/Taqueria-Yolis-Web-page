let seleccionado = document.querySelector("span");
let items = document.querySelectorAll(".menu-item");
console.log(items);
for (let i = 0; i < items.length; i++) {
	items[i].addEventListener("click", function () {
		let el_p = items[i].querySelector("p");
		let nombre = el_p.innerHTML;
		seleccionado.innerHTML = nombre;
		selectItem(items[i]);
	});
}
function selectItem(item) {
	for (let i = 0; i < items.length; i++) {
		items[i].classList.remove("selected");
	}
	item.classList.add("selected");
};