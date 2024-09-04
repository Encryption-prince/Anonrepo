


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
    function CalToggle(){
        const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    // Add click event listener to each button
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove the active class from all buttons
            toggleButtons.forEach(btn => btn.classList.remove('bg-gray-700'));
            // Add the active class to the clicked button
            button.classList.add('bg-gray-300');
        });
    });
    
    }
    CalToggle();