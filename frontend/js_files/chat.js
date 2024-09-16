function threeDots(){
    const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
});

document.addEventListener('click', function(event) {
    if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.add('hidden');
    }
});
}
threeDots();



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