//eecs.js shamelessly stolen from eecseecs.com/eecs.js
var introAudio = new Audio('intro.mp3');
var loopAudio = new Audio('loop.mp3');
var started = false;

introAudio.load();
loopAudio.load();
loopAudio.loop = true;

document.onclick = () => {
	if (!started) {
		document.getElementById("clickme").remove();
		document.getElementById("dance").play();
		introAudio.play();

		setTimeout(function () {
			loopAudio.play()
		}, 36988.752);
		started = true;
	}
};
