fetch("https://puzzled-jersey-bear.cyclic.app/get_approved_msgs").then(response => {
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
});

function postMessage() {
	// Get the message from the input
	const message = document.getElementById("message").value;
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
			alert("Message posted!");
		}
	});
	// location.reload();
}