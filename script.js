//heart functionality start-----------

// Function to get number
function getInnerText(id) {
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    return parseInt(elementValue);
}

// Function to set number
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

// Function to increment counter
function addLoveCount(counterId) {
    let currentValue = getInnerText(counterId);
    currentValue += 1;
    setInnerText(counterId, currentValue);
}

// Attach click event to all heart buttons
const heartButtons = document.querySelectorAll(".heartBtn");

heartButtons.forEach((button) => {
    button.addEventListener("click", function() {
        addLoveCount("loveCount");
    });
});

//heart functionality end-----------