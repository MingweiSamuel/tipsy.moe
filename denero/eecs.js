//eecs.js shamelessly stolen from eecseecs.com/eecs.js
var introAudio = new Audio('intro.mp3');
var loopAudio = new Audio('loop.mp3');

introAudio.load();
loopAudio.load();
loopAudio.loop = true;

introAudio.play();

setTimeout(function () {
	loopAudio.play()
}, 36988.752)