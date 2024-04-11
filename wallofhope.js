function loadMessages() {
	fetch(`https://puzzled-jersey-bear.cyclic.app/get_approved_msgs?lang=${document.documentElement.lang}`).then(response => {
		if (response.ok) {
			response.json().then(data => {
				// For each message, add it to the wall
				data.forEach(message => {
					const messageElement = document.createElement("div");
					messageElement.className = "message";
					messageElement.innerText = message.text;
					document.getElementById("wall").appendChild(messageElement);
				});
			});
		}
	}).catch(error => {
		console.error("Error loading messages", error);
		loadMessages();
	})
}
function postMessage() {
	// Get the message from the input
	const message = document.getElementById("message").value;
	if (message === "") {
		return;
	}
	fetch("https://puzzled-jersey-bear.cyclic.app/addmsg", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			text: message
		})
	}).then(response => {
		if (response.ok) {
			// If the response is ok, add the message to the wall

			// Get the snackbar DIV
			var x = document.getElementById("snackbar");

			// Add the "show" class to DIV
			x.className = "show";

			// After 3 seconds, remove the show class from DIV
			setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
		}

	});
	// location.reload();
}