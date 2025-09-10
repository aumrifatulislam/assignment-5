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

//call functionality start ----------

const callHistoryData = [];

function addCallHistory(name, number) {
    const data = {
        name: name,
        number: number,
        date: new Date().toLocaleTimeString()
    };
    callHistoryData.push(data);
    renderCallHistory();
}

function renderCallHistory() {
    const historyContainer = document.getElementById("callHistory");
    if (!historyContainer) return;

    historyContainer.innerHTML = "";

    callHistoryData.forEach(call => {
        const div = document.createElement("div");
        div.className = "bg-[#fafafa] rounded-xl p-3";

        div.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <h3 class="font-semibold text-gray-900">${call.name}</h3>
                    <p class="text-gray-700 text-sm">${call.number}</p>
                </div>
                <div class="text-xs text-black">${call.date}</div> <!-- black full opacity -->
            </div>
        `;
        historyContainer.appendChild(div);
    });
}


function getCoinCount() {
    return getInnerText("coinCount");
}
function setCoinCount(value) {
    setInnerText("coinCount", value);
}

const callButtons = document.querySelectorAll(".callBtn");

callButtons.forEach(button => {
    button.addEventListener("click", function() {
        
        const cardBody = this.closest(".card-body");
        if (!cardBody) return;

        const serviceNameEl = cardBody.querySelector(".card-title");
        const serviceNumberEl = cardBody.querySelector("h3");

        const serviceName = serviceNameEl ? serviceNameEl.innerText.trim() : "Unknown Service";
        const serviceNumber = serviceNumberEl ? serviceNumberEl.innerText.trim() : "Unknown Number";

        let coins = getCoinCount();

        if (coins < 20) {
            alert("You do not have enough coins to make this call!");
            return;
        }

        coins -= 20;
        setCoinCount(coins);

        alert(`Calling ${serviceName} at ${serviceNumber}`);

        addCallHistory(serviceName, serviceNumber);
    });
});

// Clear History button functionality

const clearHistoryBtn = document.getElementById("clearHistory");
if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", function() {
        callHistoryData.length = 0;
        renderCallHistory();
    });
}

// ---------- call functionality end ----------
