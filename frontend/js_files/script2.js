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
