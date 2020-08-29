window.onload = function(){
	let showStarted = false;
	let startTheShow = function(){
	if(showStarted){
		return;
	}
	showStarted = true;
		let text ="Надевайте Наушники и Расслабляйтесь "; 
		let words = text.split(" ");
		let currentWord = 0;
		let frequency = 3; 
		let e = document.getElementById("e"); 
		let s = document.getElementById("s");
		let fontSizeK = 1.20;
		let loops = 0;
		let textInterval = setInterval(function(){
			e.innerText = words[currentWord];
			currentWord = (currentWord + 1) % words.length;
			if(currentWord == 0){
				loops++;
				if(loops == 5){
					clearInterval(textInterval);
					s.style.display = "block";
					let audio = new Audio("./sound.mp3");
					audio.play();
				}
				e.style.fontSize = parseInt(e.style.fontSize || 100) * fontSizeK;
			}
		}, 1000 / frequency);
	}
	document.getElementById("b").onclick = startTheShow;
	document.body.onkeypress = startTheShow;
}