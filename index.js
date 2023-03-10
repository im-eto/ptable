document.addEventListener("DOMContentLoaded", () => {
		let temp = 297;
		fetch('https://neelpatel05.pythonanywhere.com')
		.then(res => res.json())
		.then(data => {
			console.log(data[12].meltingPoint)
			for (key in data){
				if (data[key].meltingPoint > temp){
					document.getElementById(data[key].symbol).style.backgroundColor = "#6db8c2";
				}
				else if (data[key].meltingPoint < temp && data[key].boilingPoint > temp){
					document.getElementById(data[key].symbol).style.backgroundColor = "#6dc978";
				}
				else if (data[key].boilingPoint < temp){
					document.getElementById(data[key].symbol).style.backgroundColor = "#eb5c52";
				}

			}
		})

	const ext = document.getElementById("ext");
	const elements = document.querySelectorAll(".ele");
	const disp = document.querySelector(".disp");
	
	let clickEvent = (e) => {
		let symbol = e.target.id
		console.log(symbol);
		const url = new URL(`https://neelpatel05.pythonanywhere.com/element/symbol?symbol=${symbol}`)

		fetch(url)
			.then(res => res.json())
			.then(data => {
				document.getElementById("Symbol").innerHTML = data.symbol;
				document.getElementById("name").innerHTML = data.name;
				document.getElementById("atomicNumber").innerHTML = data.atomicNumber;
				document.getElementById("atomicMass").innerHTML = data.atomicMass;
				document.getElementById("boilingPoint").innerHTML = data.boilingPoint;
				document.getElementById("meltingPoint").innerHTML = data.meltingPoint;
				document.getElementById("electronicConfiguration").innerHTML = data.electronicConfiguration;
			})
		setTimeout(function(){
			disp.classList.add("dispShow");
		}, 200)
	}

	elements.forEach((item) => {
		item.addEventListener('click', clickEvent)
	})
	
	ext.addEventListener("click", () => {
		disp.classList.remove("dispShow");
	})

	let slider = document.getElementById("tempSlider");
	let kelvin = document.getElementById("Kelvin");
	let celcius = document.getElementById("Celcius");

	slider.onchange = function() {
		let temp = this.value;
		fetch('https://neelpatel05.pythonanywhere.com')
		.then(res => res.json())
		.then(data => {
			console.log(data[12].meltingPoint)
			for (key in data){
				if (data[key].meltingPoint > temp){
					document.getElementById(data[key].symbol).style.backgroundColor = "#6db8c2";
				}
				else if (data[key].meltingPoint < temp && data[key].boilingPoint > temp){
					document.getElementById(data[key].symbol).style.backgroundColor = "#6dc978";
				}
				else if (data[key].boilingPoint < temp){
					document.getElementById(data[key].symbol).style.backgroundColor = "#eb5c52";
				}

			}
		})
	}

	slider.oninput = function () {
		kelvin.innerHTML = `Kelvin: ${this.value}`
		celcius.innerHTML = `Celcius: ${this.value - 237}`
	}

})