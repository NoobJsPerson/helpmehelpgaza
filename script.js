var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubePlayerAPIReady() {
	youtube = new YT.Player('video-div', {
		videoId: "EH4RAdGZ9AQ",
		playerlets: {
			loop: 1
		},
	});
}
