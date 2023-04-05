let scheduledInterviews = [];

function scheduleInterview() {
	// Get form data
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let date = document.getElementById("date").value;
	let time = document.getElementById("time").value;

	// Create interview object
	let interview = {
		name: name,
		email: email,
		date: date,
		time: time
	};

	// Add interview to scheduledInterviews array
	scheduledInterviews.push(interview);

	// Clear form fields
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("date").value = "";
	document.getElementById("time").value = "";

	// Display scheduled interviews
	displayScheduledInterviews();
}

function displayScheduledInterviews() {
	// Clear existing list items
	document.getElementById("interview-list").innerHTML = "";

	// Create new list items for each scheduled interview
	for (let i = 0; i < scheduledInterviews.length; i++) {
		let interview = scheduledInterviews[i];
		let listItem = document.createElement("li");
        listItem.className = "interview-item";
        listItem.innerHTML = "<span>Name: " + interview.name + "</span>" +
        "<span>Email: " + interview.email + "</span>" +
        "<span>Date: " + interview.date + "</span>" +
        "<span>Time: " + interview.time + "</span>";
        document.getElementById("interview-list").appendChild(listItem);
        }
        }
