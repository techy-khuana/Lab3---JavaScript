// Create a reference variable to the div element with the id of "resources"
const resourcesDiv = document.querySelector("#resources");

// Create a reference variable to the button element with the id of "show-resources"
const showResourcesButton = document.querySelector("#show-resources");

// Add an event listener for the click event to the button
showResourcesButton.addEventListener("click", function(e) {
    console.log("Button clicked!");
    showResourcesHandler(); // Call the event handler function when the button is clicked
});

// Define the event handler function to remove the "d-none" class from the div element
function showResourcesHandler() {
    resourcesDiv.classList.remove("d-none");
}

// Add an event listener for the click event to the div element
resourcesDiv.addEventListener("mouseover", function(e) {
    console.log(e.target);

    // Add the class named "fw-bold" to the event target
e.target.classList.add("fw-bold");
});

resourcesDiv.addEventListener("mouseout", function(e) {
    eventHandlerFunction(e); // Call the event handler function and pass the event object
});

// Define the event handler function to remove the bold text
function eventHandlerFunction(e) {
    console.log(e.target);
    e.target.classList.remove("fw-bold"); // Remove the "fw-bold" class from the event target
}

resourcesDiv.addEventListener("click", function(e) {
    eventHandlerFunction(e); // Call the event handler function and pass the event object
});

// Define the event handler function to italicize the clicked item
function eventHandlerFunction(e) {
    e.target.classList.add("fst-italic");  // Add the "fst-italic" class to the clicked item
}

// Define the event handler function to remove the italic style
function eventHandlerFunction(e) {
    e.target.classList.remove("fst-italic"); // Remove the "fst-italic" class from the event target
    e.target.classList.remove("fw-bold");
}