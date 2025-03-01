let taskList = [
    {
        company: "ShopEase",
        taskTitle: "Fix Mobile Button Issue",
        taskDesc: "Debug using chrome developers tool. Check for overlapping content.",
        deadline: "21 March 2025",
        status: "open"
    },
    {
        company: "TechPro",
        taskTitle: "Update User Auth",
        taskDesc: "Implement multi-factor authentication and improve error handling.",
        deadline: "5 April 2025",
        status: "in progress"
    },
    {
        company: "EcoShop",
        taskTitle: "Update Product Search",
        taskDesc: "Improve product search algorithm for better relevancy and speed.",
        deadline: "30 March 2025",
        status: "open"
    },
    {
        company: "HealthNow",
        taskTitle: "Fix Login Bug",
        taskDesc: "Users are unable to log in using their credentials after the recent update.",
        deadline: "28 May 2025",
        status: "closed"
    },
    {
        company: "FoodiesHub",
        taskTitle: "UI Enhancements",
        taskDesc: "Redesign the menu page to improve navigation and overall UX.",
        deadline: "15 April 2025",
        status: "open"
    },
    {
        company: "TravelMate",
        taskTitle: "Update Map Feature",
        taskDesc: "Fix bugs in the map feature where certain locations are not displayed.",
        deadline: "25 March 2025",
        status: "open"
    }
];

window.onload = function () {
    for (let i = 0; i < taskList.length; i++) {
        const taskContainer = document.getElementById("task-container");
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("bg-[#F4F7FF]", "rounded-lg", "p-4");
        taskDiv.innerHTML = `
        <h4 class="bg-white p-2 rounded-md inline-block">${taskList[i].company}</h4>
        <h2 class="text-xl font-semibold py-4">${taskList[i].taskTitle}</h2>
        <p class="bg-white p-2 rounded-md text-sm">${taskList[i].taskDesc}</p>
        <hr class="border-t border-dashed border-gray-300 my-4">
        <div class="flex items-center justify-between ">
            <p>Deadline <br><span class="font-semibold">${taskList[i].deadline}</span></p>
            <button class="completed-btn bg-blue-600 text-white px-4 py-2 rounded-lg disabled:bg-gray-400 disabled:text-gray-700">Completed</button>
        </div>
    `;
        taskContainer.appendChild(taskDiv);
    }

    // Current Date
    let now = new Date();
    const dateToday = document.getElementById("date-today");
    dateToday.innerHTML = `
        <p class="text-xl">
            ${now.toLocaleString('en-US', { weekday: 'short'})}
            <br>
            <span class="text-gray-800 font-bold text-2xl">${now.toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric'})}</span>
        </p>
    `;
};

const pendingTaskElement = document.getElementById("pending-task-count");
const completedTaskElement = document.getElementById("completed-task-count");
const activityContainer = document.getElementById("activity-container");

let pendingTaskCount = taskList.length;
let completedTaskCount = parseInt(completedTaskElement.innerText);


pendingTaskElement.innerText = pendingTaskCount > 9 ? pendingTaskCount : "0" + pendingTaskCount;

document.body.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("completed-btn")) {
            pendingTaskCount--;
            completedTaskCount++;
            pendingTaskElement.innerText = pendingTaskCount > 9 ? pendingTaskCount : "0" + pendingTaskCount;
            completedTaskElement.innerText = completedTaskCount;
            event.target.disabled = true;
            const taskTitle = event.target.parentElement.parentElement.querySelector("h2").innerText;
            const newActivity = document.createElement("li");
            newActivity.classList.add("bg-[#F4F7FF]", "p-2", "rounded-md");
            let now = new Date();
            newActivity.innerText = "You have Complete The Task " + taskTitle + " at " + now.toLocaleTimeString();
            activityContainer.appendChild(newActivity);
            alert("Board Updated Successfully!");
            if (pendingTaskCount === 0) {
                alert("Congrats!!! You have Successfully Completed All the Current Task! ");
            }
    }
});

document.getElementById("clear-history-btn").addEventListener("click", function () {
    activityContainer.innerHTML = "";
});

// Random RGB color generator
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b}`;
}

document.getElementById("theme-btn").addEventListener("click", function () {
    document.body.style.backgroundColor = randomColor();
});