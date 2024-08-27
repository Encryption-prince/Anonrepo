
    const playbooks = [
        {
            title: "What do recruiters/hiring managers look for in a design portfolio?",
            description: "Recruiters and hiring managers look for several key elements...",
            upvotes: 23,
            answers: 15,
            monthsAgo: 2,
            authorImage: "https://via.placeholder.com/40", 
            authorName: "John Doe"
        },
        {
            title: "How to decide if I want to be an IC or a manager?",
            description: "Choosing between being an individual contributor (IC)...",
            upvotes: 30,
            answers: 20,
            monthsAgo: 4,
            authorImage: "https://via.placeholder.com/40", 
            authorName: "Jane Smith"
        },
       
    ];

    function renderPlaybooks() {
        const container = document.getElementById('playbookContainer');
        container.innerHTML = '';

        playbooks.forEach(playbook => {
            const playbookElement = document.createElement('div');
            playbookElement.className = 'bg-gray-50 p-4 rounded-lg hover:shadow transition-shadow duration-200';
            playbookElement.innerHTML = `
                <h4 class="text-lg font-semibold mb-2">${playbook.title}</h4>
                <p class="text-gray-600 text-sm mb-4">${playbook.description}</p>
                <div class="flex justify-between items-center">
                    <div class="flex items-center">
                        <img src="${playbook.authorImage}" alt="Author" class="w-10 h-10 rounded-full mr-2">
                        <div>
                            <p class="text-gray-800 font-semibold">${playbook.authorName}</p>
                            <p class="text-gray-500 text-xs">${playbook.monthsAgo} months ago</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <button class="bg-blue-500 text-white px-2 py-1 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                            Upvote (${playbook.upvotes})
                        </button>
                        <p class="text-gray-600 text-xs">${playbook.answers} answers</p>
                    </div>
                </div>
            `;
            container.appendChild(playbookElement);
        });
    }

    document.addEventListener('DOMContentLoaded', renderPlaybooks);
    

    // Calender
    document.addEventListener('DOMContentLoaded', function () {
        const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        const today = new Date();
        let currentWeekStart = new Date(today.setDate(today.getDate() - today.getDay()));
        const monthYearElement = document.getElementById('monthYear');
        const calendarDatesElement = document.getElementById('calendarDates');
        const selectedDateElement = document.getElementById('selectedDate');
        const sessionList = document.getElementById('sessionContainer');
    
        // Session data
        const sessions = {
            "2024-08-21": ["Session 1", "Session 2"],
            "2024-08-22": ["Session 3"],
            "2024-08-23": ["Session 4", "Session 5","Session 4","Session 4","Session 4"],
            "2024-08-24": ["Session 6"],
            "2024-08-25": [],
            "2024-08-26": ["Session 7"],
            "2024-08-27": ["Session 8", "Session 9"]
        };
    
        function updateCalendar() {
            const month = currentWeekStart.toLocaleString('default', { month: 'long' });
            const year = currentWeekStart.getFullYear();
            monthYearElement.textContent = `${month} ${year}`;
    
            calendarDatesElement.innerHTML = '';
    
            for (let i = 0; i < 7; i++) {
                const date = new Date(currentWeekStart);
                date.setDate(currentWeekStart.getDate() + i);
                const dayElement = document.createElement('div');
                dayElement.textContent = date.getDate();
                dayElement.classList.add('cursor-pointer', 'p-2', 'hover:bg-indigo-100', 'rounded-lg');
                dayElement.onclick = () => showSessions(date);
                calendarDatesElement.appendChild(dayElement);
            }
        }
    
        function showSessions(date) {
            const dateKey = date.toISOString().split('T')[0];
            selectedDateElement.textContent = date.toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' });
    
            sessionList.innerHTML = '';
    
            if (sessions[dateKey] && sessions[dateKey].length > 0) {
                sessions[dateKey].forEach(session => {
                    const li = document.createElement('li');
                    li.textContent = session;
                    li.classList.add('p-2', 'bg-white', 'mb-2', 'rounded-lg', 'shadow-sm');
                    sessionList.appendChild(li);
                });
            } else {
                sessionList.innerHTML = `
            <li class='text-gray-600 flex items-center'>
                <a href="#bookSession" class="flex items-center text-blue-600  ">
                    <i class="fas fa-calendar-plus mr-2"></i>
                    <span>No sessions available.<br><strong class ="hover:underline text-blue-800">Book a session</strong></span>
                </a>
            </li>
        `;
            }
        }
    
        document.getElementById('prevWeek').onclick = () => {
            currentWeekStart.setDate(currentWeekStart.getDate() - 7);
            updateCalendar();
        };
    
        document.getElementById('nextWeek').onclick = () => {
            currentWeekStart.setDate(currentWeekStart.getDate() + 7);
            updateCalendar();
        };
    
        updateCalendar();
        showSessions(new Date()); 
    });
    function darkMode() {
        document.addEventListener('DOMContentLoaded', () => {
            const themeToggleButton = document.getElementById('themeToggle');
            const sunIcon = '<i class="bx bx-sun text-xl"></i>';
            const moonIcon = '<i class="bx bx-moon text-xl"></i>';
        
            // Check and apply the saved theme from localStorage
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-mode');
                themeToggleButton.innerHTML = moonIcon;
            } else {
                document.body.classList.add('light-mode');
                themeToggleButton.innerHTML = sunIcon;
            }
        
            // Toggle theme on button click
            themeToggleButton.addEventListener('click', () => {
                if (document.body.classList.contains('light-mode')) {
                    document.body.classList.remove('light-mode');
                    document.body.classList.add('dark-mode');
                    themeToggleButton.innerHTML = moonIcon;
                    localStorage.setItem('theme', 'dark');
                } else {
                    document.body.classList.remove('dark-mode');
                    document.body.classList.add('light-mode');
                    themeToggleButton.innerHTML = sunIcon;
                    localStorage.setItem('theme', 'light');
                }
            });
        });
    }
    darkMode();
