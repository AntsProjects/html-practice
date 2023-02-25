const div = document.querySelector("#change-on-click");
console.log(document);
console.log("monali");
console.log(div);
div.addEventListener("click", () => {
	div.style = "background-color:red";
});
