(() => {

  'use-strict'

  const themeSwiter = {

    init: function() {
      this.wrapper = document.getElementById('theme-switcher-wrapper')
      this.button = document.getElementById('theme-switcher-button')
      this.theme = this.wrapper.querySelectorAll('[data-theme]')
      this.themes = ['theme-orange', 'theme-purple', 'theme-green', 'theme-blue']
      this.events()
      this.start()
    },
    
    events: function() {
      this.button.addEventListener('click', this.displayed.bind(this), false)
      this.theme.forEach(theme => theme.addEventListener('click', this.themed.bind(this), false))
    },

    start: function() {
      let theme = this.themes[Math.floor(Math.random() * this.themes.length)]
      document.body.classList.add(theme)
    },

    displayed: function() {
      (this.wrapper.classList.contains('is-open'))
        ? this.wrapper.classList.remove('is-open')
        : this.wrapper.classList.add('is-open')
    },

    themed: function(e) {
      this.themes.forEach(theme => {
        if(document.body.classList.contains(theme))
          document.body.classList.remove(theme)
      })
      return document.body.classList.add(`theme-${e.currentTarget.dataset.theme}`)
    }

  }

  themeSwiter.init()

})()
document.addEventListener('DOMContentLoaded', function() {
  const moreButton = document.getElementById('more-button');
  const moreMenu = document.getElementById('more-menu');

  // Toggle the visibility of the more menu when the button is clicked
  moreButton.addEventListener('click', function(event) {
      event.preventDefault();
      moreMenu.classList.toggle('hidden');
  });

  // Hide the more menu when clicking outside of it
  document.addEventListener('click', function(event) {
      if (!moreButton.contains(event.target) && !moreMenu.contains(event.target)) {
          moreMenu.classList.add('hidden');
      }
  });
});
function profileDiv() {
      document.getElementById('toggleImage').addEventListener('click', function() {
          var menu = document.getElementById('menu');
          menu.classList.toggle('hidden'); // This line toggles the 'hidden' class
      });
  }
  
  // Ensure the DOM is fully loaded before running the script
  document.addEventListener('DOMContentLoaded', function() {
      profileDiv();
  });