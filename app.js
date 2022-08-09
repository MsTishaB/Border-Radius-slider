document.getElementById("slider").addEventListener("change", function () {
	let newValue = slider.value;
	document.getElementById("borderRadius").innerHTML = newValue + "%";
	document.getElementById("box").style.borderRadius = `${newValue}px`;

	console.log(document.getElementById("box").style.borderRadius);
});
