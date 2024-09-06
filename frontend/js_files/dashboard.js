


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
                dayElement.classList.add('cursor-pointer', 'p-1', 'hover:bg-indigo-100', 'rounded-lg');
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
    document.getElementById('removeButton').addEventListener('click', function() {
        const div = document.getElementById('removableDiv');
        div.remove();  // Remove the div from the DOM
    });


    function c_Meetup(){
        const events = [
            {
                date: 'Aug 24',
                day: 'Saturday',
                time: '11:00 AM',
                title: 'Canvs x ADPList: Fireside chat w/ Dream11 CDO - Priyanka Kodikal',
                description: 'By Aalhad Joshi, Debprotim Roy & ADPList',
                location: 'Of10 - Coworking Space in Powai',
                badges: ['ADPList HQ Presents', 'Local Meetup', 'Waitlist'],
                imageUrl: 'https://via.placeholder.com/100x100'
            },
            {
                date: 'Aug 25',
                day: 'Sunday',
                time: '12:00 PM',
                title: 'Canvs x ADPList: Networking Event',
                description: 'By Nikhil Sinha, Rajesh Sharma & ADPList',
                location: 'Of10 - Coworking Space in Powai',
                badges: ['ADPList HQ Presents', 'Local Meetup'],
                imageUrl: 'https://via.placeholder.com/100x100'
            },
            {
                date: 'Aug 26',
                day: 'Monday',
                time: '10:00 AM',
                title: 'Startup Pitching Event',
                description: 'By Shweta Mehta, Anand Sharma & ADPList',
                location: 'WeWork - Bandra',
                badges: ['Investor Meetup', 'Pitch Event'],
                imageUrl: 'https://via.placeholder.com/100x100'
            },
            {
                date: 'Aug 26',
                day: 'Monday',
                time: '10:00 AM',
                title: 'Startup Pitching Event',
                description: 'By Shweta Mehta, Anand Sharma & ADPList',
                location: 'WeWork - Bandra',
                badges: ['Investor Meetup', 'Pitch Event'],
                imageUrl: 'https://via.placeholder.com/100x100'
            }
        ];
        
        // Function to generate event item HTML
        function generateEventItem(event) {
            let badgeHtml = event.badges.map(badge => `<span class="meetup-badge badge-gray ml-2">${badge}</span>`).join('');
            return `
                <div class="border-l-4 border-gray-200 pl-4 mb-6">
                    <p class="text-gray-600 text-sm mb-4"><span class="font-bold">${event.date}</span> ${event.day}</p>
                    <div class="bg-gray-50 p-4 rounded-lg shadow-sm flex justify-between items-start mb-4">
                        <div>
                            <p class="text-gray-600 text-sm">${event.time}</p>
                            <h4 class="text-lg font-semibold">${event.title}</h4>
                            <p class="text-gray-600 text-sm mt-2">${event.description}</p>
                            <p class="text-gray-600 text-sm">${event.location}</p>
                            <div class="mt-2">${badgeHtml}</div>
                        </div>
                        <img src="${event.imageUrl}" alt="Event" class="rounded-lg">
                    </div>
                </div>
            `;
        }
        
        // Function to display events
        function displayEvents() {
            const eventList = document.getElementById('event-list');
            eventList.innerHTML = ''; // Clear the list before appending new items
        
            events.forEach(event => {
                eventList.innerHTML += generateEventItem(event);
            });
        }
        
        // Initial display of events
        displayEvents();
    }
    c_Meetup();


 
    const toggleCalendar = document.getElementById('toggleCalendar');
    const toggleBackToWeekly = document.getElementById('toggleBackToWeekly');
    const weeklyCalendar = document.getElementById('weeklyCalendar');
    const monthlyCalendar = document.getElementById('monthlyCalendar');
    const milestoneSection = document.getElementById('milestoneSection');
    
    // Handle toggle to Monthly Calendar
    toggleCalendar.addEventListener('change', function () {
        if (this.checked) {
            // Hide the milestone section
            milestoneSection.style.display = 'none';
            // Hide the weekly calendar and show the monthly calendar
            weeklyCalendar.classList.add('hidden');
            monthlyCalendar.classList.remove('hidden');
            // renderMonthlyCalendar();  
            // Ensure the weekly toggle is unchecked
            toggleBackToWeekly.checked = false;
        }
    });
    
    // Handle toggle back to Weekly Calendar
    toggleBackToWeekly.addEventListener('change', function () {
        if (this.checked) {
            // Show the milestone section
            milestoneSection.style.display = 'block';
            // Show the weekly calendar and hide the monthly calendar
            weeklyCalendar.classList.remove('hidden');
            monthlyCalendar.classList.add('hidden');
            // Ensure the monthly toggle is unchecked
            toggleCalendar.checked = false;
            // Turn off the current toggle
            this.checked = false;
        }
    });
    
    // Function to render full monthly calendar
    // function renderMonthlyCalendar() {
    //     const calendarDatesMonthly = document.getElementById('calendarDatesMonthly');
    //     calendarDatesMonthly.innerHTML = '';
    
    //     // Assuming 31 days for the month of August
    //     const totalDays = 31;
    //     const startDay = 2;  // Start on a Tuesday (0 = Sunday, 1 = Monday, etc.)
    
    //     // Render empty slots for days before the start of the month
    //     for (let i = 0; i < startDay; i++) {
    //         const emptySlot = document.createElement('div');
    //         calendarDatesMonthly.appendChild(emptySlot);
    //     }
    
    //     // Render each day of the month
    //     for (let day = 1; day <= totalDays; day++) {
    //         const dayElement = document.createElement('div');
    //         dayElement.textContent = day;
    //         calendarDatesMonthly.appendChild(dayElement);
    //     }
    // }
    
    

    document.addEventListener('DOMContentLoaded', function () {
        const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        const today = new Date();
        let currentMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
        let selectedDate = new Date();
        const monthYearElementFull = document.getElementById('monthYear-full');  // The <h3> element that shows the current month and year
        const calendarDatesElement = document.getElementById('calendarDatesMonthly');
        const selectedDateElement = document.getElementById('selectedDate');
        const sessionList = document.getElementById('sessionContainer');
    
        // Session data (example)
        // const sessions = {
        //     "2024-08-21": ["Session 1", "Session 2"],
        //     "2024-08-22": ["Session 3"],
        //     "2024-08-23": ["Session 4", "Session 5", "Session 6"],
        //     "2024-08-24": ["Session 7"],
        //     "2024-08-26": ["Session 8", "Session 9"]
        // };
    
        // Function to update the displayed month and year
        function updateMonthYear() {
            const month = currentMonthStart.toLocaleString('default', { month: 'long' });
            const year = currentMonthStart.getFullYear();
            monthYearElementFull.textContent = `${month} ${year}`;  // Update the <h3> with the new month and year
        }
    
        // Function to render the monthly calendar
        function renderMonthlyCalendar() {
            calendarDatesElement.innerHTML = '';
    
            const firstDay = new Date(currentMonthStart.getFullYear(), currentMonthStart.getMonth(), 1);
            const lastDay = new Date(currentMonthStart.getFullYear(), currentMonthStart.getMonth() + 1, 0);
            const startDay = firstDay.getDay();
    
            // Render empty slots before the first day of the month
            for (let i = 0; i < startDay; i++) {
                const emptySlot = document.createElement('div');
                calendarDatesElement.appendChild(emptySlot);
            }
    
            // Render days of the current month
            for (let day = 1; day <= lastDay.getDate(); day++) {
                const date = new Date(currentMonthStart.getFullYear(), currentMonthStart.getMonth(), day);
                const dayElement = document.createElement('div');
                dayElement.textContent = day;
                dayElement.classList.add('cursor-pointer', 'p-1', 'hover:bg-indigo-100', 'rounded-lg');
                dayElement.onclick = () => showSessions(date);
                calendarDatesElement.appendChild(dayElement);
            }
        }
    
        // Function to show sessions for the selected date
        // function showSessions(date) {
        //     selectedDate = date;
        //     const dateKey = date.toISOString().split('T')[0];
        //     selectedDateElement.textContent = date.toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' });
    
        //     sessionList.innerHTML = '';
    
        //     if (sessions[dateKey] && sessions[dateKey].length > 0) {
        //         sessions[dateKey].forEach(session => {
        //             const li = document.createElement('li');
        //             li.textContent = session;
        //             li.classList.add('p-2', 'bg-white', 'mb-2', 'rounded-lg', 'shadow-sm');
        //             sessionList.appendChild(li);
        //         });
        //     } else {
        //         sessionList.innerHTML = `
        //             <li class='text-gray-600 flex items-center'>
        //                 <a href="#bookSession" class="flex items-center text-blue-600">
        //                     <i class="fas fa-calendar-plus mr-2"></i>
        //                     <span>No sessions available.<br><strong class="hover:underline text-blue-800">Book a session</strong></span>
        //                 </a>
        //             </li>
        //         `;
        //     }
        // }
    
        // Event listeners for navigating months
        document.getElementById('prevMonth').onclick = () => {
            currentMonthStart.setMonth(currentMonthStart.getMonth() - 1);  // Move to the previous month
            updateMonthYear();  // Update the monthYearElement with the new month
            renderMonthlyCalendar();  // Re-render the calendar
        };
    
        document.getElementById('nextMonth').onclick = () => {
            currentMonthStart.setMonth(currentMonthStart.getMonth() + 1);  // Move to the next month
            updateMonthYear();  // Update the monthYearElement with the new month
            renderMonthlyCalendar();  // Re-render the calendar
        };
    
        // Initial setup
        updateMonthYear();  // Set the initial month and year
        renderMonthlyCalendar();  // Render the initial calendar
        // showSessions(new Date());
    });
    