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

    function DateNav() {
    const dateRangeElement = document.getElementById('date-range');
    const prevWeekButton = document.getElementById('prev-week');
    const nextWeekButton = document.getElementById('next-week');

    let today = new Date();
    let startDate = new Date(today);
    const daysToAdd = 7;

    // Adjust the startDate to the beginning of the current week (Monday)
    startDate.setDate(today.getDate() - today.getDay() + 1);

    function updateDateRange() {
        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + daysToAdd - 1);
        const options = { month: 'short', day: 'numeric', year: 'numeric' };

        dateRangeElement.textContent = `${startDate.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}`;
        updateCalendarDays();
    }

    function updateCalendarDays() {
        const dayColumns = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        const options = { weekday: 'short', month: 'short', day: 'numeric' };

        dayColumns.forEach((dayColumnId, index) => {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + index);
            const dayColumn = document.getElementById(dayColumnId);
            const dayHeader = dayColumn.querySelector('p');
            dayHeader.innerHTML = date.toLocaleDateString('en-US', options).replace(', ', '<br>');
            
            // Highlight the current day
            if (date.toDateString() === today.toDateString()) {
                dayColumn.classList.add('bg-yellow-200'); // Example: highlight with a background color
            } else {
                dayColumn.classList.remove('bg-yellow-200');
            }
        });
    }

    prevWeekButton.addEventListener('click', () => {
        startDate.setDate(startDate.getDate() - daysToAdd);
        updateDateRange();
    });

    nextWeekButton.addEventListener('click', () => {
        startDate.setDate(startDate.getDate() + daysToAdd);
        updateDateRange();
    });

    updateDateRange();

    const currentDateElement = document.getElementById('current-date');
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    currentDateElement.textContent = today.toLocaleDateString('en-US', options);
}

DateNav();

function setActiveTab() {
    const currentPath = window.location.pathname.split("/").pop(); // Get the current page filename
    const links = document.querySelectorAll('nav a'); // Get all links in the navigation
  
    links.forEach(link => {
      const href = link.getAttribute('href'); // Get the href of each link
      if (href === `./${currentPath}`) {
        link.classList.add('text-indigo-600'); // Add 'active' class or 'text-indigo-600' for active tab
        link.classList.add('bg-gray-100');
      } else {
        link.classList.remove('text-indigo-600'); // Remove 'active' class from others
        link.classList.remove('bg-gray-100');
      }
    });
  }
  
  // Run the function when the page loads
  window.onload = setActiveTab;




    