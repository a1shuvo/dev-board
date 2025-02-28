let issueList = [
    {
        company: "ShopEase",
        issueTitle: "Fix Mobile Button Issue",
        issueDesc: "Debug using chrome developers tool. Check for overlapping content.",
        deadline: "21 March 2025",
        status: "open"
    },
    {
        company: "TechPro",
        issueTitle: "Update User Auth",
        issueDesc: "Implement multi-factor authentication and improve error handling.",
        deadline: "5 April 2025",
        status: "in progress"
    },
    {
        company: "EcoShop",
        issueTitle: "Update Product Search",
        issueDesc: "Improve product search algorithm for better relevancy and speed.",
        deadline: "30 March 2025",
        status: "open"
    },
    {
        company: "HealthNow",
        issueTitle: "Fix Login Bug",
        issueDesc: "Users are unable to log in using their credentials after the recent update.",
        deadline: "28 May 2025",
        status: "closed"
    },
    {
        company: "FoodiesHub",
        issueTitle: "UI Enhancements",
        issueDesc: "Redesign the menu page to improve navigation and overall UX.",
        deadline: "15 April 2025",
        status: "open"
    },
    {
        company: "TravelMate",
        issueTitle: "Update Map Feature",
        issueDesc: "Fix bugs in the map feature where certain locations are not displayed.",
        deadline: "25 March 2025",
        status: "open"
    }
];

window.onload = function () {
    for (let i = 0; i < issueList.length; i++) {
        const issueContainer = document.getElementById("issue-container");
        const issueDiv = document.createElement("div");
        issueDiv.classList.add("bg-[#F4F7FF]", "rounded-lg", "p-4");
        issueDiv.innerHTML = `
        <h4 class="bg-white p-2 rounded-md inline-block">${issueList[i].company}</h4>
        <h2 class="text-xl font-semibold py-4">${issueList[i].issueTitle}</h2>
        <p class="bg-white p-2 rounded-md text-sm">${issueList[i].issueDesc}</p>
        <hr class="border-t border-dashed border-gray-300 my-4">
        <div class="flex items-center justify-between ">
            <p>Deadline <br><span class="font-semibold">${issueList[i].deadline}</span></p>
            <button id="complete-btn" class="bg-blue-600 text-white px-4 py-2 rounded-lg">Completed</button>
        </div>
    `;
        issueContainer.appendChild(issueDiv);
    }
};