//Browse
    function browseBtn(){
        document.addEventListener('DOMContentLoaded', () => {
            const browseButton = document.getElementById('browseButton');
            const browseDropdown = document.getElementById('browseDropdown');
        
            browseButton.addEventListener('click', () => {
                if (browseDropdown.classList.contains('hidden')) {
                    browseDropdown.classList.remove('hidden');
                } else {
                    browseDropdown.classList.add('hidden');
                }
            });
        });
    }
    browseBtn();
    function tipSec(){
        const tips = [
            "Tip 1: Stay organized and plan your week in advance.",
            "Tip 2: Communicate effectively with your team.",
            "Tip 3: Set clear goals and track your progress.",
            "Tip 4: Take regular breaks to maintain focus.",
            "Tip 5: Always be open to feedback and learning."
        ];
    
        let currentTipIndex = 0;
    
        const tipContainer = document.getElementById('tipContainer');
        const prevTipBtn = document.getElementById('prevTip');
        const nextTipBtn = document.getElementById('nextTip');
    
        function updateTip() {
            tipContainer.innerHTML = `<p class="font-bold text-gray-800">${tips[currentTipIndex]}</p>`;
            prevTipBtn.disabled = currentTipIndex === 0;
            nextTipBtn.disabled = currentTipIndex === tips.length - 1;
    
            prevTipBtn.classList.toggle('text-gray-300', prevTipBtn.disabled);
            nextTipBtn.classList.toggle('text-gray-300', nextTipBtn.disabled);
        }
    
        prevTipBtn.addEventListener('click', () => {
            if (currentTipIndex > 0) {
                currentTipIndex--;
                updateTip();
            }
        });
    
        nextTipBtn.addEventListener('click', () => {
            if (currentTipIndex < tips.length - 1) {
                currentTipIndex++;
                updateTip();
            }
        });
        updateTip(); 
    }   
    tipSec();

// Search Input
    function searchInput(){
    function removeIcon(inputElement) {
        inputElement.style.background = 'transparent';
        inputElement.style.paddingLeft = '10px';
    }
    
    function restoreIcon(inputElement) {
        inputElement.style.background = 'transparent url("../assets/search.png") no-repeat 9px';
        inputElement.style.backgroundSize = '16px';
        inputElement.style.paddingLeft = '40px';
    }
    }
    searchInput();

    function profileDiv(){
    document.getElementById('toggleImage').addEventListener('click', function() {
        var menu = document.getElementById('menu');
        if (menu.classList.contains('hidden')) {
          menu.classList.remove('hidden');
        } else {
          menu.classList.add('hidden');
        }
      });
    }
    profileDiv();
    function moreTog(){
        document.getElementById('more-button').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
        
            var optionsDiv = document.getElementById('more-options');
            optionsDiv.classList.toggle('hidden'); // Toggle the visibility
        
            // Close the div if clicked outside
            document.addEventListener('click', function(event) {
                if (!optionsDiv.contains(event.target) && !document.getElementById('more-button').contains(event.target)) {
                    optionsDiv.classList.add('hidden');
                }
            });
        });
        
        
    }
    moreTog();
