document.getElementById("slider").addEventListener("change", function () {
	let newValue = slider.value;
	document.getElementById("borderRadius").innerHTML = newValue + "%";

	console.log(document.getElementById("box"));
});
