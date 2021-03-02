const clock = document.getElementById("clock");

const time = () => {
	const date = new Date();
	const currentHour =
		date.getHours() < 10
			? "0" + date.getHours()
			: date.getHours() > 12
			? date.getHours() - 12
			: date.getHours();
	const currentMinutes =
		date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	const currentSeconds =
		date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	let amPm = currentHour >= 12 ? "Pm" : "Am";

	clock.innerText = `${currentHour}:${currentMinutes}:${currentSeconds} ${amPm}`;
};

setInterval(() => time(), 1000);
